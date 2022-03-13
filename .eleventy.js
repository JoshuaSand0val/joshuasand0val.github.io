module.exports = function (eleventyConfig) {
	// Copy production assets to output directory.
	eleventyConfig.addPassthroughCopy("assets");
	// Add year shortcode, used for copyright.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	// Add filter that trims duplicate forward slashes in a URL:
	eleventyConfig.addFilter("trimURLslashes", (value) => {
		return value.replace(/([^:]\/)\/+/g, "$1");
	});
	// Customize I/O and template directories.
	return {
		dir: {
			input: "11ty",
			layouts: "_layouts",
			output: "docs",
		},
	};
};