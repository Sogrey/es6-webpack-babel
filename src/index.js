import '@babel/polyfill'

import hello from "./my-module"

console.log(hello);

const promiseArray = [
    new Promise(() => {}),
    new Promise(() => {})
]

promiseArray.map(promise => {
    console.log(promise);
})