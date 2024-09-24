console.log("log_in.js connected");
document.getElementById('login-button').addEventListener('click',function(event){
    console.log("Button Click");
    event.preventDefault();//prevent refresh of page
    const phoneNumber=document.getElementById('account-number').value;
    console.log(phoneNumber);
    const password=document.getElementById('password').value;
    console.log(password);
    if(password==='1234')console.log('Okay');
    else console.log('Not Okay');

})