<script>
</script>
<style>
	.flex{
		display: flex;
		flex-direction: column;
		flex:1 150px;
		transition: all 1s ease;
		border-radius: 10px;
		margin: 5px;
		height:350px;
		max-width:250px;
		overflow: hidden;
		background-color: var(--bg-color, floralwhite);

	}
	.flex:hover{
		transition: all 1s ease;
		flex-grow:100;
	}
	.flex > :global(picture) > :global(img){
		border-radius: 10px 10px 0 0;
		object-fit: cover;
		max-width: 100%;
		max-height:350px;
		transition: all 2s ease;
		filter: blur(5px);
		scale: 1.1;
		
	}

	.flex:hover > :global(picture) > :global(img),
	.flex:active > :global(picture) > :global(img){
		transition: all 1.5s ease;
		max-height: 200px;
		filter: blur(0);
		

/* 165 at 800, 192.5 at 900, 220 at 1000

		
	}

	</style>

<div class='flex' ontouchstart=''>
<slot />
</div>