// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);



    const ele = document.querySelector('#ele1')

    function pintar(color) {
        ele.style.backgroundColor = color;
    }

    pintar('green')

    ele.addEventListener("click", () => {
        pintar('yellow')
    });
