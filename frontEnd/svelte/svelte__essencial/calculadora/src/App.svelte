<script lang="ts">
	import Calculadora from './entidade/Calculadora.svelte';
</script>

<main>
	<Calculadora />
	
</main>

<style>
	:global(body) {
		background-color: rgba(16, 16, 16, 0.80);
	}

	:root {
        --color-background: rgba(16, 16, 16, 0.8);
		--color-text: rgba(16, 16, 16, 0.8);
		--color-text-contrast: rgba(239, 239, 239, 1);
        --primary: rgba(183, 9, 9, 1);
        --secondary: rgba(30, 217, 199, 0.81);
        --terciary: rgba(224, 96, 212, 1);
    }

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>