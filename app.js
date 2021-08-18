// Посортувати юзерів по папках
//Дві папки 1800 і 2000
//В кожній паппці міститься фалй з даними про юезера ({name,gender})
//Потрібно перемістити всіх дівчат в 1800 а хлопців в 2000





const fs = require('fs');
const path = require('path');

const folderPath18 = path.join(__dirname, 'lessons', '18_00');
const folderPath20 = path.join(__dirname, "lessons", '20_00')
const filePathOksana = path.join(folderPath18, 'oksana.txt')
const filePathAndriy = path.join(folderPath18, 'igor.txt')
const filePathIgor = path.join(folderPath20, 'igor.txt')
const filePathMasha = path.join(folderPath20, 'masha.txt')


fs.mkdir(folderPath18, {recursive: true}, err => {
    console.log(err);
})
fs.mkdir(folderPath20, {recursive: true}, err => {
    console.log(err);
})

const user_Oksana = {
    name: "Oksana",
    gender: "female"
}
const user_Andriy = {
    name: "Andriy",
    gender: "male"
}

const user_Igor = {
    name: "Igor",
    gender: "male"
}

const user_Masha = {
    name: "Masha",
    gender: "female"
}

fs.appendFile(filePathOksana, `${(JSON.stringify(user_Oksana))}`, err => {
    console.log(err);
})
fs.appendFile(filePathAndriy, `${(JSON.stringify(user_Andriy))}`, err => {
    console.log(err);
})
fs.appendFile(filePathIgor, `${(JSON.stringify(user_Igor))}`, err => {
    console.log(err)
})
fs.appendFile(filePathMasha, `${(JSON.stringify(user_Masha))}`, err => {
    console.log(err)
})

fs.readdir(folderPath18, (errWithReadDir, files) => {
    if (errWithReadDir) {
        console.log(errWithReadDir);
        return;
    }
    files.forEach(file => {
        fs.readFile(path.join(folderPath18, file), (errWithReadFile, data) => {
            if (errWithReadFile) {
                console.log(errWithReadFile);
                return;
            }
            const dataFromFile = data.toString()
            if (!(dataFromFile.match('female'))) {
                fs.rename(path.join(folderPath18, file), path.join(folderPath20, file), errWithRename => {
                    if (errWithRename) {
                        console.log(errWithRename);
                        return;
                    }
                    console.log('Complete')
                })
            }
        })
    })
})

fs.readdir(folderPath20, (errorWithReadDir, files) => {
    if(errorWithReadDir){
        console.log(errorWithReadDir);
        return;
    }
    files.forEach(file=>{
        fs.readFile(path.join(folderPath20,file), (errorWithRead, data) => {
            if(errorWithRead){
                console.log(errorWithRead);
                return;
            }
            const dataFromFile = data.toString();
            if(dataFromFile.match('female')){
                fs.rename(path.join(folderPath20, file), path.join(folderPath18, file), errorWithRename =>{
                    if (errorWithRename){
                        console.log(errorWithRename);
                        return;
                    }
                    console.log('Complete')
                } )
            }
        })
    })
})


