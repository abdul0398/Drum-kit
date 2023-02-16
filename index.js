let arr = document.getElementsByClassName('drum');
Array.from(arr).forEach((elm, index) => {
    elm.addEventListener('click', () => {
        elm.classList.add("pressed");
        let audio = new Audio(`sounds/${index + 1}.mp3`);
        audio.play();
       setInterval(() => {
            elm.classList.remove("pressed");
       }, 200); 
        
    })
    document.addEventListener('keydown', (event) => {// keyboard event listner will be used on document 
        let key = event.key;// event.key will give the String of which key is preseed;
        let audio;
        console.log(key);
        document.getElementsByClassName(key)[0].classList.add("pressed");
        setInterval(() => {
            document.getElementsByClassName(key)[0].classList.remove("pressed");
        }, 200);
        switch (key) {
            case "w":
                audio = new Audio("sounds/1.mp3")
                audio.play();
                break;

            case "a":
                audio= new Audio("sounds/2.mp3")
                audio.play();
                break;

            case "s":
                audio = new Audio("sounds/3.mp3")
                audio.play();
                break;
            case "d":
                audio = new Audio("sounds/4.mp3")
                audio.play();
                break;

            case 'j':
                audio = new Audio("sounds/5.mp3")
                audio.play();
                break;

            case 'k':
                audio = new Audio("sounds/6.mp3")
                audio.play();
                break;

            case 'l':
                audio = new Audio("sounds/7.mp3")
                audio.play();
                break;
        }
    })
})