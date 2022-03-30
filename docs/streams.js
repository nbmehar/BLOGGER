const fs=require('fs');

const readstream=fs.createReadStream('./docs/blog3.txt',{encoding: 'utf8'});

const writeStream=fs.createWriteStream('./docs/blog5.txt');

// readstream.on('data',(chunk)=>{

//     console.log("--------NEW CHUNK------------");
//     console.log(chunk);

//     writeStream.write('\n --------------------------------NEW CHUNK------------ \n');
//     writeStream.write(chunk);
// })

readstream.pipe(writeStream);

