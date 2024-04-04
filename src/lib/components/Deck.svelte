<script>
	export let hidden = false
</script>

<style>
	.flex{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.hidden{
		display:none;
	}
</style>

<div class="flex" class:hidden={hidden}>

	<slot />
</div>