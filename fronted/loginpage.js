const loginbtn=document.getElementById("login-btn");
const message=document.getElementById("msg");

loginbtn.addEventListener('click',loginpage);

 async function loginpage(event){
    try {
        event.preventDefault();
        const emailid=document.getElementById("user-email").value.trim();
        const password=document.getElementById("user-password").value.trim();
        console.log(emailid+" "+password); 
        
        if(emailid!=="" && emailid!==undefined && password!=="" && password!==undefined)
        {
        
            const userdetail={
                emailid,
                password
            }

            const promise= await axios.post("http://localhost:4000/loginpage",userdetail);
           
                console.log("email id exists");
                if(promise.data==="Login Successfull")
                {
                    message.style.backgroundColor="green";
                }
                else
                {
                    message.style.backgroundColor="red"; 
                }
                message.innerText=promise.data;
                setTimeout(() => {
                    message.style.display = "none";
                }, 3000);
                message.style.display = "block"; 

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