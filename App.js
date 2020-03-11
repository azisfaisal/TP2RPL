const DB_USER = [
    {
        username: "Azis",
        password: "azisganteng123"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener('click', (e) =>{
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueiInputUsername = inputUsername.value;

    let flag = 0;


    DB_USER.map((data) => {
        if(data.username == valueiInputUsername && data.password == valueInputPassword){
            flag = 1;
        }
    });

    const warningmsg = document.querySelector(".warning");

    if(flag == 0){
        warningmsg.className = "text-danger";
    }else{
        alert("Selama anda masuk ke home");
    }
});


