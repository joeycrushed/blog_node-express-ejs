const fs = require('fs');
const { ReadStream } = require('tty');

const readStream = fs.createReadStream('./docs/blogs3.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/blogs4.text')
// readStream.on('data', (chunk) => {
//     console.log("----------- new chunk -------------")
//     console.log(chunk)
//     writeStream.write(`\n NEW CHUNK \n`)
//     writeStream.write(chunk)
// })

// piping

readStream.pipe(writeStream)