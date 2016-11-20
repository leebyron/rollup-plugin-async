import { mystery } from './source2'

// async function statement
async function foo() {
  for await (let x of asyncIterable) {
    // Empty
  }
  return await mystery()
}

foo().then(console.log)
