function InitializeListeners(){
    window.addEventListener("hashchange", Listeners.NavLinks.ChangeColorByHash)
    window.addEventListener("scroll", Listeners.NavLinks.ChangeColorOnScroll)
    element("arrow").addEventListener("click", Listeners.ArrowDown.OnClick)
}

const Listeners = {

    ArrowDown: {
        OnClick: () => {
            scroll(undefined, scrollY + (window.innerHeight || document.documentElement.clientHeight))
        }
    },

    NavLinks: {
        ChangeColorByBackground: (id) => {
            
        },

        ChangeColorByHash: () => {
            var page = window.location.hash.replace("#", "")
            MAPPING.forEach(map => {
                if (page == map.sectionID){
                    map.linkOBJ.classList.add("current")
                }
                else map.linkOBJ.classList.remove("current")
            })
        },
    
        ChangeColorOnScroll: () => {
            MAPPING.forEach(map => {
                var bounding = map.sectionOBJ.getBoundingClientRect()
                var client = (window.innerHeight || document.documentElement.clientHeight)
                if (bounding.top <= client/8 && bounding.bottom >= client - 800) {
                    map.linkOBJ.classList.add("current")
                    if (map.sectionID == ABOUT_SECTION_ID || map.sectionID == MAIN_SECTION_ID) {
                        MAPPING.forEach(m => m.linkOBJ.classList.add("over-dark-bg"))
                    } else {
                        MAPPING.forEach(m => m.linkOBJ.classList.remove("over-dark-bg"))
                    }
                }
                else map.linkOBJ.classList.remove("current")
            })
        }
    },
}