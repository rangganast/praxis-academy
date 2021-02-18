const fs = require('fs');

const readFileFunc = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        console.log(data);
    });
};

const createFileFunc = (file) => {
    fs.open(file, 'w', (err, data) => {
        if (err) throw err;
        console.log('File berhasil dibuat');
    });
};

const writeFileFunc = (file, text) => {
    fs.writeFile(file, text, (err, data) => {
        if (err) throw err;
        console.log('Data saved');
    });
};

// readFileFunc('file.txt');
// createFileFunc('file2.txt');
writeFileFunc('file2.txt', 'Hello');