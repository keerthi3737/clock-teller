function degenerate(){
function generatepassword(length,lowercase,uppercase,numbers,symbols){
 
    const lower_case="abcdefghijklmnopqrstuvwxyz";
    const upper_case="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num="0123456789";
    const sym="!@#$%^&*()-=_+";
    let temporary="";
    let password=""
    temporary+=lowercase?lower_case:"";
    temporary+=uppercase?upper_case:"";
    temporary+=numbers?num:"";
    temporary+=symbols?sym:"";
    if(length<=0){
        alert("length should be greater than 1");
    }
    if(temporary===""){
        alert("atleast one character type should be present")
    }
    for(let i=0;i<length;i++){
        let randomindex=Math.floor(Math.random()*temporary.length);
        password+=temporary[randomindex];
    }
    return password;

}

const len=8;
const lower=true;
const upper=true;
const number=true;
const symbol=true;


const result=generatepassword(len,lower,upper,number,symbol);
document.getElementById("password").value=result;
console.log(`generated password is: ${result}`);
}
// generate()