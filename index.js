


function genRandomPassword() {
        let randomPassword = "";
        let chars = [1,2,3,4,5,6,7,8,"q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",",".","/","Q","W","E","R","T","Y","U","I","O","P","{","}","A","S","D","F","G","H","J","K","L",":","|","Z","X","C","V","B","N","M","<",">","?","!","@","#","$","%","^","&","*","(",")","_","+"]
        let passwordLength = 10;
        for(let i = 0; i < passwordLength; i++) {
            let random = chars[Math.floor(Math.random() * chars.length)];
            randomPassword += random;
        }
        document.querySelector(".passwords").textContent = randomPassword;
    return randomPassword;
}
