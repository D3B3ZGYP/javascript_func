/**
 * @typedef {{nationality: string, book: string[], authors: string[]}} CountryWriters
 * @typedef {{labelText: string, id: string, type: string, inputName: string}} InputField
 */

/**
 * Marked event listener
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
 * Form submit event listener
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
    const nemzetiseg = target.querySelector(target.id == "htmlform" ? "#htmlnemzetiseg" : "#nemzetiseg")
    /**
     * @type {HTMLInputElement}
     */
    const szerzo1 = target.querySelector(target.id == "htmlform" ? "#htmlszerzo1" : "#szerzo1")
    /**
     * @type {HTMLInputElement}
     */
    const mu1 = target.querySelector(target.id == "htmlform" ? "#htmlmu1" : "#mu1")
    /**
     * @type {HTMLInputElement}
     */
    const szerzo2 = target.querySelector(target.id == "htmlform" ? "#htmlszerzo2" : "#szerzo2")
    /**
     * @type {HTMLInputElement}
     */
    const mu2 = target.querySelector(target.id == "htmlform" ? "#htmlmu2" : "#mu2")

    const nemzetisegValue = nemzetiseg.value
    const szerzo1Value = szerzo1.value
    const mu1Value = mu1.value
    const szerzo2Value = szerzo2.value
    const mu2Value = mu2.value

    /**
    * @type {CountryWriters}
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

    if (target.id == "htmlform"){
        renderTableRow(document.getElementById("originalTbody"), obj)
    } else {
        tableArr.push(obj)
        renderTableBody(tableArr, "jsTbody")
    }

    target.reset()
}

/**
 * Table body-t újra megjelenítteti
 * 
 * @param {CountryWriters[]} tableData
 * @param {string} tableBodyId
 */
function renderTableBody(tableData, tableBodyId){
    const Tbody = document.getElementById(tableBodyId)
    Tbody.innerHTML = ""

    for (let i of tableData){
        renderTableRow(Tbody, i)
    }
}

/**
 * Egy sort újra megjeleníttet
 * 
 * @param {HTMLTableSectionElement} tableBody
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tableBody, writerRow){
    const trNationality = tableBody.appendChild(document.createElement("tr"))
    const tdNationality = createCell("td", writerRow.nationality, trNationality)
    tdNationality.rowSpan = writerRow.authors.length
    tdNationality.addEventListener("click", markedEventListener)
    
    for (let i = 0; i < writerRow.authors.length; i++){
        const tdAuthor = createCell("td", writerRow.authors[i])
        const tdBook = createCell("td", writerRow.book[i])
        if (i === 0){
            trNationality.appendChild(tdAuthor)
            trNationality.appendChild(tdBook)
        } else {
            const tr = tableBody.appendChild(document.createElement("tr"))
            tr.appendChild(tdAuthor)
            tr.appendChild(tdBook)
        }
    }
}

/**
 * Létrehoz egy label-t és hozzá egy input field-et, amit hozzá ad a form-hoz
 *
 * @param {string} inputName - Az input name paramétere
 * @param {string} type - Az input típusa
 * @param {string} id - Az input azonosítója
 * @param {string} labelText - A label element szövege
 * @param {HTMLFormElement} parentForm - A szülő form element
 * @returns {void}
 */
function createInputField(inputName, type, id, labelText, parentForm){
    const div = parentForm.appendChild(createElement("div"))

    const label = div.appendChild(document.createElement("label"))
    label.htmlFor = inputName
    label.innerText = labelText

    parentForm.appendChild(document.createElement("br"))

    const input = div.appendChild(document.createElement("input"))
    input.type = type
    input.id = id
    input.name = inputName

    const span = div.appendChild(document.createElement("span"))
    span.classList.add("error")

    parentForm.appendChild(document.createElement("br"))
    parentForm.appendChild(document.createElement("br"))
}

/**
 * Form-ot hoz létre
 * 
 * @param {InputField[]} fieldData 
 * @param {string} formId 
 */
function createInputForm(fieldData, formId){
    const form = document.body.appendChild(document.createElement("form"))
    form.id = formId
    form.addEventListener("submit", submitEventListener)

    for (const i of fieldData){
        createInputField(i.inputName, i.type, i.id, i.labelText, form)
    }

    const button = form.appendChild(document.createElement("button"))
    button.innerText = "Hozzáadás"
}

/**
 * Létrehoz egy táblázat cellát és append-elí
 * 
 * @param {"td" | "th"} celltype - Cella típusa
 * @param {string} cellContent - Cella tartalma
 * @param {HTMLTableRowElement | null} parentRow - Sor szülő
 * @returns {HTMLTableCellElement} A létrehozott Cella
 */
function createCell(celltype, cellContent, parentRow){
    const cell = document.createElement(celltype)

    if (parentRow != null){
        parentRow.appendChild(cell)
    }
    cell.innerText = cellContent

    return cell
}

/**
 * Fejlécet hoz létre
 * 
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 */
function generateHeader(table, headerList){
    const thead = table.appendChild(document.createElement("thead"))
    const trThead = thead.appendChild(document.createElement("tr"))

    for (let i of headerList){
        createCell("th", i, trThead)
    }
}