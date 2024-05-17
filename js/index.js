const elements = document.getElementsByClassName('fonts');
for(const element of elements) {    /* I wanted to use iteration here teacher. */
  element.style.fontSize="1.2rem";
  element.style.fontWeight="500";
  element.style.fontStyle="italic";
  }

/* Navbar */
 function myFunction() {
  document.getElementById("myLinks").classList.toggle("hidden");
  /* toggle: eğer hidden clası varsa çıkartıyor yoksa ekliyor */
  
 }
