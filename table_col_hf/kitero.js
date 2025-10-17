const num = 2

valami1()
/**
 * Ez a függvény a valami1
 * 
 * @returns {void}
 */
function valami1(){
    console.log("valami1 futtatva")
}

valami2()
/**
 * Ez a függvény a valami2
 * 
 * @returns {void}
 */
function valami2(){
    console.log(num)
}

valami3()
/**
 * Ez a függvény a valami3
 * 
 * @returns {void}
 */
function valami3(){
    const localNum = 5
    console.log(localNum)
}

const valami4Value = valami4(2)
console.log(valami4Value)
/**
 * Ez a függvény a valami4
 * 
 * @param {number} param hozzá ad hármat és visszatér azzal az értékkel
 * @returns {number}
 */
function valami4(param){
    const localNum = 3
    const ret = localNum + param
    return ret
}