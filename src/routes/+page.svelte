<script>
	import "devicon";
	import Meta from "$lib/Meta.svelte";
	import Projects from "$lib/projects/cards.svelte";
</script>

<Meta title="Home" description="Jes is a full-stack web developer." />

<article class="container">
	<img class="profile" loading="lazy" src="pfp.png" alt="Jes" />
	<div class="content">
		<h1>Hey, I'm Jess.&nbsp;💖</h1>
		<h2>Full-stack web developer.&nbsp;👩🏻‍💻</h2>
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
		<p>
			<strong>Nice to meet you!</strong> Welcome to my website!
			I am a hectic CSS guru, epic gamer, and designer with an eye for detail.
			Below you can explore <a href="#projects">my projects</a>, and feel free to visit
			<a href="https://github.com/joshuasand0val" target="_blank">my Github</a> or
			<a href="https://linkedin.com/in/heyjes/" target="_blank">my Linkedin</a>.
		</p>
	</div>
</article>
<article id="projects">
	<Projects />
</article>

<style>
	.container {
		display: block;
		margin: 0 auto;
	}

	.profile {
		display: block;
		height: min(40cqi, var(--sm-container));
		border-radius: 49% 51% 48% 52% / 57% 44% 56% 43%;
		border: 1px dashed var(--neutral-200-700);
		object-fit: cover;
		margin-bottom: min(var(--responsive-size), var(--sm-size));
		margin-left: clamp(var(--sm-size), var(--responsive-size), var(--xl-size));
		padding: var(--sm-size);
		float: right;
		@media (max-width: 240px) {
			width: 100%;
			height: auto;
			margin-left: 0;
			float: none;
		}
	}

	.content {
		overflow-wrap: normal;
	}

	h1 {
		font-size: var(--7xl-font);
		font-weight: var(--heavy-font);
		margin-top: var(--3xs-size);
	}

	h2 {
		font-size: var(--2xl-font);
		font-weight: var(--thin-font);
	}

	p {
		font-size: var(--lg-font);
		margin: var(--sm-size) 0 var(--3xs-size);
	}

	.skills {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		font-size: var(--3xl-font);
		gap: var(--sm-size);
		margin: var(--md-size) 0 var(--sm-size);
	}

	a {
		font-family: var(--accent-font);
		font-size: var(--xl-font);
	}
</style>