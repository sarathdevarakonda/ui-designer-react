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
            console.log("filename", filename)
          // Perform the replacement using regular expressions
          for (const rule of this.options.rules) {
            const { pattern, replacement, type } = rule;
            
            if(type && type == 1){
                const match = content.match(pattern)
                if(match){
                    console.log(match[0])
                    const varMatch = match[0].match(/const\s\w+=/)
                    const firstVar = varMatch[0].split(/\s|=/)[1]
                    const assignment = match[0].match(/\{.+\)\}\)\}/)[0]
                    console.log(assignment)
                    const functionModSplit = assignment.split(/\{?\,?dynamicchunk\d+:/g)
                    const functionMod1 = functionModSplit[1].replace(/\(\d+\)/, `(parseInt(__b.replace("dynamicchunk","")))`)
                    const functionMod1_1 = functionMod1.replace(/\"(\w|\d)+\"\)\),/, `__b)),`)
                    const statement2 = match[0].match(/\w+\=e=>.+jsx\S+}}}/)[0]
                    const modified = statement2.match(/\w+\[\w+];/)[0]
                    const updatedStatement = statement2.replace(/\w+\[\w+];/,`${firstVar}(e);`)

                    const code = `const ${firstVar.trim()}=(__b)=>${functionMod1_1},${updatedStatement}`
                     content = content.replace(pattern, code)
                    console.log(code)
                }
                continue;
            }
            content = content.replace(pattern, replacement);
          }

          // Replace the asset with the modified content
          compilation.assets[filename] = new ConcatSource(content);
        }
        if(filename.startsWith("dynamicchunk")){
            let content = compilation.assets[filename].source();
            console.log("filename", filename)
        
          // Perform the replacement using regular expressions
          for (const rule of this.options.chunkRules) {
            const { pattern, type } = rule;
            if(type == 1){
                content = content.replace(pattern, `(self["webpackChunkui_designer"] = self["webpackChunkui_designer"] || []).push([[31],{ "${filename}" :`);
            }
            
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
