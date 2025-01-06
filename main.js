let searchIcon = document.getElementById('search'),
    searchInput = document.getElementById('search-input');
    
 searchIcon.addEventListener('click',()=>{
     searchInput.style.width = "200px";
     searchIcon.src = "./image/close.png";
 });
 searchInput.addEventListener('click',()=>{
     searchInput.style.width = "0px";
     searchIcon.src = "./image/search.png";
 })

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
 
 
let addNewDitails = document.getElementById('add-new-ditails'),
    newTextAdd = document.getElementById('new-text-add');
    
    newTextAdd.addEventListener('click',()=>{
        addNewDitails.style.height = "100%";
    });
    
    let cancenBtn = document.getElementById('cancel').addEventListener('click',()=>{
        addNewDitails.style.height = "0px";
    })
    
    
    /* add content */
    
    let addContent = document.getElementById('add-content');
    function savedata() {
        let nameInput = document.getElementById('name'),
            villageInput = document.getElementById('village'),
            notPayedIn = document.getElementById('not-payed'),
            payedInput = document.getElementById('payed');
            
            
            let section = document.createElement('section');
                addContent.append(section);
           console.log(nameInput.value, villageInput.value, notPayedIn.value, payedInput.value);
            
            nameInput.value = "";
            villageInput.value = "";
            notPayedIn.value = "";
            payedInput.value = "";
            addNewDitails.style.height = "0px";
            
    }