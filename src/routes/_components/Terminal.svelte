<script lang="ts">
	const promptPrefix = 'stranger@benzara.me';
	let inputText: string = 'help';
	let currentDir = '/home';
	let terminal: HTMLElement;
	let systemFiles = [
		{
			name: '/', // root
			type: 'folder',
			children: [
				{
					name: 'home',
					type: 'folder',
					children: [
						{ name: 'tldr.json', type: 'file' },
						{ name: 'sikada.txt', type: 'file' },
						{
							name: 'photos',
							type: 'folder',
							children: [
								{ name: 'me.jpg', type: 'file' },
								{ name: 'workspace.jpg', type: 'file' }
							]
						}
					]
				}
			]
		}
	];
	// history of user commands
	let history = [];
	// log of all commands
	let log = [];

	const onKeyUp = (event) => {
		// cancel current command
		if (event.ctrlKey && event.key.toLowerCase() === 'c') {
			inputText = '';
			return;
		}
		if (event.key === 'Enter') {
			runCommand(inputText);
			return;
		}
	};

	function output(out: string) {
		// duplicate user command
		terminal.querySelector('.input').insertAdjacentHTML(
			'beforebegin',
			`<div class="entry prefixedt">
				<span class="output">${inputText} </span>
			</div>`
		);
		// output command result
		terminal.querySelector('.input').insertAdjacentHTML(
			'beforebegin',
			`<div class="entry">
				<span class="output">${out} </span>
			</div>`
		);

		inputText = '';
	}

	const runCommand = (cmd: string) => {
		if (!cmd) return;
		const command = cmd.split(' ')[0].toLowerCase();
		const args = cmd.split(' ').slice(1);

		switch (command) {
			case 'cd':
				cd(systemFiles, currentDir, args);
				break;
			case 'help':
				help(args);
				break;

			case 'clear':
				clear();
				break;
			case 'whoami':
				whoami();
				break;

			case 'cat':
				cat(systemFiles, currentDir, args);
				break;

			case 'ls':
				ls(systemFiles, currentDir, args);
				break;

			default:
				commandNotFound(cmd);
				break;
		}
	};

	function cd(systemFiles: any, currentDir: string, args: string[]) {
		console.log(' cd');
	}
	function help(args: string[]) {
		output('command not found');
	}
	function clear() {
		console.log(' clear');
	}
	function whoami() {
		console.log(' whoami');
	}
	function ls(systemFiles: any, currentDir: string, args: string[]) {}

	function cat(systemFiles: any, currentDir: string, args: string[]) {
		console.log(' cat');
	}

	function commandNotFound(cmd) {
		terminal.insertAdjacentHTML(
			'beforeend',
			`<span class="text-red-300">command ${cmd} not found </span>`
		);
	}
</script>

<div
	class=" font-code w-full  rounded-md border border-slate-800 bg-black/10 bg-  h-[500px] flex flex-col z-10"
>
	<!-- top bar -->

	<div class="flex flex-row items-center justify-between bg-slate-800s">
		<div class="flex flex-row space-x-2 px-6 py-3">
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-red-500" />
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-yellow-500" />
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-green-500" />
		</div>
		<div
			class="rounded-xl text-slate-400  bg-slate-600 bg-opacity-40 px-2 py-1   flex items-center justify-center w-full mx-2 text-center"
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
	<div class="flex flex-col  p-2 terminal" bind:this={terminal}>
		<div class="entry">
			<span class="prompt">stranger@benzara.me:</span>
			<span class="current-dir"> ~{currentDir}</span>
		</div>

		<div class="input">
			dfs
			<input
				on:keyup={onKeyUp}
				bind:value={inputText}
				type="text"
				class="outline-none bg-transparent text-yellow-400 pl-5"
			/>
			<!-- style="background-color: transparent;" -->
		</div>
		<!-- <span class="file">tldr.json</span>
			<span class="dir"> photots</span> -->
	</div>
</div>

<style lang="scss">
	// @import 'src/styles/variables.scss';
	:global(.terminal) {
		.output {
			@apply text-slate-100 pl-1;
		}
		.entry {
			&.prefixed {
				content: '$:';
				position: absolute;
				left: 0.6rem;
				color: #8ec200;
				font-family: monospace;
				font-weight: bold;
				font-size: 1rem;
			}
		}
		.input {
			&::after {
				// todo: refactor duplication
				content: '$:';
				position: absolute;
				left: 0.6rem;
				color: #8ec200;
				font-family: monospace;
				font-weight: bold;
				font-size: 1rem;
			}
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
	}
</style>
