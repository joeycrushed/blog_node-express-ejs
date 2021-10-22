const fs = require('fs')

// reading files

// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// writing files

// fs.writeFile("./docs/blogs3.txt", "fuck you", (err, data)=> {
//     console.log("file written")
// } )

// directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log("folder created")
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log("folder deleted")
    })    
}

// deleting files

if(!fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log("file deleted")
    })
}