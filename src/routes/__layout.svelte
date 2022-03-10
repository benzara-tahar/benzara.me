<script lang="ts">
	import { Navbar, Footer } from '$layout';
</script>

<Navbar />
<div class="container mx-auto min-h-screen">
	<main>
		<slot />
	</main>
</div>
<Footer />

<style global lang="scss">
	@use 'src/styles/global';
</style>
