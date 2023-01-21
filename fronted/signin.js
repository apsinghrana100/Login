const submit=document.getElementById("submit-btn");

submit.addEventListener('click',signup);

 async function signup(event)
{
    try {
        event.preventDefault();
        const username=document.getElementById('user-name').value;
        const emailid=document.getElementById("user-email").value;
        const password=document.getElementById("user-password").value;
        console.log(username+" "+emailid+" "+password); 

        const userdetail={
            username,
            emailid,
            password
        }

        const promise= await axios.post("http://localhost:4000/",userdetail);
        if(promise)
        {
            console.log(promise);
        }
    } catch (error) {
        console.log(error);
    }
   
}
