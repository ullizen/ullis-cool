<script>
    let result = ""

	function input(num) {
		if (result.length > 12) {
			return;
		}

		result += num;
	}

	function equals() {
		const newResult = eval(result).toString().slice(0, 13);

		result = newResult;
	}
</script>

<div class="calculator">
	<div class="display">{result}</div>
	<div class="buttons">
		<div class="row">
			<button on:click={() => input(7)}>7</button>
			<button on:click={() => input(8)}>8</button>
			<button on:click={() => input(9)}>9</button>
			<button on:click={() => input("/")}>÷</button>
		</div>
		<div class="row">
			<button on:click={() => input(4)}>4</button>
			<button on:click={() => input(5)}>5</button>
			<button on:click={() => input(6)}>6</button>
			<button on:click={() => input("*")}>×</button>
		</div>
		<div class="row">
			<button on:click={() => input(1)}>1</button>
			<button on:click={() => input(2)}>2</button>
			<button on:click={() => input(3)}>3</button>
			<button on:click={() => input("-")}>-</button>
		</div>
		<div class="row">
			<button on:click={() => input(0)}>0</button>
			<button on:click={() => input(".")}>•</button>
			<button on:click={equals}>=</button>
			<button on:click={() => input("+")} class="plus">+</button>
		</div>
	</div>
</div>

<style>
	.calculator {
		height: 400px;
		width: 290px;
		padding: 30px 15px;
		border-radius: 5px;
		border-bottom: 7px solid #222;
		display: flex;
		flex-direction: column;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		background: #404040;
		color: white;
	}

	.display {
		height: 50px;
		background: #f8f8f8;
		border-top: 2px solid #888;
		border-radius: 2px;
		margin: 0px 5px 30px 5px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 10px;
		font-size: 28px;
		color: black;
	}

	.row {
		display: flex;
		flex: 1;
		align-items: stretch;
	}

	.buttons {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		align-self: stretch;
	}

	button {
		flex: 1;
		margin: 6px;
		font-family: inherit;
		font-size: inherit;
		cursor: pointer;
	}

	button {
		border-radius: 5px;
		background: #555555;
		color: white;
		text-transform: uppercase;
		border: 1px solid rgba(0, 0, 0, 0);
		box-sizing: border-box;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 3px rgba(0, 0, 0, 0.43);
		border-bottom: 3px solid transparent;
	}

	button:active,
	button:focus {
		outline: none;
		box-shadow: none;
		border: 1px solid rgba(0, 0, 0, 0.33);
	}

	button:hover {
		background: #666;
	}

	.plus {
		background: #cc4444;
		font-weight: bold;
	}

	.plus:hover {
		background: #e25b5b;
	}
</style>
