const email=document.querySelector('#email');
const error=document.querySelector('#error');
const btn1=document.querySelector('#btn');
const btn2=document.querySelector('#btn2');
const container1=document.querySelector('.container');
const container2=document.querySelector('.success-box');
const yourEmail=document.querySelector('#yourEmail');

function ValidEmail(){
    if(!email.value.match("@") ||email.value==''){
    error.textContent='Valid email required';
    email.style.borderColor='rgb(219, 104, 104)';
    email.style.color='rgb(219, 104, 104)';
    email.style.backgroundColor=' hsl(4, 45%, 76%)';
    return false;}
    else return true;
}


function subscribe(){
    if(!ValidEmail()){
        return;
    }
    error.textContent='';
    email.style.borderColor='hsl(235, 15%, 86%)';
    email.style.color='hsl(235, 15%, 86%)';
    email.style.backgroundColor=' white';

container1.style.display='none';
container2.style.display='inline-block';
yourEmail.textContent=email.value;

}

function dismiss(){
container2.style.display='none';
container1.style.display='grid';
}

btn1.addEventListener('click',subscribe);
btn2.addEventListener('click',dismiss);