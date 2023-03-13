


const phoneMask = e => {
    let rawValue = e.target.value.replace(/\D/g, "")
    let value = ""

    console.log(rawValue.length)
    if (rawValue.length > 0) {
        rawValue = rawValue.substring(11)
        value = '+' + rawValue.substring(0, 1) + ' (' + rawValue.substring(1, 4) + ') ' + rawValue.substring(4, 7) + '-' + rawValue.substring(7, 9) + '-' + rawValue.substring(9)
        e.target.value = value
        console.log(value)
    }   
}


window.onload = () => {
    const phoneInput = document.querySelector('input[type="tel"]')

    phoneInput.addEventListener("input", phoneMask)
}
