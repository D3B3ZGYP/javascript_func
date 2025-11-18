/**
 * Input field tömb
 *
 * @type {InputField[]}
 */
const formInputFields = [
    {
        inputName : "nemzetiseg",
        type : "text",
        id : "nemzetiseg",
        labelText : "Nemzetiség:"
    },
    {
        inputName : "szerzo1",
        type : "text",
        id : "szerzo1",
        labelText : "Szerző:"
    },
    {
        inputName : "mu1",
        type : "text",
        id : "mu1",
        labelText : "Mű:"
    },
    {
        inputName : "szerzo2",
        type : "text",
        id : "szerzo2",
        labelText : "Másik Szerző:"
    },
    {
        inputName : "mu2",
        type : "text",
        id : "mu2",
        labelText : "Másik Mű:"
    }
]

/**
 * @type {CountryWriters[]}
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
 *
 * @type {header: string[], formInputFields: InputField[]}
 */
const headerAndFormInputFields = {
    header: ["Nemzetiség", "Szerző", "Mű"],
    formInputFields: [
        {
            inputName : "nemzetiseg",
            type : "text",
            id : "nemzetiseg",
            labelText : "Nemzetiség:"
        },
        {
            inputName : "szerzo1",
            type : "text",
            id : "szerzo1",
            labelText : "Szerző:"
        },
        {
            inputName : "mu1",
            type : "text",
            id : "mu1",
            labelText : "Mű:"
        },
        {
            inputName : "szerzo2",
            type : "text",
            id : "szerzo2",
            labelText : "Másik Szerző:"
        },
        {
            inputName : "mu2",
            type : "text",
            id : "mu2",
            labelText : "Másik Mű:"
        }]
}

/**
 * @type {string[]}
 */
const header = ["Nemzetiség", "Szerző", "Mű"]


/**
 * @type {HTMLFormElement}
 */
const htmlForm = document.getElementById("htmlform")
htmlForm.addEventListener("submit",submitEventListener)

generateTable(headerAndFormInputFields.header, "jsTbody")
renderTableBody(tableArr, "jsTbody")
createInputForm(headerAndFormInputFields.formInputFields, "jsform")