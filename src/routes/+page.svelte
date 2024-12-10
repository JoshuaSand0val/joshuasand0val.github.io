<script>
	import "devicon";
	import Meta from "$lib/Meta.svelte";
</script>

<Meta title="Home" description="Jes is a full-stack web developer." />

<article class="container">
	<img class="profile" loading="lazy" src="pfp.png" alt="Jes" />
	<div class="content">
		<h1>Hey, I'm Jess.&nbsp;💖</h1>
		<h2>Full-stack web developer.&nbsp;👩🏻‍💻</h2>
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
		margin: 0 auto auto;
	}

	.profile {
		display: block;
		width: 40%;
		max-width: var(--sm-container);
		border-radius: 15px 255px 15px 225px/225px 15px 255px;
		border: 1px dashed var(--neutral-200-700);
		background-image: linear-gradient(123deg, var(--neutral-200-700) -300%, transparent);
		object-fit: cover;
		margin: 0 var(--lg-size) var(--md-size) 0;
		float: left;
		@media (max-width: 180px) {
			width: 100%;
		}
	}

	h1 {
		font-size: var(--7xl-font);
		font-weight: var(--heavy-font);
		margin-top: var(--3xs-size);
	}

	h2 {
		font-size: var(--3xl-font);
		font-weight: var(--thin-font);
	}

	p {
		font-size: var(--lg-font);
	}

	.skills {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		font-size: var(--3xl-font);
		gap: var(--sm-size);
		margin: var(--md-size) 0;
	}

	a {
		font-family: var(--accent-font);
		font-size: var(--xl-font);
	}
</style>