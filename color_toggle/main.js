let toggleMenuStatus = false;
let getSidebarUl = document.querySelectorAll(".menu-sidebar li")
let getSidebar = document.querySelector (".menu-sidebar");

function toggleMenu() {
    
    let getSidebar = document.querySelector (".menu-sidebar");
    let getSidebarUl = document.querySelectorAll(".menu-sidebar li")
    if ( toggleMenuStatus === false){
        getSidebar.style.visibility = "visible";
    
        let arrayLength = getSidebarUl.length;
     for(let i = 0; i < arrayLength;i++){
        getSidebarUl[i].style.opacity = "2";

         } 
         
        }
        toggleMenuStatus = true;
    }
    toggleMenu();
    
    function  easeOut(){
        let getSidebarUl = document.querySelectorAll(".menu-sidebar li")
    if (toggleMenuStatus === true){
    getSidebar.style.visibility = "hidden";
         let arrayLength = getSidebarUl.length;
     for(let i = 0; i < arrayLength;i++){
         getSidebarUl[i].style.opacity = "0";

         } 
        
    }
    
    toggleMenuStatus = false;
}
easeOut();
        
    
                   
                
    
            
                
            
   
    





    

  
      






    

 




