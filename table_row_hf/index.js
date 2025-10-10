/**
 * @type {{war: string, team1: string, team1Size: string, team2?: string, team2Size?: string}[]}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

/**
 * @type {string[]}
 */
const header = ["Harc megnevezése", "Szembenálló felek", "Haderő"]

const table = document.createElement("table")
const thead = document.createElement("thead")
const trHead = document.createElement("tr")
const tbody = document.createElement("tbody")

document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(trHead)
table.appendChild(tbody)

for (let i of header){
    const th = trHead.appendChild(document.createElement("th"))
    th.innerText = i;
}

for (let i of arr){
    const tr = tbody.appendChild(document.createElement("tr"))
    
    const td1 = document.createElement("td")
    td1.innerText = i.war
    const td2 = document.createElement("td")
    td2.innerText = i.team1
    const td3 = document.createElement("td")
    td3.innerText = i.team1Size

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    if (i.team2){
        td1.rowSpan = 2
        const tr2 = tbody.appendChild(document.createElement("tr"))

        const td4 = document.createElement("td")
        td4.innerText = i.team2
        const td5 = document.createElement("td")
        td5.innerText = i.team2Size

        tr2.appendChild(td4)
        tr2.appendChild(td5)
    }
}
