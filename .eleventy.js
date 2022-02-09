module.exports = function (eleventyConfig) {
	// Copy production assets to output directory.
	eleventyConfig.addPassthroughCopy("assets");
	// Add year shortcode, used for copyright.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	// Customize I/O and template directories.
	return {
		dir: {
			input: "11ty",
			layouts: "_layouts",
			output: "docs",
		},
	};
};