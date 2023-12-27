const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')
const book = document.querySelector('#book')

const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')

const f1 = document.querySelector('#f1')
const f2 = document.querySelector('#f2')
const f3 = document.querySelector('#f3')
const b2 = document.querySelector('#b2')

let currentLoc = 1;
let noOfPapers = 3;
let maxLoc = noOfPapers + 1;

nextBtn.addEventListener('click', goNextPage);
prevBtn.addEventListener('click', goPrevPage);

function openBook() {
    book.style.transform = 'translateX(175px)';
    prevBtn.style.transform = 'translateX(-175px)';
    nextBtn.style.transform = 'translateX(175px)';

}
function closeBook(atBegining) {
    if(atBegining){
        book.style.transform = 'translateX(0px)';
    }else{
        book.style.transform = 'translateX(350px)';
    }
    prevBtn.style.transform = 'translateX(0px)';
    nextBtn.style.transform = 'translateX(0px)';
}
function goNextPage() {
        if(currentLoc==1){
            setTimeout(() => {
            f2.style.visibility = 'visible';
        }, 100);
    }
    if(currentLoc==2){
        setTimeout(() => {
            f3.style.visibility = 'visible';
        }, 100);
    }
    if(currentLoc==3){
        setTimeout(() => {
            b2.style.visibility = 'hidden';
        }, 500);
    }
    if (currentLoc < maxLoc) {
        switch (currentLoc) {
            case 1:
                openBook()
                p1.classList.add("flipped");
                p1.style.zIndex = 1;
                break;
            case 2:
                p2.classList.add("flipped");
                p2.style.zIndex = 2;
                break;
            case 3:
                p3.classList.add("flipped");
                p3.style.zIndex = 3;
                closeBook()
                break;
            default:
                throw new Error("Error");
        }
        currentLoc++;
    }

}
function goPrevPage() {
    if(currentLoc==2){
        f1.style.visibility = 'visible';
        setTimeout(() => {
            f2.style.visibility = 'hidden';
        }, 500);
    }
    if(currentLoc==3){
        setTimeout(() => {
            f3.style.visibility = 'hidden';
        }, 500);
    }
    
    if(currentLoc==4){
        setTimeout(() => {
            b2.style.visibility = 'visible';
        }, 100);
    }
    if (currentLoc>1) {
        switch (currentLoc) {
            case 2:
                closeBook(true)
                p1.classList.remove("flipped");
                p1.style.zIndex = 3;
                break;
            case 3:
                p2.classList.remove("flipped");
                p2.style.zIndex = 2;
                break;
            case 4:
                openBook()
                p3.classList.remove("flipped");
                p3.style.zIndex = 1;
                break;
            default:
                throw new Error("Error");
        }
        currentLoc--;
    }
}




// <-----------SONG---------->
const playBtn = document.querySelector('#play')
const pauseBtn = document.querySelector('#pause')

song = new Audio('audio/song.m4a')

playBtn.addEventListener('click',()=>{
    song.play();
    pauseBtn.style.display = "block"
    playBtn.style.display = "none"
})

pauseBtn.addEventListener('click',pauseSong)

function pauseSong() {
    song.pause();
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"    
}

song.onended = ()=>{
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"   
}



// <--------FINAL PAGE-------------->

let msgs = document.querySelectorAll('.msgs')
// console.log(msgs);
i=1;
for(msg of msgs){
    msg.addEventListener('mouseenter',(e)=>{
        for(msg of msgs){
            msg.style.visibility = 'hidden'
        }
        // e.target.style.visibility = 'hidden';
    })    
    msg.addEventListener('mouseleave',(e)=>{
        for(msg of msgs){
            msg.style.visibility = 'visible'
        }
    })
    i++;
}