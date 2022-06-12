function element(id) {
    return document.getElementById(id)
}


function isElementActive(element){
    const bounding = element.getBoundingClientRect()
    const client = (window.innerHeight || document.documentElement.clientHeight)
    return bounding.top <= client/8 && bounding.bottom >= client - 800
}