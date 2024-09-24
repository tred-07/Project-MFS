console.log('features file added')
document.getElementById('cash-out-button').addEventListener('click',function(event){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden')
})

document.getElementById('add-money-button').addEventListener('click',function(event){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})


// cash-out-form
// add-money-button
// cash-out-button
// add-money-button