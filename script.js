function getRndInteger(min = 0, max = 256) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randomEventListeners(){
    let allDivs = document.querySelectorAll(".miniBox");
    for (let i = 0; i<allDivs.length; i++){
        allDivs[i].onmouseenter = ()=>{
            allDivs[i].style.backgroundColor = `rgb(${getRndInteger()},${getRndInteger()},${getRndInteger()})`;
        }
    }
}

function blackEventListeners(){
    let allDivs = document.querySelectorAll(".miniBox");
    for (let i = 0; i<allDivs.length; i++){
        allDivs[i].removeEventListener('mouseover');
        allDivs[i].addEventListener('mouseover', (div)=>{
            allDivs[i].style.backgroundColor = `black`;
        })
    }
}

function setGridSize(promptEnter=16){
    bigBox.innerHTML = '';
    for(let i = 0; i<promptEnter; i++){
        let bigBox = document.querySelector('#bigBox');
        let divs = document.createElement('div');
        for(let j = 0; j<promptEnter; j++){
            let div = document.createElement('div');
            div.style.width = `${960/promptEnter}px`
            div.style.height = `${960/promptEnter}px`
            div.classList.add('miniBox');
            divs.appendChild(div);
        }
        bigBox.appendChild(divs);
    }
}

setGridSize();
gridButton.addEventListener('click', ()=>{
    let promptEnter = window.prompt("Choose grid size");
    if(promptEnter>0 && promptEnter<=100){
        setGridSize(promptEnter);
    } else if (promptEnter>100){
        alert("Insert a Grid Sizer <= 100");
    } else {
        alert("Invalid Input")
    }  
});

let buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', ()=>{
    let allDivs = document.querySelectorAll(".miniBox");
    for (let i = 0; i<allDivs.length; i++){
        allDivs[i].style.backgroundColor = "white";
    }
})

let buttonBw = document.querySelector("#bw");
buttonBw.addEventListener('click', ()=>{
    let allDivs = document.querySelectorAll(".miniBox");
    for (let i = 0; i<allDivs.length; i++){
        allDivs[i].onmouseenter = ()=>{
            allDivs[i].style.backgroundColor = `black`;
        }
    }
})


