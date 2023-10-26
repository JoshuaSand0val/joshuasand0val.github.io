// Writer's Block: Text that swiftly updates itself as if being actively typed.

import { TypeAnimation } from "react-type-animation";

export default function WritersBlock({ initial, replace, repeat = Infinity }) {
	return (
		<TypeAnimation
			sequence={[
				initial,
				3000,
				replace,
				3000
			]}
			preRenderFirstString={true}
			speed={60}
			repeat={repeat}
			cursor={false}
		/>
	);
}