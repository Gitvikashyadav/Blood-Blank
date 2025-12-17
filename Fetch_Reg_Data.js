const Regi_form=document.getElementById('Reg_form')

Regi_form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target));
     
     


// Register form Data save in json
    async function save_Data() {
    let res=await fetch('http://localhost:3000/user_Data',{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    
//check data save or not
    if (!res.ok) {
      console.error("Failed to save data");
    } else {
      console.log("Data saved successfully");
    }
   }

//check Passowrd confirm equal or not
   if(data.password==data.pwd_Confirm){
    save_Data()
   }else{
    alert('does not match password')
   }
   
})