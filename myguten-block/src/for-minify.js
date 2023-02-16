var name = 'chandan';

function goto() {
    setTimeout(() => {
        return new Promise((resolve,reject) => {
            resolve("Hello");
        })
    }, 0);
}

goto().
    then((msg) => {
        console.log(`${msg} ${name}`);
    });