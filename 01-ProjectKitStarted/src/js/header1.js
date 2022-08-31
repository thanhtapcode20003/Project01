let menuItemList = document.querySelectorAll(".btn-menu__item")

menuItemList.forEach(item =>{
    item.addEventListener("click", event =>{    
        menuItemList.forEach(_item => {
            _item.classList.remove("actived")
        });
        event.target.classList.add("actived")
    })
})