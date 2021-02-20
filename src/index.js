// import '@babel/polyfill'

import hello from "./my-module"

console.log(hello);

const promiseArray = [
    new Promise(() => {}),
    new Promise(() => {})
]

promiseArray.map(promise => {
    console.log(promise);
})

async function loadFile(url) {
    const req = await fetch(url);
    return req.text();
}

function parseData(text) {
    console.log(JSON.parse(text));
}

async function loadData(info) {
    const text = await loadFile(info.url);
    info.file = parseData(text);
}

async function loadAll() {
    const fileInfos = [{
            url: 'https://api.github.com/'
        },
        {
            url: 'https://api.github.com/users/sogrey'
        },
    ];

    // 兼容
    if (Promise && !Promise.allSettled) {
        Promise.allSettled = function (promises) {
            return Promise.all(promises.map(function (promise) {
                return promise.then(function (value) {
                    return {
                        state: 'fulfilled',
                        value: value
                    };
                }).catch(function (reason) {
                    return {
                        state: 'rejected',
                        reason: reason
                    };
                });
            }));
        };
    }

    await Promise.allSettled(fileInfos.map(loadData));

}
loadAll()