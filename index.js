document.querySelector(".generate-password").addEventListener('click', getPasswords);

function genRandomPassword() {
    const chars = [1,2,3,4,5,6,7,8,"q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",",".","/","Q","W","E","R","T","Y","U","I","O","P","{","}","A","S","D","F","G","H","J","K","L",":","|","Z","X","C","V","B","N","M","<",">","?","!","@","#","$","%","^","&","*","(",")","_","+"];
    let randomPassword = "";
    let passwordLength = 10;
    let random;
    for (let i = 0; i < passwordLength; i++) {
        random = chars[Math.floor(Math.random() * chars.length)];
        randomPassword += random;
    }  
    return randomPassword;
}


function getPasswords() {
    let passwords = document.querySelectorAll(".passwords");

    for (let i = 0; i < passwords.length; i++) {
    passwords[i].textContent = genRandomPassword();
    }
}