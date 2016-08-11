import { mystery } from './source2'

// async function statement
async function foo() {
  return await mystery()
}

foo().then(console.log)
