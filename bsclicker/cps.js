setInterval(addcps, 1000);

function addcps() {
	var money = parseFloat(localStorage.getItem('money'));
	var cps = parseInt(localStorage.getItem('cps'));
	var maxmoney = parseInt(localStorage.getItem('maxmoney'));
	var tickets = parseInt(localStorage.getItem('tickets'));

	money = money + (cps * (1 + (tickets * 0.05)));
	localStorage.setItem('money',money);

	if (money > maxmoney) {
		localStorage.setItem('maxmoney',money);
	}
}

function savedate() {
	$.ajax({
    dataType: 'json',
    url: 'http://worldtimeapi.org/api/timezone/Europe/London',
    success: function (result) {
        localStorage.setItem('date',result.datetime);
    }
});}