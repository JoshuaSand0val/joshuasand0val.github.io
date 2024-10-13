// Represents an icon from the "devicon" NPM package.

import "devicon";

interface props {
	icon: string
}

export default function DevIcon({ icon }: props) {
	return <i className={`devicon-${icon}`}></i>;
}