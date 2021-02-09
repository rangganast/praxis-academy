let pegawai = {
    nip: '1234567890',
    nama: 'alex'
};

console.log(pegawai); // { nip: '1234567890', nama: 'alex' }
console.log(pegawai['nip']); // 1234567890
console.log(pegawai['nama']); // alex
console.log(pegawai.nip); // 1234567890
console.log(pegawai.nama); // alex
console.log(pegawai.usia);
console.log(pegawai.keys)

let pegawais = [
    {
        nip: '1234567890',
        nama: 'alex'
    },
    {
        nip: '1234567891',
        nama: 'john'
    },
    {
        nip: '1234567892',
        nama: 'steve'
    },
];

console.log(pegawais[0].nama); // alex
console.log(pegawais[2].nama); // steve
console.log(pegawais[1]['nama']); // john