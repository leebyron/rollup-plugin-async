var asyncToGen = require('async-to-gen');
var fs = require('fs');
var os = require('os');
var path = require('path');
var createFilter = require('rollup-pluginutils').createFilter;

module.exports = function(options) {
  options = options || {};
  var filter = createFilter(options.include, options.exclude);
  var sourceMap = options.sourceMap !== false;

  return {
    name: 'async-to-gen',
    transform: function(code, id) {
      if (filter(id)) {
        var result = asyncToGen(code, {
          sourceMap: sourceMap,
          includeHelper: false
        });
        if (result.isEdited) {
          result.prepend('import { __async, __asyncGen, __asyncIterator } from "' + getAsyncHelperFile() + '"\n');
        }
        return {
          code: result.toString(),
          map: sourceMap ? result.generateMap() : { mappings: '' }
        };
      }
    }
  };
}

var _asyncHelperFile;

function getAsyncHelperFile() {
  if (!_asyncHelperFile) {
    _asyncHelperFile = path.join(os.tmpdir(), 'asyncHelper.' + Date.now() + '.js');
    fs.writeFileSync(
      _asyncHelperFile,
      'export ' + asyncToGen.asyncHelper + '\n' +
      'export ' + asyncToGen.asyncGenHelper + '\n' +
      'export ' + asyncToGen.asyncIteratorHelper
    );
    process.on('exit', function () {
      fs.unlinkSync(_asyncHelperFile)
    })
  }
  
  // Note that while win32 uses \ as path separator, Node require() may rely on /.
  return os.platform() === 'win32' ?
    _asyncHelperFile.replace(/\\/g, '/') :
    _asyncHelperFile;
}
