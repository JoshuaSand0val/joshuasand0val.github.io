import "devicon";

import styles from "./Homepage.module.css";
import Link from "../components/Link";

/** Link component styled relative for the homepage. */
const StyledLink: typeof Link = ({ to, content }) => (
	<span className={styles.link}>
		<Link to={to} content={content} />
	</span>
);

/** Links to my services or projects. */
const MyLinks: { [key: string]: () => ReturnType<typeof StyledLink> } = {
	Projects() {
		return <StyledLink to="#projects" content="my projects" />;
	},
	Github() {
		return <StyledLink to="https://github.com/joshuasand0val" content="my Github" />;
	},
	Linkedin() {
		return <StyledLink to="https://linkedin.com/in/heyjes/" content="my Linkedin" />;
	}
};

/** The website homepage. */
export default function Homepage() {
	return (
		<article className={styles.container}>
			<header className={styles.intro}>
				<img className={styles.profile} loading="lazy" src="/profile.png" alt="Profile picture of myself." />
				<h1 className={styles.title}>Hey, I'm Jess.&nbsp;💖</h1>
				<h2 className={styles.subtitle}>Full-stack web developer.&nbsp;👩🏻‍💻</h2>
			</header>
			<span className={styles.skills}>
				<i className="devicon-html5-plain"></i>
				<i className="devicon-markdown-plain"></i>
				<i className="devicon-css3-plain"></i>
				<i className="devicon-sass-plain"></i>
				<i className="devicon-javascript-plain"></i>
				<i className="devicon-typescript-plain"></i>
				<i className="devicon-react-plain"></i>
				<i className="devicon-svelte-plain"></i>
				<i className="devicon-eleventy-plain"></i>
				<i className="devicon-npm-original-wordmark"></i>
				<i className="devicon-postgresql-plain"></i>
			</span>
			<p className={styles.about}>
				<strong>Nice to meet you!</strong> Welcome to my website!
				I am a hectic CSS guru, epic gamer, and designer with an eye for detail.
				Below you can explore my <MyLinks.Projects />.
				Feel free to visit <MyLinks.Github /> or <MyLinks.Linkedin />.
			</p>
		</article>
	);
}