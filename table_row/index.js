/**
 *
 * @type {{nationality: string, book: string[], authors: string[]}[]}
 */
const tableArr = [
    {
        nationality : "Orosz",
        authors : ["Gogol", "Csehov"],
        book : ["A köpönyeg", "A csinovnyik halála"]
    },
    {
        nationality : "Cseh",
        authors : ["Franz Kafka"],
        book : ["Az átváltozás"]
    },
    {
        nationality : "Magyar",
        authors : ["Örkény István", "József Attila"],
        book : ["Egyperces Novellák", "Klárisok"]
    },
    {
        nationality : "Svájc",
        authors : ["Friedrich Dörrenmatt"],
        book : ["A fizikusok"]
    }
]

const header = ["Nemzetiség", "Szerző", "Mű"]

const table = document.body.appendChild(document.createElement("table"))
const thead = table.appendChild(document.createElement("thead"))
const tbody = table.appendChild(document.createElement("tbody"))

const trThead = thead.appendChild(document.createElement("tr"))
for (let i of header){
    const th = trThead.appendChild(document.createElement("th"))
    th.innerText = i
}

for (let i of tableArr){
    const trNationality = tbody.appendChild(document.createElement("tr"))

    const tdNationality = trNationality.appendChild(document.createElement("td"))
    tdNationality.innerText = i.nationality
    tdNationality.rowSpan = i.authors.length

    for (let j = 0; j < i.authors.length; j++){
        const tdAuthor = document.createElement("td")
        tdAuthor.innerText = i.authors[j]
        const tdBook = document.createElement("td")
        tdBook.innerText = i.book[j]

        if (j === 0){
            trNationality.appendChild(tdAuthor)
            trNationality.appendChild(tdBook)
        } else {
            const tr = tbody.appendChild(document.createElement("tr"))
            tr.appendChild(tdAuthor)
            tr.appendChild(tdBook)
        }
    }
}