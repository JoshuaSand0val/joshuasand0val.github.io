<script>
	import "devicon";
	import Meta from "$lib/Meta.svelte";
</script>

<Meta title="Home" description="Joshua Elijah Sandoval is a full-stack web developer." />

<article class="container">
	<img class="profile" src="pfp.jpg" alt="Joshua Elijah Sandoval" />
	<div class="content">
		<h1>Hey, I'm Joshua Elijah Sandoval.</h1>
		<h2>A full-stack web developer based in Utah.</h2>
		<p>
			Welcome to my website! Here you can explore and learn more
			<a href="/about">about myself</a> or <a href="/projects">my projects</a>, and visit
			<a href="https://github.com/joshuasand0val" target="_blank">my Github</a> or
			<a href="https://linkedin.com/in/joshuasand0val/" target="_blank">my Linkedin</a>;
			if perhaps you're interested.
		</p>
		<span class="skills">
			<i class="devicon-html5-plain"></i>
			<i class="devicon-markdown-plain"></i>
			<i class="devicon-css3-plain"></i>
			<i class="devicon-sass-plain"></i>
			<i class="devicon-javascript-plain"></i>
			<i class="devicon-typescript-plain"></i>
			<i class="devicon-react-plain"></i>
			<i class="devicon-svelte-plain"></i>
			<i class="devicon-eleventy-plain"></i>
			<i class="devicon-npm-original-wordmark"></i>
			<i class="devicon-postgresql-plain"></i>
		</span>
	</div>
</article>

<style>
	.container, .content {
		display: inline;
		width: 100%;
		container-type: inline-size;
		margin: 0 auto auto;
	}

	.profile {
		display: block;
		aspect-ratio: 1 / 1;
		width: 40%;
		max-width: var(--width-s);
		border: var(--space-3xs-2xs) solid currentColor;
		border-radius: 49% 51% 48% 52% / 57% 44% 56% 43%;
		object-fit: cover;
		margin: 0 0 var(--space-s-m) var(--space-m-l);
		float: right;
	}

	h1 {
		font-size: var(--font-4xl);
		font-weight: 800;
		margin-top: 0;
	}

	h2 {
		font-size: var(--font-xl);
		font-weight: 300;
	}

	p {
		font-size: var(--font-l);
	}

	.skills {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		font-size: var(--font-2xl);
		gap: var(--space-xs-s);
		margin: var(--space-s-m) 0;
	}

	a {
		font-family: var(--font-brand);
		font-size: var(--font-xl);
	}
</style>