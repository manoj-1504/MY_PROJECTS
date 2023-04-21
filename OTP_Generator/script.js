
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");



  function password(){
    let char = "1234567890";
    let password = "";
    
    for(let i = 0; i<6; i++){
        let randomNum = Math.floor(Math.random() * char.length);
        password += char.substring(randomNum ,  randomNum +1);
    }
    document.getElementById('input').value = password;
  }





