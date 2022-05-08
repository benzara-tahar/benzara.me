<script lang="ts">
	import { isLoggedIn, currentSession, currentUser } from '$lib/_store/auth.store';
</script>

<div
	class="flex flex-col p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
	role="alert"
>
	<pre> isLoggedIn: {$isLoggedIn}</pre>
	<pre> user: {JSON.stringify($currentUser, null, 2)}</pre>
	<pre> session: {JSON.stringify($currentSession, null, 2)}</pre>
</div>
