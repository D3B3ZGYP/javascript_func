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

/**
 *
 * @type {
 *  {szerzo: string, korszak: string, szerelme1: string, szerelme2: string},
 *  {szerzo: string, korszak: string, szerelme: string}[]
 * }
 */
const tableArr = [
    {
        szerzo: 'Balassi Bálint',
        korszak: 'reformáció',
        szerelme1: 'Losonczy Anna',
        szerelme2: 'Dobó Krisztina'
    },
    {
        szerzo: 'Csokonai Vitéz Mihály',
        korszak: 'felvilágosoodás',
        szerelme: 'Vajda Juliána'
    },
    {
        szerzo: 'Petőfi Sándor',
        korszak: 'magyar romantika',
        szerelme1: 'Mednyánszky Berta',
        szerelme2: 'Szendrey Júlia'
    },
    {
        szerzo: 'Ady Endre',
        korszak: '20. század',
        szerelme1: 'Léda',
        szerelme2: 'Csinszka'
    }
]

const table = document.createElement("table")
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")
const trOfTh = document.createElement("tr")
const th1 = document.createElement("th")
const th2 = document.createElement("th")
const th3 = document.createElement("th")

document.body.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)
thead.appendChild(trOfTh)
trOfTh.appendChild(th1)
trOfTh.appendChild(th2)
trOfTh.appendChild(th3)

th1.innerText = "Szerző neve"
th2.innerText = "Korszak"
th3.innerText = "Szerelmek"
th3.colSpan = 2;

for (let i of tableArr){
    let tr = tbody.appendChild(document.createElement("tr"))
    for (let j in i){
        let td = createCell("td", i[j], tr)
        if (j == "szerelme")
            td.colSpan = 2
    }
}

/**
 * Létrehoz egy táblázat cellát
 * 
 * @param {string} celltype - Cella típusa
 * @param {string} cellContent - Cella tartalma
 * @param {HTMLTableRowElement} parentRow - Sor szülő
 * @returns {HTMLTableCellElement} A létrehozott Cella
 */
function createCell(celltype, cellContent, parentRow){
    const cell = parentRow.appendChild(document.createElement(celltype))
    cell.innerText = cellContent

    return cell
}