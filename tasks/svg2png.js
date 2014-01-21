
"use strict";

var path = require("path");
var async = require("async");
var svg2png = require("svg2png");
var chalk = require("chalk");

module.exports = function (grunt) {

  grunt.registerMultiTask("svg2png", "Convert SVG to PNG", function () {
    var options = this.options();

    async.each(this.files, function (el, next) {
      var scale = options.scale || 1.0;
      var subdir = options.subdir || "";
      var rootdir = path.dirname(el.src);
      var pngFile = path.basename(el.src, ".svg") + ".png";
      var dest = path.join(rootdir, subdir, pngFile);

      svg2png(el.src, dest, scale, function (err) {
        if (err) {
          grunt.log.error("An error occurred converting %s in %s: %s", el.src, dest, err);
        }
        else {
          grunt.log.writeln(chalk.green("✔ ") + dest + chalk.gray(" (scale:", scale + ")"));
        }
        next();
      });
    }, this.async());
  });

};
