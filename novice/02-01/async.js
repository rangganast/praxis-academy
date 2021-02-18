// const fetchData = async(id) => {
//     try {
//         let hasil = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//         let hasil2 = await hasil.json();
//         return hasil2;
//     } catch (err) {
//         console.log(err);
//     }
// }

// fetchData(2)
//     .then(data => console.log(data.title))
//     .catch(err => console.log(err));

// const bar = async () => {
//     new Promise((resolve, reject) =>
//     resolve('should be right after baz if no await called'))
//     .then(resolve => console.log(resolve))
// }

// const baz = async () => console.log('baz')

// const foo = async () => {
//     console.log('foo')
//     await bar();
//     baz();
// }

// const bax = async () => {
//     foo();
//     console.log('tralalalal');
// }

// bax();


async function test() {
    for (let i = 0; i < 2; i++) {
        console.log('Before await for ', i);
        let result = promiseFunc;
        console.log('After await. Value is', result);
    }
}

const promiseFunc = new Promise((resolve, reject) => {
    let a = 0;
    for(let i=0; i<1000000000000; i++) {
        a = a + i
    }
    resolve(a);
});

test().then(() => console.log('After test() resolved'));

console.log('After calling test');