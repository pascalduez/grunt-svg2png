# grunt-svg2png [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Generate PNG from SVG using [svg2png](https://github.com/domenic/svg2png)


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install --save-dev pascalduez/grunt-svg2png
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg2png');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*


[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Motivation

At the time of writing, none of the other grunt plugins offered the scaling capability.
Bear in mind this is just a grunt wrapper on top of [svg2png](https://github.com/domenic/svg2png).
It works particulary well combined with [SassyIcons](https://github.com/pascalduez/SassyIcons).
Since there are already a bunch of other similar modules and to prevent names conflict it is not published on npm.


## Documentation

See the [Gruntfile](Gruntfile.js) in this repo for a full example.


### Example config

```js
grunt.initConfig({
  svg2png: {
    fallback: {
      options: {
        subdir: "png"
      },
      files: [{
        expand: true,
        cwd: "test/svg",
        src: ["**/*.svg"]
      }]
    },
    retina: {
      options: {
        scale: 2.0,
        subdir: "png_2x",
      },
      files: [{
        expand: true,
        cwd: "test/svg",
        src: ["**/*.svg"]
      }]
    }
  }
});

grunt.loadNpmTasks("grunt-svg2png");
grunt.registerTask("default", ["svg2png"]);
```

*Tip: the [grunt-newer](https://github.com/tschaub/grunt-newer) module might come in handy if you have a large number of files.*

## License

unlicence
