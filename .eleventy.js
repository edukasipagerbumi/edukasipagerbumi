const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Menambahkan filter kustom "readableDate"
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).setLocale('id').toFormat("dd LLLL yyyy");
  });

  // Perintah untuk menyalin folder.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("_src/images");
  
  // PERBAIKAN: Tambahkan baris ini untuk menyalin folder admin
  eleventyConfig.addPassthroughCopy("_src/admin");

  eleventyConfig.addPassthroughCopy("_src/pdf");

  return {
    // Menentukan folder-folder
    dir: {
      input: "_src",
      includes: "_includes",
      output: "_site"
    },
    // Memberi tahu Eleventy untuk memproses file HTML
    // menggunakan mesin template Nunjucks.
    htmlTemplateEngine: "njk"
  };
};