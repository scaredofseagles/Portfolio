const handleTyping = async () => {
    const name = "./Dailey_Kaze"
    const nameLetters = name.split("")

    const nameElem = document.getElementById("name")

    let i = 0;

    while (i < name.split("").length) {
        await waitForMs(400);
        nameElem.append(nameLetters[i])
        i++
    }

    document.getElementsByClassName("cursor")[0].remove();

    setTimeout(async () => {


        const role = "Full Stack Developer.exe"
        const roleLetters = role.split("")
    
        const elem = document.getElementById("role")

        let i = 0;
    
        while (i < roleLetters.length) {
            await waitForMs(200);
            elem.append(roleLetters[i])
            i++
        }
    
        document.getElementsByClassName("cursor")[0].remove()
    }, 2500)    
}

const waitForMs = (ms)  =>{
    return new Promise(resolve => setTimeout(resolve, ms))
}

window.addEventListener('load', handleTyping)

