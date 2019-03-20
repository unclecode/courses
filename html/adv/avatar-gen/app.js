console.log("Hello World");


function getAvatar(eyes, nose, mouth, color) {
    let url = `https://api.adorable.io/avatars/face/${eyes}/${nose}/${mouth}/${color.replace('#', '')}`
    return url
}


document.querySelector('form').onsubmit = function() {
    console.log(getAvatar(eyes.value, nose.value, mouth.value, color.value))
    avatar.src = getAvatar(eyes.value, nose.value, mouth.value, color.value)
    return false
}
