const date = new Date();
const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
document.getElementById('copyright').innerText="All right reserved by tred-07 © 2022 - "+formattedDate;