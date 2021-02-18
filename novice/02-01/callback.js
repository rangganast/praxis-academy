// membuat callback
const hitung = (a, b, callback) => {
    return callback(a, b);
};

const tambah = (a, b) => {
    return a + b
};

const kurang = (a, b) => {
    return a - b;
};

const kali =  (a, b) => {
    return a * b;
}

let hasil = hitung(2, 5, kurang);
console.log(hasil);