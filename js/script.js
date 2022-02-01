{
    const welcome = () => {
        console.log("Cześć! Fajnie, że tu jesteś. :)");
    }
    const toggleBackground = () => {
        const body = document.documentElement;
        const themeName = document.querySelector(".js-themeName")
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };
    const init = () => {
        const header__button = document.querySelector(".js-header__button");
        header__button.addEventListener("click", toggleBackground);
        welcome();
    };
    init();
}