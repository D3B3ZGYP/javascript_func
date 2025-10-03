/**
 * @type {string}
 */
const konstans = "hello"
console.log(konstans)

const array = ["elso", "masodik", "harmadik"]
console.log(array[1])

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

for (const i of array){
    console.log(i)
}

for (const key in array){
    console.log(`${key} : ${array[key]}`)
}

/**
 * @type {{name:string, age:number}}
 */
const obj = {
    name : 'denesmil',
    age : '17'
}

for (const key in obj){
    console.log(`${key} : ${obj[key]}`)
}