const obj = {}
const num = 6

if (num > 5){
    obj.name = "Denes"
} else {
    obj["name"] = "Denes"
}

console.log(obj.name)
console.log(obj["name"])
console.log(obj.age)