<script>
  import { onDestroy, onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { navigationStatus } from '$store/navigation.store';

  const progress = tweened(0, {
    duration: 500,
    easing: cubicOut,
  });
  const unsubscribe = navigationStatus.subscribe((state) => {
    if (state === 'loaded') {
      progress.set(1, { duration: 500 });
    }
  });
  onMount(() => {
    progress.set(Math.random(), { duration: 1500 });
  });
  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="progress-bar">
  <div class="progress-sliver" />
</div>

<div class="progress-bar">
  <div class="progress" style={`--width: ${$progress * 100}%`}>
    <div class="glow" />
  </div>
</div>

<style lang="postcss">
  .progress-bar {
    --glow-width: 200px;
    --glow-radius: 10px;

    height: 2px;
    width: 100%;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: #202b41;

    .progress {
      width: var(--width);
      background-color: #aceb00;
      position: relative;
      height: 100%;
      transition: width 0.5s ease-out;
      border-radius: 0px 2px 2px 0px;
    }
    .glow {
      width: var(--glow-width);
      max-width: 100%;
      height: 100%;
      float: right;
    }
    .glow::before,
    .glow::after {
      content: '';
      display: block;
      position: relative;
      border-radius: 0px 2px 2px 0px;
    }
    .glow::before {
      background: transparent;
      height: 100%;
      box-shadow: 0px 0px var(--glow-radius) #aceb00, 0px 0px var(--glow-radius) #aceb00;
      z-index: -5;
    }
    .glow::after {
      background: linear-gradient(to right, #24242400 0%, transparent 100%);
      height: calc(100% + var(--glow-radius) + var(--glow-radius));
      width: calc(100% + var(--glow-radius));
      top: var(--glow-radius);
      left: var(--glow-radius);
      z-index: -3;
    }
  }
</style>
