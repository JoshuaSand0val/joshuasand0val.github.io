// Writer's Block: Text that swiftly updates itself as if being actively typed.

import { TypeAnimation } from "react-type-animation";

export default function WritersBlock({ initial, replace }) {
	return (
		<TypeAnimation
			sequence={[
				initial,
				1000,
				replace,
				10000
			]}
			preRenderFirstString={true}
			speed={60}
			repeat={Infinity}
			cursor={false}
		/>
	);
}