const hitung = (a, b) => {
    return new Promise((resolve, reject) => {
        a > 0 ? console.log(a + b) : console.log('a nya kurang');
    });
};

let cobaHitung = hitung(4, 10);

cobaHitung
.then(hasil => console.log(hasil))
.catch(err => console.log(err));