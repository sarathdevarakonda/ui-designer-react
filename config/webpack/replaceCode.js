const { ConcatSource } = require('webpack-sources');

class ReplaceCodePlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('ReplaceCodePlugin', (compilation, callback) => {
      for (const filename of Object.keys(compilation.assets)) {
        if (filename.endsWith('.js')) { // Check if the file is a JavaScript file
          let content = compilation.assets[filename].source();

          // Perform the replacement using regular expressions
          for (const rule of this.options.rules) {
            const { pattern, replacement } = rule;
            content = content.replace(pattern, replacement);
          }

          // Replace the asset with the modified content
          compilation.assets[filename] = new ConcatSource(content);
        }
      }

      callback();
    });
  }
}

module.exports = ReplaceCodePlugin;
