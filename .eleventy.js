// Require 11ty site metadata:
const site = require("./_11ty/_data/site.js");

module.exports = function (eleventyConfig) {
	// Add year shortcode, used for copyright.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	// Add passthrough copy of website asset files:
	eleventyConfig.addPassthroughCopy("assets/");
	// Add filter that converts URLs into a canonical version:
	eleventyConfig.addFilter("canonicalURL", (value) => {
	return [site.url, value].join("/").replace(/([^:]\/)\/+/g, "$1");
	});
	// Customize input and layout directories:
	return {
		dir: {
			input: "_11ty",
			layouts: "_layouts",
			output: "docs"
		}
	};
};