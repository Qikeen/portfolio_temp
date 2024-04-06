<script>

</script>
<style>
	.flex{
		display: flex;
		flex-direction: column;
		flex:1 200px;
		transition: all 1s 4.5s ease;
		border-radius: 10px;
		margin: 1vw;
		max-height:350px;
		max-width:350px;
		overflow: hidden;
		background-color: var(--bg-color, floralwhite);
		color:var(--text-color, black);

	}
	.flex:hover{
		transition: all 1s ease;
		flex-grow:5;
		height:auto;
		max-height:100%;
	}
	.flex > :global(picture) > :global(img){
		border-radius: 10px 10px 0 0;
		object-fit: cover;
		max-width: 100%;
		max-height:350px;
		transition: all 1.5s 5s ease;
		filter: blur(5px);
		scale: 1.1;
		
	}

	.flex:hover > :global(picture) > :global(img),
	.flex:active > :global(picture) > :global(img){
		transition: all 1.5s ease;
		max-height: 200px;
		filter: blur(0);

		
	}

	.flex > :global(p){
		padding:10px;
	}

	</style>

<div class='flex' ontouchstart=''>
<slot />
</div>