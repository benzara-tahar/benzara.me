<script lang="ts">
	import { Navbar, Footer } from '$layout';
</script>

<Navbar />
<div class="relative w-full h-full m-0 flex">
	<slot />
</div>
<Footer />

<style global lang="scss">
	@use 'src/styles/app';
</style>
