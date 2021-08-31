
const slideBar = ()=> {
 const burger=document.querySelector('.brgr-icon');
 const navBar= document.querySelector('.nav-link');
 const imgText = document.querySelector('.img-text');
 burger.addEventListener('click', ()=>{
     navBar.classList.toggle('nav-active');
     imgText.style.display=="none" ? imgText.style.display="block":imgText.style.display="none";
 });

}

slideBar();