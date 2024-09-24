console.log("log_in.js connected");
document.getElementById('login-button').addEventListener('click', function (event) {
    console.log("Button Click");
    event.preventDefault();//prevent refresh of page
    const phoneNumber = document.getElementById('account-number').value;
    console.log(phoneNumber);
    const password = document.getElementById('password').value;
    console.log(password);
    if (password === '1234' && phoneNumber.length==11) {
        console.log('Okay');
        window.location.href = './test.html';//redirect another webpage
    }
    else {
        alert('Enter wrong credential');
        console.log('Not Okay');
    }
})