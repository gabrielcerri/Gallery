const title = document.getElementById("title").children

for (let i=0; i<title.length; i++) {

	console.log(`Letter ${i} is ${title[i].getTotalLength()} `)
}
