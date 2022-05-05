<script>
	// language profeciency in a scale of 0-100%
	const languages = {
		Arabic: 95,
		English: 88,
		French: 80
	};
</script>

<section class="flex flex-col">
	<h1 class="mb-2  font-semibold text-primary-500">LANGUAGES</h1>

	<div class="flex flex-col gap-2">
		{#each Object.keys(languages) as lang}
			<div class="flex  items-center ">
				<!-- TODO! fix tailwind wiered behavior and replace styles with classes!!!!  -->
				<span class=" dark:text-slate-400 text-slate-600 " style="width: 80px;">
					{lang}:
				</span>
				<div
					class="rounded-md bg-slate-300 dark:bg-slate-800 w-full flex items-center "
					style="height: 8px; max-width:120px"
				>
					<span
						class="h-[10px] bg-primary-500 rounded-md block"
						style="width:{languages[lang]}%; height: 6px; background:#00D6D3;"
					/>
				</div>
			</div>
		{/each}
	</div>
</section>
