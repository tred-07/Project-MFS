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