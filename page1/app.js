
// var nbDrop = 858;

// function randRange(minNum, maxNum) {
//     return (Math.floor(Math.random() * (maxNum - minNum)) + minNum);
// }

// function createRain() {
//     for (i = 1; i < nbDrop; i++) {
//         var dropLaft = randRange(0, 1600);
//         var dropTop = randRange(-1000, 1400);

//         $('.rain').append('<div class="drop" id="drop' + i + '"></div>')
//         $('#drop' + i).css('left', dropLaft);
//         $('#drop' + i).css('top', dropTop);
//     }
// }


// ---------------------------------------------- animation chargement ---------------------------------------------


// const text = document.querySelector(".fancy");
// const strTtext = text.textContent;
// const splitTtext = strTtext.split("");

// text.textContent = "";


// for (let i = 0; i < splitTtext.length; i++) {
//     text.innerHTML += "<span>" + splitTtext[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++

//     if (char === splitTtext.length) {
//         complete();
//         return;
//     }
// }

// function complete() {
//     clearInterval(timer);
//     timer = null
// }



