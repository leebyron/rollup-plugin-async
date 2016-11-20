'use strict';

function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a)}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d)}function d(e){c(e,1)}c()})}
function __asyncIterator(o){var i=o[Symbol&&Symbol.asyncIterator||"@@asyncIterator"]||o[Symbol&&Symbol.iterator||"@@iterator"];if(!i)throw new TypeError("Object is not AsyncIterable.");return i.call(o)}

function mystery() {return __async(function*(){
  return yield 'oOOoooOOOooo'
}())}

// async function statement
function foo() {return __async(function*(){
  var $i1,$s1,$e1;try{for ($s1=null,$i1=__asyncIterator( asyncIterable);$s1=yield $i1.next(),!$s1.done;) {let x=$s1.value;
    // Empty
  }}catch(e){$e1=e}finally{try{!$s1.done&&$i1.return&&(yield $i1.return())}finally{if($e1)throw $e1}}
  return yield mystery()
}())}

foo().then(console.log)