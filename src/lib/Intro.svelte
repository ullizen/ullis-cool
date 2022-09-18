<div class="wrapper">
    <div class="container">
        <span class="happy-face">:)</span>
        <h1>I'm a developer that loves data visualization & being creative, while also getting things done.</h1>
        <p>Scroll down to continue <span class="underscore">_</span></p>
    </div>
</div>

<style>
	.wrapper {
		height: 100vh;
		width: 100%;
		background: #0827f5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Lucida Console', Courier, monospace;
		font-family: 'Azeret Mono', monospace;
		color: white;
	}

    .container {
        display: flex;
		flex-direction: column;
		justify-content: center;
        max-width: 650px;
        padding: 0 1rem;
    }

    .happy-face {
        font-family: system-ui;
        font-size: 8em;
    }

	h1 {
		font-size: 1.75rem;
	}

	@keyframes cursor-blink {
		0% {
			visibility: hidden;
		}
	}

	.underscore {
        opacity: 1;
		animation: cursor-blink 1.5s steps(2) infinite;
	}
</style>
