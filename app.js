const fs = require('fs');
const path = require('path');

const folderPath18 = path.join(__dirname, 'lessons', '18_00');
const folderPath20 = path.join(__dirname, "lessons", '20_00')
const filePathOksana = path.join(folderPath18, 'oksana.txt')
const filePathAndriy = path.join(folderPath18, 'andriy.js')
const filePathDima = path.join(folderPath20, 'dima.js')
const filePathMasha = path.join(folderPath20, 'masha.js')


fs.mkdir(folderPath18, {recursive: true}, err => {
    console.log(err);
})
fs.mkdir(folderPath20, {recursive: true}, err => {
    console.log(err);
})

// const user_Oksana = {
//     name: "Oksana",
//     gender: "female"
// }
// const user_Andriy = {
//     name: "Andriy",
//     gender: "male"
// }
//
// const user_Dima = {
//     name: "Dima",
//     gender: "male"
// }
//
// const user_Masha = {
//     name: "Masha",
//     gender: "female"
// }
//
// fs.appendFile(filePathOksana, `const user_Oksana = {name: "Oksana", gender: "female"}`, err => {
//     console.log(err);
// })
// fs.appendFile(filePathAndriy, `${(JSON.stringify(user_Andriy))}`, err => {
//     console.log(err);
// })
// fs.appendFile(filePathDima, `${(JSON.stringify(user_Dima))}`, err => {
//     console.log(err)
// })
// fs.appendFile(filePathMasha, `${(JSON.stringify(user_Masha))}`, err => {
//     console.log(err)
// })

fs.readFile(filePathOksana, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const dataFromUser = data.toString();
    if(dataFromUser.includes('female')){
        console.log('good')
    }
})



