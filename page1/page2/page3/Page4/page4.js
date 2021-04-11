

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');

    const color = [
        "#60d394",
        "#e2b318",
        "#4af507",
        "#0a28d4",
        "#df0101",
        "#df0101",
        "#37ce37",
    ];

    console.log(sounds);
    // 

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currenTime = -1;
            sounds[index].play();

            creatBubbles(index);
        });
    });

    const creatBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index]
        bubble.style.animation  = " jump 1s ease"
    };

    




// const text = document.querySelector(".fancy");
// const strTtext =  text.textContent;
// const splitTtext = strTtext.split("");

// text.textContent = "";


// for(let i = 0; i < splitTtext.length; i++){
//     text.innerHTML += "<span>"+splitTtext[i] +"</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++

//     if(char === splitTtext.length) {
//         complete();
//         return;
//     }
// }

// function complete () {
//     clearInterval(timer);
//     timer = null
// }

// ------ animation songs 




