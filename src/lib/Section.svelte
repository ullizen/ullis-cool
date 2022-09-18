<script>
	import Calculator from "./Calculator.svelte"
</script>

<div class="wrapper">
	<div class="container">
		<h2>Work experience</h2>
		<h3>Valtech</h3>
		<p>3 years</p>
		<p>Worked on over 14 projects with Riksbanken, Cancerfonden, Mycronic, MSB, Eton Shirts, Lantmännen, Svea Ekonomi, Täby kommun, SKR, Svensk Fastighetsförmedling</p>
		<h3>Here's a calculator if you need one:</h3>
		<Calculator />
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		background: rgb(208, 208, 208);
		display: flex;
        flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
        max-width: 650px;
        padding: 2rem 1rem;
	}
</style>
