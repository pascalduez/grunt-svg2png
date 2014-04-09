
"use strict";

var path = require("path");
var async = require("async");
var svg2png = require("svg2png");
var chalk = require("chalk");
var numCPUs = require("os").cpus().length;

module.exports = function (grunt) {

  grunt.registerMultiTask("svg2png", "Convert SVG to PNG", function () {
    var options = this.options({
      scale: 1.0,
      subdir: "",
      limit: Math.max(numCPUs, 2)
    });

    async.eachLimit(this.files, options.limit, function (el, next) {
      var rootdir = path.dirname(el.src);
      var pngFile = path.basename(el.src, ".svg") + ".png";
      var dest = path.join(rootdir, options.subdir, pngFile);

      svg2png(el.src, dest, options.scale, function (err) {
        if (err) {
          grunt.log.error("An error occurred converting %s in %s: %s", el.src, dest, err);
        }
        else {
          grunt.log.writeln(chalk.green("✔ ") + dest + chalk.gray(" (scale:", options.scale + ")"));
        }
        next();
      });
    }, this.async());
  });

};
