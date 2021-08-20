const nav = document.getElementById("nav");
const icon = document.getElementById("menu");
const linkmenu = document.getElementById("openMenu");
const prevScrollpos = window.pageYOffset;
const down = document.querySelector("bar");

// ABRE O MENU ACREDITO QUE SEJA O JEITO MAIS FÁCIL POSSIVEL DE SE FAZER SEM BOOTSTRAP.
function openMenu(icon) {
    nav.style.top = "0";
    nav.style.zIndex = "999"
    nav.style.paddingBottom = "120px"
    nav.style.transition = "0.2s"
    icon.setAttribute("onclick", "closeMenu(this);")
    linkmenu.style.display = "flex"
};
// FECHA O MENU
function closeMenu(icon) {
    nav.style.position = "relative";
    nav.style.height = "max-content";
    nav.style.paddingBottom = "0px"
    icon.setAttribute("onclick", "openMenu(this);")
    linkmenu.style.display = "none"
};
// QUANDO CLICAR NO ICONE DE SETA PARA BAIXO ELE DESCE ATÉ O FORMULÁRIO.
function pageDown() {
    window.scrollTo({ top: 7000, behavior: 'smooth' })
};