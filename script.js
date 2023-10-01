// Your code here.
const items = document.querySelectorAll('.item')
const container = document.querySelector('.items')
items.forEach(el=>{
	el.draggable = "true"
	el.addEventListener('mousemove',()=>{
		container.scrollLeft +=50
	})
})