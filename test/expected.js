'use strict';

function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a)}catch(e){return j(e)}return r.done?s(r.value):Promise.resolve(r.value).then(c,d)}function d(e){return c(e,1)}c()})}

function mystery() {return __async(function*(){
  return yield 'oOOoooOOOooo'
}())}

// async function statement
function foo() {return __async(function*(){
  return yield mystery()
}())}

foo().then(console.log)