console.log("Hello World");

document.querySelector('input[type=range]').oninput = function(e) {
    output.value = e.target.value
}


document.querySelector('form').onsubmit = function() {
    return false
}


Array.prototype.forEach.call(document.forms[0].theme,
    radio => {
        radio.addEventListener('change', () => {
            if (document.forms[0].theme.value === "dark") {
                document.body.classList.remove('light')
                document.body.classList.add('dark')
            } else {
                document.body.classList.remove('dark')
                document.body.classList.add('light')

            }
        })
    });
