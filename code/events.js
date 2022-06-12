function initializeListeners(){
    window.addEventListener("hashchange", updateColorOnHash)
    window.addEventListener("scroll", updateColorOnScroll)
}

function updateColorOnHash(){
    const page = window.location.hash.replace("#", "")
    for (const el of Elements) {
        const classes = el.link.classList
        page == el.id ? classes.add(CURRENT_CLASS_NAME) : classes.remove(CURRENT_CLASS_NAME)
    }
}

function updateColorOnScroll(){
    for (const el of Elements) {
        const classes = el.link.classList
        isElementActive(el.element) ? classes.add(CURRENT_CLASS_NAME) : classes.remove(CURRENT_CLASS_NAME)
    }
}

function goToWhatsapp(){
    const value = element('whatsapp-message').value
    const url = `https://api.whatsapp.com/send?phone=5511992272903&text=` + encodeURIComponent(value)
    window.open(url, '_blank').focus();
}