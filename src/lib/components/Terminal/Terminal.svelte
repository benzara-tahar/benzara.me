<script lang="ts">
	let promptPrefix;
</script>

<div
	class=" font-code w-full max-w-xl rounded-md border border-rhino-600 bg-rhino-700 h-96 flex flex-col"
>
	<!-- top bar -->

	<div class="flex flex-row items-center justify-between bg-slate-800s">
		<div class="flex flex-row space-x-2 px-6 py-3">
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-red-500" />
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-yellow-500" />
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-green-500" />
		</div>

		<div
			class="rounded-xl text-gray-400  bg-rhino-600 bg-opacity-40 px-2 py-1   flex items-center justify-center w-full mx-2 text-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-github"
				><path
					d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
				/></svg
			>

			<a target="_blank" href="https://github.com/benzara-tahar" class="text-xs ml-2">
				github.com/benzara-tahar
			</a>
		</div>
	</div>
	<!-- cli -->
	<div class="flex flex-col  p-2">
		<div class="entry">
			<span class="prompt">stranger@benzara.me:</span>
			<span class="current-dir"> ~/home</span>
		</div>
		<div class="entry">
			<span class="file">tldr.json</span>
			<span class="dir"> photots</span>
		</div>
	</div>
</div>

<style lang="scss">
	.entry {
		// @apply flex;
	}
	.prompt {
		color: #dbdbdb;
	}

	.file {
		color: #a3a3a3;
	}
	.dir {
		color: #90f1f8;
		font-weight: 700;
		cursor: pointer;
	}
	.current-dir {
		color: #aceb00;
		margin-left: 0.5rem;
	}
</style>
