const MAIN_SECTION_ID = "inicio"
const ABOUT_SECTION_ID = "sobre"
const PRODUCTS_SECTION_ID = "produtos"
const CONTACT_SECTION_ID = "contato"

const SECTIONS = [MAIN_SECTION_ID, ABOUT_SECTION_ID, PRODUCTS_SECTION_ID, CONTACT_SECTION_ID]

const MAIN_LINK_ID = "inicio-link"
const ABOUT_LINK_ID = "sobre-link"
const PRODUCTS_LINK_ID = "produtos-link"
const CONTACT_LINK_ID = "contato-link"

const LINKS = [MAIN_LINK_ID, ABOUT_LINK_ID, PRODUCTS_LINK_ID, CONTACT_LINK_ID]

const MAPPING = [
    { 
        sectionID: MAIN_SECTION_ID, linkID: MAIN_LINK_ID, 
        sectionOBJ: document.getElementById(MAIN_SECTION_ID),
        linkOBJ: document.getElementById(MAIN_LINK_ID),
    },
    { 
        sectionID: ABOUT_SECTION_ID, linkID: ABOUT_LINK_ID, 
        sectionOBJ: document.getElementById(ABOUT_SECTION_ID),
        linkOBJ: document.getElementById(ABOUT_LINK_ID),
    },
    { 
        sectionID: PRODUCTS_SECTION_ID, linkID: PRODUCTS_LINK_ID, 
        sectionOBJ: document.getElementById(PRODUCTS_SECTION_ID),
        linkOBJ: document.getElementById(PRODUCTS_LINK_ID),
    },
    { 
        sectionID: CONTACT_SECTION_ID, linkID: CONTACT_LINK_ID, 
        sectionOBJ: document.getElementById(CONTACT_SECTION_ID),
        linkOBJ: document.getElementById(CONTACT_LINK_ID),
    },
]