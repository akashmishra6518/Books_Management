const isValid = function (value) {
    if (typeof value === "undefined" || value === null || value==" ") return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
}
const isStreetValid = function (value) {
    return (/^[\s]*[a-zA-Z-0-9,]+([\s]?[a-zA-Z-0-9]+)*[\s]*$/.test(value))
}
const isValidName = function (value) {
    if (value.match(/^[a-zA-Z\. ]*$/)) return true;  
    return false;
}
const isValidPhone = function (value) {
    return /^[\s]*[6-9]\d{9}[\s]*$/gi.test(value)
}
const isValidISBN=function(value){
        return  /^[6-9]{3}[\-][\d]{10}$/.test(value)
 }

const isValidEmail=function(value){
    if(value.match(/^[a-z0-9_]{1,}@[a-z]{3,}[.]{1}[a-z]{3,6}$/))
    return true;
    return false;
}

const isValidPass=function(value){
    if(value.match(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/))
    return true
    return false
}
const isValidPin=function(value){
    if(value.match(/^\d{6}$/))
    return true
    return false
}

function isValidDate(value){
    return /^(?!0000)\d{4}-(?!00)(?!13)(?!14)(?!15)(?!16)(?!17)(?!18)(?!19)[0-1]{1}\d{1}-(?!00)(?!33)(?!32)(?!34)(?!35)(?!36)(?!37)(?!38)(?!39)[0-3]{1}\d{1}$/.test(value)
}


const isValidRating=function(value){
    
    return /^[1-5]{1}(.\d{1})?$/.test(value)
    
}

const isValidString=function(value){
    if (value.match(/^[a-zA-Z0-9\.!@#$%&? ]*$/)) return true;  
    return false;
}
const isValidBody = function (value) {
    return Object.keys(value).length > 0;
  };

//================================= Exported all the functions here ======================================
module.exports={isValidBody,isValidString,isValidRating,isValidDate,isValidName,isValidPhone,isValidEmail,isValidPass,isStreetValid,isValidPin,isValid,isValidISBN}




