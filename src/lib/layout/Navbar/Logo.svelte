<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex space-x-1  items-center font-code font-mono">
	<span class="font-bold text-lg text-accent-500"> {'{'} </span>
	<span class="text-base text-slate-700 dark:text-slate-300 "> {'benzara.me'} </span>
	<span class="font-bold text-lg text-accent-500  "> {'}'} </span>
</div>
<!-- 
<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex space-x-1  items-center font-code">
	<span class="text-xs sm:text-base text-slate-700 dark:text-slate-100 "> guest@benzara.me </span>

	<span class="text-xs sm:text-base text-primary-300 animate-blink" title={$page.url.pathname}>
		:/~ {$page.status === 404
			? 'not-found :('
			: $page.url.pathname === '/'
			? 'home'
			: $page.url.pathname?.length > 7
			? $page.url.pathname?.substring(1).slice(0, 7) + '...'
			: $page.url.pathname?.substring(1)}
	</span>
</div>

<style lang="scss">
	.animate-blink {
		&::after {
			content: '';
			width: 2px;
			height: 16px;
			margin-left: 4px;
			margin-bottom: -4px;
			background: rgb(230, 230, 230);
			display: inline-block;
			animation: cursor-blink 1.5s infinite reverse;
		}
	}
	@keyframes cursor-blink {
		0% {
			height: 0;
		}
		100% {
			height: 16px;
		}
	}
</style> -->
