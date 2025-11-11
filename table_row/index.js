/**
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

/**
 * @type {string[]}
 */
const header = ["Nemzetiség", "Szerző", "Mű"]

const table = document.body.appendChild(document.createElement("table"))
const thead = table.appendChild(document.createElement("thead"))
const tbody = table.appendChild(document.createElement("tbody"))
tbody.id = "originalTbody"

const trThead = thead.appendChild(document.createElement("tr"))
for (let i of header){
    const th = trThead.appendChild(document.createElement("th"))
    th.innerText = i
}

renderTableBody(tableArr)

/**
 * @type {HTMLFormElement}
 */
const htmlForm = document.getElementById("htmlform")
htmlForm.addEventListener("submit",submitEventListener)


/**
 *
 * @param {Event} event
 */
function markedEventListener(event){
    /**
     * @type {HTMLTableCellElement}
     */
    const target = event.target

    /**
     * @type {HTMLElement || null}
     */
    const firstMarkedElement = target.parentElement.parentElement.querySelector(".marked")
    if (firstMarkedElement != null){
        firstMarkedElement.classList.remove("marked")
    }

    target.classList.add("marked")
}


/**
 * 
 * @param {Event} event 
 */
function submitEventListener(event){
    event.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    const target = event.target

    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = target.querySelector("#nemzetiseg")
    /**
     * @type {HTMLInputElement}
     */
    const szerzo1 = target.querySelector("#szerzo1")
    /**
     * @type {HTMLInputElement}
     */
    const mu1 = target.querySelector("#mu1")
    /**
     * @type {HTMLInputElement}
     */
    const szerzo2 = target.querySelector("#szerzo2")
    /**
     * @type {HTMLInputElement}
     */
    const mu2 = target.querySelector("#mu2")

    const nemzetisegValue = nemzetiseg.value
    const szerzo1Value = szerzo1.value
    const mu1Value = mu1.value
    const szerzo2Value = szerzo2.value
    const mu2Value = mu2.value

    /**
    * @type {{nationality: string, book: string[], authors: string[]}}
    */
    const obj = {
        nationality: nemzetisegValue,
        book: [mu1Value, mu2Value],
        authors: [szerzo1Value, szerzo2Value]
    }

    if (mu2Value == "" || szerzo2 == ""){
        obj.book.pop()
        obj.authors.pop()
    }

    tableArr.push(obj)

    renderTableBody()
}

/**
 * @param {{nationality: string, book: string[], authors: string[]}[]} tableData
 */
function renderTableBody(tableData){
    const originalTbody = document.getElementById("originalTbody")
    originalTbody.innerHTML = ""

    for (let i of tableArr){
        const trNationality = originalTbody.appendChild(document.createElement("tr"))
        const tdNationality = trNationality.appendChild(document.createElement("td"))
        tdNationality.innerText = i.nationality
        tdNationality.rowSpan = i.authors.length
        tdNationality.addEventListener("click", markedEventListener)

        for (let j = 0; j < i.authors.length; j++){
            const tdAuthor = document.createElement("td")
            tdAuthor.innerText = i.authors[j]
            const tdBook = document.createElement("td")
            tdBook.innerText = i.book[j]

            if (j === 0){
                trNationality.appendChild(tdAuthor)
                trNationality.appendChild(tdBook)
            } else {
                const tr = originalTbody.appendChild(document.createElement("tr"))
                tr.appendChild(tdAuthor)
                tr.appendChild(tdBook)
            }
        }
    }
}