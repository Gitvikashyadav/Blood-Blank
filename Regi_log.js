  
  //nav Register and Login Toggle effect
  const Nav_btn=document.getElementById('Nav_btn');
  const wrapper_Regi_Con=document.querySelector('.wrapper')
  const wrapper_login_Con=document.querySelector('.wrapper_login')
  let c=0
  if(c==0){
    console.log('call');
    
   wrapper_login_Con .classList.add("open");
  c++
  }
  
  Nav_btn.addEventListener('click',(e)=>{
    console.log();
    if(e.target.innerText=='Register'){
        Nav_btn.innerText='Login'
        wrapper_login_Con.classList.remove("open");
        wrapper_Regi_Con .classList.add("open");
       
        
    }else{//Login button triger

        Nav_btn.innerText='Register'
         login_wrapper_Con.style.display='none'
        wrapper_Regi_Con.classList.remove("open");
        wrapper_login_Con .classList.add("open");
       
    }
  })


  
  
  
  // Con login_Text and siginU_text toggle
  const login_Text=document.getElementById('Login_Text')
  const SiginUp_text=document.getElementById('signUp_Text')

  login_Text.addEventListener('click',()=>{
     Nav_btn.innerText='Register'
        wrapper_Regi_Con.classList.remove("open");
        wrapper_login_Con .classList.add("open");

  })

  SiginUp_text.addEventListener('click',()=>{
        Nav_btn.innerText='Login'
        
        wrapper_login_Con.classList.remove("open");
        wrapper_Regi_Con .classList.add("open");
    
  })



  const forgo_Btn=document.getElementById('forgo_Btn')
  const login_wrapper_Con=document.querySelector('.login_wrapper')
 
  
  forgo_Btn.addEventListener('click',()=>{
      Nav_btn.innerText='Login'
   
    wrapper_login_Con.classList.remove("open");
    login_wrapper_Con.style.display='flex'
     
  })