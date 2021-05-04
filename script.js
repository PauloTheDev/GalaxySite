





let email = []
let password = []




function addAccount(){

    
    let newEmail = document.getElementById('newEmail')
    let newSenha = document.getElementById(('newPassword'))
    
    email.push(String(newEmail.value))

    password.push(String(newPassword.value))
    
    window.location.href = '../inicio/Galaxy.html'
}


let validate = document.getElementById("validate")




function validateDatas() {
    let emailInput = document.getElementById("email")
    let passowordInput = document.getElementById("password")

    if(email.indexOf(String(emailInput.value)) == -1 && password.indexOf(String(passowordInput.value)) == -1){
        validate.style.display = 'block'
        validate.innerHTML = 'Reveja seus dados'
    } else{
        window.location.href = '../home/home.html'
    }


}

console.log(email)