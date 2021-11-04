const handleTyping = async () => {
    const name = "./Dailey_Kaze";
    const nameLetters = name.split("");

    const nameElem = document.getElementById("name");

    let i = 0;

    while (i < name.split("").length) {
        await waitForMs(200);
        nameElem.append(nameLetters[i]);
        i++;
    };

    document.getElementsByClassName("cursor")[0].remove();

    setTimeout(async () => {


        const role = "Full Stack Developer.exe";
        const roleLetters = role.split("");
    
        const elem = document.getElementById("role");

        let i = 0;
    
        while (i < roleLetters.length) {
            await waitForMs(100);
            elem.append(roleLetters[i]);
            i++;
        };
    
        document.getElementsByClassName("cursor")[0].remove();
    }, 500);    
};

const waitForMs = (ms)  =>{
    return new Promise(resolve => setTimeout(resolve, ms));
};

window.addEventListener('load', handleTyping);

const showMenu = () => {
    document.getElementById("menu-dropdown").classList.toggle("show");
};

// handle onClose
window.onclick = event => {
    if (!event.target.matches('.fa-bars')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

// handle showing scrollToTop btn
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.clientHeight)
    document.getElementsByClassName("top-icon")[0].style.display = "initial";
   else if (window.innerHeight > window.scrollY) document.getElementsByClassName("top-icon")[0].style.display = "none";
})

// handle scroll to top of page
const scrollToTop = document.getElementsByClassName("top-icon")[0]

scrollToTop.onclick = () => {
   window.scrollTo({
       top: 0,
       behavior: "smooth"
   })
}

// handle "q"
window.addEventListener("keydown", (e) => {   
    if (e.key === "q"){
        if (window.innerHeight > window.scrollY) document.getElementById("projects").scrollIntoView({ behavior: "smooth"});
        else document.getElementById("about").scrollIntoView({ behavior: "smooth"});
        
    }
})