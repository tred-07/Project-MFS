console.log("test.js added");
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyAmount = parseFloat(document.getElementById('amount').value);
    console.log(addMoneyAmount);
    const pin = document.getElementById('pIN').value;
    const availableBalance = parseFloat(document.getElementById('availableBalance').innerText);
    if (pin === '1234') {
        console.log(availableBalance);
        document.getElementById('availableBalance').innerText=availableBalance+addMoneyAmount;
        console.log(availableBalance);
        console.log('added');
    }
    else {
        alert("Invalid data");
    }
})

document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const pin=document.getElementById('cash-pIN').value;
    console.log(pin);
    const casOutAmount=parseFloat(document.getElementById('cash-out-amount').value);
    console.log(casOutAmount);
    if(pin==='1234'){
        const availableBalance=document.getElementById('availableBalance').innerText;
        console.log(availableBalance);
        const total=parseFloat(availableBalance)-parseFloat(casOutAmount);
        if(total>0) document.getElementById('availableBalance').innerText=total;
        else alert("Insufficient Balance")
    }
    else alert("Invalid data");
})