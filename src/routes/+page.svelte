<div class="container">
	<img src="pfp.jpg" alt="Joshua Elijah Sandoval" />
	<div>
		<h1>Hey, I'm Joshua Elijah Sandoval.</h1>
		<h2>A full-stack web developer based in Utah.</h2>
		<p>Welcome to my website! Here you can explore and learn more <a href="/about/">about myself</a> and my hobbies, <a href="/projects/">my projects</a>, and even <a href="/contact/">contact me</a>; if perhaps you're interested.</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-content: center;
		align-items: flex-start;
		width: 100%;
		max-width: var(--width-xl);
		container-type: inline-size;
		margin: auto;
		gap: var(--space-l-xl);
	}

	img {
		display: block;
		aspect-ratio: 1 / 1;
		width: var(--width-2xs);
		border: var(--space-3xs-2xs) solid currentColor;
		border-radius: 49% 51% 48% 52% / 57% 44% 56% 43%;
		object-fit: cover;
		flex: 0 1 33%;
	}

	div {
		max-width: 100%;
		container-type: inline-size;
		flex: 1 0 var(--width-m);
	}

	h1 {
		font-size: var(--font-4xl);
		font-weight: 800;
		margin-top: 0;
	}

	h2 {
		font-size: var(--font-xl);
		font-weight: 300;
		margin-bottom: var(--space-s-2xl);
	}

	p {
		font-size: var(--font-l);
	}

	a {
		font-family: var(--font-brand);
		font-size: var(--font-xl);
	}
</style>