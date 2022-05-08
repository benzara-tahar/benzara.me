<!-- this is my route provider.svelte -->
<script lang="ts">
	/*
    This route is just for singup/login with providers
    to set the session-cookie for the server
    just a redirect route :)
    */
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabase';
	// import { setAuthCookie } from '$lib/utils/session';
	import { onMount } from 'svelte';

	onMount(async () => {
		setTimeout(async () => {
			console.log('mounted', $page.url);
			// Check the query: refresh
			// if ($page.url.query.get('refresh') == 'true') {
			// 	// get the session from client side
			// 	const _session = supabase.auth.session();
			// 	// send it to server side
			// 	// await setAuthCookie(_session);
			// }
			// redirect to the home page anyway
			// window.location.replace('/');
		}, 2000);
	});
</script>
