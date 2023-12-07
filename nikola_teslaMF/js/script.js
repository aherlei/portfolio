const burguer = document.getElementById('burguer')
const menu_wrap = document.getElementById('menu_wrap')
const node = document.createElement("LI")
const textNode = document.createTextNode("Home")

burguer.addEventListener('click', (e) => {
    console.log(e)
    console.log(menu_wrap)
    menu_wrap.classList.toggle('none')
    menu_wrap.appendChild(li)
    node.appendChild(textNode)
    menu_wrap.appendChild(node)
})


