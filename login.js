const Login=async(email,pass)=>{
    var users=await fetch("./users.json").then((response)=>{
        return response.json();
    });
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var user=users.users.find(
                (user)=> user.email===email && user.password === pass
            );
            if(user){
                resolve(user);
            }else{
                reject(new Error("Invalid email or password"));
            }
        },1000);
    });
};
document.getElementById("submitForm").addEventListener("submit",async (e)=>{
    e.preventDefault();
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#password").value;
    try{
        let user=await Login(email,pass);
        if(user){
            window.location.href="./task.html"
        }
        console.log("User Logged in:",user)
    } catch(error){
        console.error("Login error:",error.message);
    }
});