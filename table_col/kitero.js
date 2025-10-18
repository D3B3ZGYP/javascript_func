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

const table = document.body.appendChild(document.createElement("table"))
const thead = table.appendChild(document.createElement("thead"))
const tbody = table.appendChild(document.createElement("tbody"))
const trOfTh = thead.appendChild(document.createElement("tr"))

const th1 = createCell("th", "Szerző neve", trOfTh)
const th2 = createCell("th", "Korszak", trOfTh)
const th3 = createCell("th", "Szerelmek", trOfTh)
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
 * Létrehoz egy táblázat cellát és append-elí
 * 
 * @param {"td" | "th"} celltype - Cella típusa
 * @param {string} cellContent - Cella tartalma
 * @param {HTMLTableRowElement} parentRow - Sor szülő
 * @returns {HTMLTableCellElement} A létrehozott Cella
 */
function createCell(celltype, cellContent, parentRow){
    const cell = parentRow.appendChild(document.createElement(celltype))
    cell.innerText = cellContent

    return cell
}