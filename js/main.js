
// Thay doi header 
const header = document.querySelector('.header')
window.addEventListener('scroll', function(){
    const scrollY = window.scrollY;
    const heightHeader = header.clientHeight;
    if(scrollY >= heightHeader){
        header.classList.add('--bg-yellow');
    }
    else{
        header.classList.remove('--bg-yellow');
    }
});

