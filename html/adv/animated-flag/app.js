var slider = document.getElementById("slider");
var output = document.getElementById("value");
var value = slider.value;
output.innerHTML = slider.value;

//initially colorize each box and position inside the flag
TweenMax.set(".stripe", {
    y: function(i) {
        return i * 25;
    }
});

// animate before the user changes the value
var tlStart = new TimelineMax({
    repeat: -1
});

tlStart.to(".stripe", value, {
    ease: Linear.easeNone,
    y: "+=175", //move each box 175px to the bottom
    modifiers: {
        y: function(y) {
            return y % 175; //force y value to be between 0 and 175 using modulus
        }
    }
});

// when the value is changed from the range slider
slider.oninput = function() {
    var tl = new TimelineMax({
        repeat: -1
    });
    output.innerHTML = this.value;
    value = output.innerHTML;

    tl.to(".stripe", value, {
        ease: Linear.easeNone,
        y: "+=175", //move each box 175px to the bottom
        modifiers: {
            y: function(y) {
                return y % 175; //force y value to be between 0 and 175 using modulus
            }
        }
    });
};
