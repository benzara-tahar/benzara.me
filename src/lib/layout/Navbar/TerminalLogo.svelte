<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// onMount(() => {
	// 	page.subscribe(console.log);
	// });
</script>

<div class="flex space-x-1  items-center font-mono">
	<span class="text-base text-gray-100 "> guest@benzara.me </span>

	<span class="text-base text-primary-300 ">
		:/~ {$page.url.pathname === '/' ? 'home' : $page.url.pathname?.substring(1)}
		<!-- :/~ home -->
	</span>
</div>
