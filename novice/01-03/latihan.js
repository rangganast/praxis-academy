// function

let pegawai = [];
const pegawaiMethods = {
    list: () => pegawai,
    add: nama => {
        pegawai.push(nama);
        return pegawai;
    },
    update: (index, namaBaru) => {
        pegawai[index] = namaBaru;
        return pegawai;
    }
};

console.log(pegawaiMethods.add('alex'));
console.log(pegawaiMethods.add('john'));
console.log(pegawaiMethods.add('max'));
console.log(pegawaiMethods.list());
console.log(pegawaiMethods.remove(2));