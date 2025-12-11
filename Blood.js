const menuIcon = document.getElementById("Menu_Img");
const menuPanel = document.getElementById("nav-links-menu");

menuIcon.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
});





const Donar_No = document.getElementById("Donar_No");
const Blood_units_No = document.getElementById("Blood_units_No");

function Set_Donar_No() {

  const Id_Donar = setInterval(() => {
  
    let Digit_no = Number(Donar_No.innerText);
    Donar_No.innerText = Digit_no+1;
    if (Digit_no == 12) clearInterval(Id_Donar);

    
  },300);

    const Id_Blood = setInterval(() => {
   
    let Digit_no = Number(Blood_units_No.innerText);
    Blood_units_No.innerText = Digit_no+1;
    if (Digit_no == 340) clearInterval(Id_Blood);

    
  },10);

}

 Set_Donar_No();


  const btn = document.querySelector(".scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  const guest_btn=document.querySelector('.guest-btn')
  const profile_Img=document.querySelector('#profile_Img')
  console.log(guest_btn);
  
  guest_btn.addEventListener('click',(e)=>{
    guest_btn.style.display='none'
    profile_Img.style.display='block'
    console.log('click',e);
    
    

  })


 
  const Dropdown_profile_Img=document.querySelector('.Dropdown_profile_Img')
  profile_Img.addEventListener('click',()=>{
    console.log("click profile img");
     Dropdown_profile_Img.classList.toggle("active");
    
    // Dropdown_profile_Img.style.display='flex'

  })

  const Dropdown_profile_Img2=document.querySelector('.Dropdown_profile_Img2')
  const profile_Menu_Img=document.querySelector('#profile_Menu_Img')
  profile_Menu_Img.addEventListener('click',()=>{
     Dropdown_profile_Img2.classList.toggle("active");
  })