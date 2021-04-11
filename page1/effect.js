window.addEventListener('load', function(){
    const text = document.querySelector(".fancy");
    const strTtext = text.textContent;
    const splitTtext = strTtext.split("");

    text.textContent = "";


    for (let i = 0; i < splitTtext.length; i++) {
        text.innerHTML += "<span>" + splitTtext[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++

        if (char === splitTtext.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null
    }
});


