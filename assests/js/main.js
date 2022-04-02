
const onOffNavBars = document.querySelectorAll('.js-header-bars');
if (document.body.offsetWidth <= 739) {
    for (i=0; i < onOffNavBars.length; ++i) {
        onOffNavBars[i].onclick = function () {    
            document.querySelector('.header-content').classList.toggle('height-1-1');
            document.querySelector('.overlay1').classList.toggle('hidden');            
        }
    }
}
if (document.body.offsetWidth <= 739) {
    const overlay1 = document.querySelector('.overlay1');
    overlay1.onclick = function () {
        document.querySelector('.header-content').classList.toggle('height-1-1');
        document.querySelector('.overlay1').classList.toggle('hidden');
    }
}
//----------------------------------------------------------
var myIndex = 0;
function carousel() {
    var j;
    var slideItem = document.getElementsByClassName("slide-item");
    for (j = 0; j < slideItem.length; j++) {
        slideItem[j].style.display = "none";  
    }
    myIndex++;
    if (myIndex > slideItem.length) {myIndex = 1}    
    slideItem[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000);    
};
carousel();
//----------------------------------------------------------
const upToHead = document.querySelector('.up-to-head');
document.addEventListener("scroll", function(){
    let scroll_Y = window.scrollY;
    if (scroll_Y>(window.innerHeight/2)) {
        upToHead.classList.remove('hidden');
    } else {
        upToHead.classList.add('hidden');
    }
});
//----------------------------------------------------------
const onOffModal = document.querySelectorAll('.js-modal');
for (i=0; i < onOffModal.length; ++i) {
    onOffModal[i].onclick = function () {
        document.querySelector('.modal').classList.toggle('hidden');
        document.querySelector('.overlay2').classList.toggle('hidden');
    }
}
const overlay2 = document.querySelector('.overlay2');
overlay2.onclick = function () {
    document.querySelector('.modal').classList.toggle('hidden');
    document.querySelector('.overlay2').classList.toggle('hidden');
}