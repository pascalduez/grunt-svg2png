
"use strict";

var fs = require("fs");
var assert = require("assert");
var sizeOf = require("image-size");

describe("svg2png", function () {

  it("Creates subdir", function () {
    assert(fs.existsSync("test/svg/png"));
    assert(fs.existsSync("test/svg/png_2x"));
  });

  it("Generates PNG", function () {
    assert(fs.existsSync("test/svg/png/test.png"));
    assert(fs.existsSync("test/svg/png_2x/test.png"));
  });

  it("Generates 1x PNG", function () {
    var dimensions = sizeOf("test/svg/png/test.png");
    assert(dimensions.width === 64);
    assert(dimensions.height === 64);
  });

  it("Generates 2x PNG", function () {
    var dimensions = sizeOf("test/svg/png_2x/test.png");
    assert(dimensions.width === 128);
    assert(dimensions.height === 128);
  });

});
