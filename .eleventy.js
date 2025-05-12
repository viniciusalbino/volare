import { eleventyImagePlugin } from "@11ty/eleventy-img";
import eleventyPluginRss from "@11ty/eleventy-plugin-rss";
import { format } from "date-fns";
import vitePlugin from "@11ty/eleventy-plugin-vite";

export default function(eleventyConfig) {
  // Debug: Log plugin loading
  console.log("✅ Eleventy config carregado!");
  
  // Add Vite plugin
  eleventyConfig.addPlugin(vitePlugin);
  
  // Add a Nunjucks date filter FIRST
  eleventyConfig.addNunjucksFilter("date", function(date, formatStr) {
    if(date === "now") date = new Date();
    return format(new Date(date), formatStr);
  });

  // Register the official RSS plugin for absoluteUrl and other filters
  eleventyConfig.addPlugin(eleventyPluginRss);
  console.log("RSS plugin loaded");

  // Add a custom filter to debug metadata
  eleventyConfig.addFilter("debug", function(value) {
    console.log("Debug value:", value);
    return value;
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  
  // Watch for changes in these directories
  eleventyConfig.addWatchTarget("./src/assets/");
  
  // Image optimization
  eleventyConfig.addPlugin(eleventyImagePlugin, {
    formats: ["webp", "jpeg"],
    widths: [300, 600, 900, 1200],
    urlPath: "/assets/images/",
    outputDir: "_site/assets/images/"
  });

  // Debug: Log configuration
  console.log("Eleventy configuration:", {
    input: "src",
    output: "_site",
    includes: "src/_includes",
    layouts: "src/_includes/layouts"
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "src/_includes",
      layouts: "src/_includes/layouts"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
} 