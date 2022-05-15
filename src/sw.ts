/// <reference lib="WebWorker" />

import { build, files, prerendered, version } from '$service-worker';

/**
 * Service worker global execution context.
 */
const ctx = self as unknown as ServiceWorkerGlobalScope;

/**
 * Dictionary of cacheable resources.
 */
const CACHES = new Map([
	[`vite-cache-v${version}`, build],
	[`file-cache-v${version}`, files],
	[`page-cache-v${version}`, prerendered]
]);

/**
 * Determine if resource should be cached.
 */
const cacheable = (resource: string): string | undefined => {
	for (const [name, resources] of CACHES.entries()) {
		if (resources.includes(resource)) {
			return name;
		}
	}
};

/**
 * Cache cacheable resources.
 */
const maybeCache = (request: Request, response: Response) => {
	const name = cacheable(request.url);
	name &&
		caches.open(name).then((cache) => {
			cache.put(request, response.clone());
		});
	return response;
};

/**
 * Install and activate caches.
 */
ctx.addEventListener('install', (evt) => {
	const deferreds = [];
	for (const [name, resources] of CACHES.entries()) {
		deferreds.push(caches.open(name).then((cache) => cache.addAll(resources)));
	}
	evt.waitUntil(Promise.all(deferreds).finally(ctx.skipWaiting));
});

/**
 * Intercept requests and return cached resources if available.
 */
ctx.addEventListener('fetch', (evt) => {
	evt.respondWith(
		caches.match(evt.request).then((response) => {
			return (
				response ||
				fetch(evt.request).then((res) => {
					return maybeCache(evt.request, res);
				})
			);
		})
	);
});

/**
 * Prune caches, preserving only current cache versions.
 */
ctx.addEventListener('activate', (evt) => {
	evt.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys.map((key) => (CACHES.has(key) ? Promise.resolve() : caches.delete(key)))
			);
		})
	);
});
