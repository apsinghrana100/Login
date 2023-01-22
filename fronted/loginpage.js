const loginbtn=document.getElementById("login-btn");
const message=document.getElementById("msg");

loginbtn.addEventListener('click',login);

 async function login(event)
{
    try {
        event.preventDefault();
        const emailid=document.getElementById("user-email").value.trim();
        const password=document.getElementById("user-password").value.trim();
        console.log(username+" "+emailid+" "+password); 
       
        if(username!=="" && username!==undefined && emailid!=="" && emailid!==undefined && password!=="" && password!==undefined)
        {
        
            const userdetail={
                emailid,
                password
            }

            const promise= await axios.post("http://localhost:4000/loginpage",userdetail);
            if(promise.data===true)
            {
                console.log("EMi");
                message.style.backgroundColor="red";
                message.innerText="email id exits";
                setTimeout(() => {
                    message.style.display = "none";
                }, 3000);
                message.style.display = "block";

                    
                
            
            }else{
                console.log("Data Add Successfully");
                message.style.backgroundColor="green";
                message.innerText="Data Add Successfully";
                setTimeout(() => {
                    message.style.display="none";
                }, 3000);
                message.style.display = "block";
            }

        }else{
            console.log("some Field are might be empty");
            message.style.backgroundColor="red";
                message.innerText="some Field are might be empty";
                setTimeout(() => {
                    message.style.display="none";
                }, 3000);
                message.style.display = "block";
        }
    }catch (error) {
        console.log(error);
    }
    
   
}
