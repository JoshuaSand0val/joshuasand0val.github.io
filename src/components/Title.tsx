// Large introductory title.

interface props {
	content: string
}

export default function Title({ content }: props) {
	return (
		<h1 className="
			font-display
			font-bold
			~2xs/xl:~text-xl/4xl
			text-slate-900 dark:text-slate-200">
			{content}
		</h1>
	);
}