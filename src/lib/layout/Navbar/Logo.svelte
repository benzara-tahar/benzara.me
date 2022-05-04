<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex space-x-1  items-center font-code">
	<span class="text-base text-slate-700 dark:text-slate-100 "> guest@benzara.me </span>

	<span class="text-base text-primary-300 animate-blink">
		:/~ {$page.status === 404
			? 'not-found :('
			: $page.url.pathname === '/'
			? 'home'
			: $page.url.pathname?.substring(1)}
		<!-- :/~ home -->
	</span>
</div>

<!-- {@debug $page} -->
<style lang="scss">
	.animate-blink {
		&::after {
			content: '';
			width: 4px;
			height: 16px;
			margin-left: 4px;
			margin-bottom: -2px;
			background: #aceb00;
			display: inline-block;
			animation: cursor-blink 1.5s steps(2) infinite;
		}
	}
	@keyframes cursor-blink {
		0% {
			opacity: 0;
		}
	}
</style>
