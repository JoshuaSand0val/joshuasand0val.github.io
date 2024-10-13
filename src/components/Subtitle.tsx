// Smaller introductory title.

interface props {
	content: string
}

export default function Subtitle({ content }: props) {
	return (
		<h2 className="
			font-display
			~2xs/xl:~text-lg/2xl
			-mt-1.5">
			{content}
		</h2>
	);
}