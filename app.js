// - у вас є масив юзрів (до 10), з такими полями наприклад
// , вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках

const fs = require('fs');
const path = require('path');


const dirPath = path.join(__dirname, 'main')
const dirManOlder20 = path.join(dirPath, 'manOlder20');
const dirManYounger20 = path.join(dirPath, 'manYounger20');
const dirWomanOlder20 = path.join(dirPath, 'womanOlder20');
const DirWomanYounger20 = path.join(dirPath, 'womanYounger20');


fs.mkdir(dirManOlder20, {recursive: true}, err => {
    console.log(err);
})
fs.mkdir(dirManYounger20, {recursive: true}, err => {
    console.log(err);
})
fs.mkdir(dirWomanOlder20, {recursive: true}, err => {
    console.log(err);
})
fs.mkdir(DirWomanYounger20, {recursive: true}, err => {
    console.log(err);
})

fs.mkdir(dirPath, {recursive: true}, err => {
    console.log(err);
})

const users = [
    {name: "Olya", gender: "female", age: 21},
    {name: "Valya", gender: "female", age: 22},
    {name: "Natasha", gender: "female", age: 23},
    {name: "Lena", gender: "female", age: 14},
    {name: "Ulya", gender: "female", age: 15},
    {name: "Vasya", gender: "male", age: 21},
    {name: "Petya", gender: "male", age: 22},
    {name: "Sasha", gender: "male", age: 23},
    {name: "Seryu", gender: "male", age: 14},
    {name: "Vitalik", gender: "male", age: 15}
]


for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 20 && users[i].gender === 'male') {
        fs.appendFile(path.join(dirManOlder20, `${users[i].name}.txt`), JSON.stringify(users[i]), err => {
            console.log(err);
        })
    } else if (users[i].age <= 20 && users[i].gender === 'male') {
        fs.appendFile(path.join(dirManYounger20, `${users[i].name}.txt`), JSON.stringify(users[i]), err => {
            console.log(err);
        })
    } else if (users[i].age <= 20 && users[i].gender === 'female') {
        fs.appendFile(path.join(DirWomanYounger20, `${users[i].name}.txt`), JSON.stringify(users[i]), err => {
            console.log(err);
        })
    } else if (users[i].age >= 20 && users[i].gender === 'female') {
        fs.appendFile(path.join(dirWomanOlder20, `${users[i].name}.txt`), JSON.stringify(users[i]), err => {
            console.log(err);
        })
    }
}