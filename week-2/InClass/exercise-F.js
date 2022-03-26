function validName(username, usertype){
    const firsLetter = username.charAt(0)
    const userLenght = username.lenght;
    const isValidlenght = userLenght >= 5 && userLenght <= 10;
    const isASuperUser = usertype === "admin" || usertype === "manager"
    if (isASuperUser){
        return "username valid"
    }    
    else if(firsLetter === firsLetter.toUpperCase() && isValidlenght ){
        return "username valid"
    }else{ 
        "username invalid"
    }
}



console.log(validName("Valeria","admin"));