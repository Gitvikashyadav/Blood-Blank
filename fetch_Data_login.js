

const login_form=document.getElementById('login_form')
login_form.addEventListener('submit', async(e)=>{
     e.preventDefault()
     
     
    
// collect all form data and create new object      
     const { email, password } = Object.fromEntries(
     new FormData(e.target)
     );
//fetch data through email
    const res = await fetch(
      `http://localhost:3000/user_Data?email=${email}`
    );

    const users = await res.json();
//check user found or not
    if (users.length === 0) {
      console.log("User not found");
    } else {
      console.log("Login successful", users[0]);
    }

    e.target.reset();
      
      
    
    

})