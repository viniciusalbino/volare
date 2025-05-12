// .eleventy.js  (ESM valendo)
export default function () {
  return {
    dir: {
      input:   "src",
      output:  "_site",
      includes:"src/includes",
      layouts: "src/includes/layouts"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine:     "njk",
    dataTemplateEngine:     "njk"
  };
}