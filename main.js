let searchIcon = document.getElementById('search'),
    searchInput = document.getElementById('search-input');
    
 searchIcon.addEventListener('click',()=>{
     searchInput.style.width = "200px";
     searchIcon.src = "./image/close.png";
     searchIcon.classList.add('search-close');
 });
 

 let dodMe = document.getElementById('dod'),
    dropdownLeft = document.getElementById('left-dropdown'),
    dropdownClose = document.getElementById('dropdown-close');
 
 
 dodMe.addEventListener('click',()=>{
     dropdownLeft.style.width = "300px";
 });
 
 dropdownClose.addEventListener('click',()=>{
    dropdownLeft.style.width ="0px";
 });
 
 
 
 
 /* Its very hard  */
 
 
 