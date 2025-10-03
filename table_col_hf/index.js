/**
 * @type {{theme:string, time:string, scientist1:string, scientist2:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
   
    }
]

const table = document.createElement("table")
const thead = document.createElement("thead")
const tr = document.createElement("tr")
const th1 = document.createElement("th")
const th2 = document.createElement("th")
const th3 = document.createElement("th")
const tbody = document.createElement("tbody")

document.body.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

th1.innerText = "Fizika területe"
th2.innerText = "Időszak"
th3.innerText = "Képviselők"
th1.colSpan = 2;

for (const i of arr){
    const bodytr = tbody.appendChild(document.createElement("tr"))
    for (let j = 0; j < 3; j++){
        const td = bodytr.appendChild(document.createElement("td"))
        td.innerText = i[0]
    }
}