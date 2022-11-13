const getNextBtn = document.querySelector('.nextBtn');
const getPrevBtn = document.querySelector('.prevBtn');
const getProgressLine = document.querySelector('.progressLine');
const circles = document.querySelectorAll('.circle');
let currentActive = 1;  
getNextBtn.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length ;
    }
    update();
})
getPrevBtn.addEventListener('click', () => {
    currentActive--;
    if(currentActive > circles.length){
        currentActive = circles.length ;
    }
   update();
})
function update(){
    circles.forEach((circle,idx) => {
           if(idx < currentActive){
            circle.classList.add('active');
           }
           else{
            circle.classList.remove('active');
           }
    })
    const actives = document.querySelectorAll('.active');
    getProgressLine.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    if(currentActive === 1){
        getPrevBtn.disabled === true ;
        }
        else if (currentActive === circles.length){
        getNextBtn.disabled === true;
        }
        else {
        getPrevBtn.disabled === false;
        getNextBtn.disabled === false;
        }
}
