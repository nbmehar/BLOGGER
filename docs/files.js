const fs=require('fs');

// fs.readFile('./docs/blog.txt',(err,data)=>{

//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile('./docs/blog.txt','My Name is Nabz',()=>{

//     console.log('Done');

// });

// if(!fs.existsSync('./assets')){
// fs.mkdir(
//     './assets',
//     ()=>{
//         console.log('File Created');
//     }
// );
// }else{

//     fs.rmdir('./assets',(err)=>{

//         if(err){
//             console.log(err);
//         }

//         console.log('File deleted');

//     });
// }

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    }
    )
}