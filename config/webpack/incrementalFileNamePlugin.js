const path = require('path');

class IncrementalChunkFilenamePlugin {
  constructor(options) {
    this.startNumber = options.startNumber || 1;
    this.currentNumber = this.startNumber;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('IncrementalChunkFilenamePlugin', (compilation) => {
      compilation.hooks.chunkAsset.tap('IncrementalChunkFilenamePlugin', (chunk, filename) => {
        // Increment the current number for each chunk generated
        const newFilename = `ab${this.currentNumber++}`;
        // Update the chunk's filename
        chunk.filenameTemplate = newFilename;
      });
    });
  }
}

module.exports = IncrementalChunkFilenamePlugin
