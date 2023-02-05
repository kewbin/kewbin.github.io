var move = 0;

function upgradeShelly() {
	if (move != 1) {
		var money = parseInt(localStorage.getItem('money'));
		var shellycost = parseInt(localStorage.getItem('shellycost'));
		var shellybase = 500;
		if (shellycost <= money) {
			click = parseInt(click)*2;
			localStorage.setItem('click',click);
			shellyowned++;
			$("#shellylevel").text(shellyowned);
			localStorage.setItem('shellyowned',shellyowned);
			var money = parseInt(money) - parseInt(shellycost);
			localStorage.setItem('money',money);
			var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
			$("#currentmoney").text(abbrmoney);
			var shellycost = shellybase * Math.pow(3,shellyowned);
			var shellycostabbr = abbreviate(shellycost, 2, 2, false);
			$("#shellycost").text(shellycostabbr);
			localStorage.setItem('shellycost',shellycost);
			move = 0;
		} else {}
	} else {move=0}
}

function upgradeNita() {
	if (move != 1) {
		if (shellyowned >= 2) {
			var money = parseInt(localStorage.getItem('money'));
			var nitacost = parseInt(localStorage.getItem('nitacost'));
			var nitabase = 1000;
			if (nitacost <= money) {
				cps = parseInt(cps)+1;
				localStorage.setItem('cps',cps);
				nitaowned++;
				localStorage.setItem('nitaowned',nitaowned);
				var money = parseInt(money) - parseInt(nitacost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var nitacost = nitabase * Math.pow(1.5,nitaowned);
				var nitacostabbr = abbreviate(nitacost, 2, 2, false);
				localStorage.setItem('nitacost',nitacost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeColt() {
	if (move != 1) {
		if (nitaowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var coltcost = parseInt(localStorage.getItem('coltcost'));
			var coltbase = 10000;
			if (coltcost <= money) {
				cps = parseInt(cps)+3;
				localStorage.setItem('cps',cps);
				coltowned++;
				localStorage.setItem('coltowned',coltowned);
				var money = parseInt(money) - parseInt(coltcost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var coltcost = coltbase * Math.pow(1.5,coltowned);
				var coltcostabbr = abbreviate(coltcost, 2, 2, false);
				localStorage.setItem('coltcost',coltcost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeBull() {
	if (move != 1) {
		if (coltowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var bullcost = parseInt(localStorage.getItem('bullcost'));
			var bullbase = 30000;
			if (bullcost <= money) {
				cps = parseInt(cps)+10;
				localStorage.setItem('cps',cps);
				bullowned++;
				localStorage.setItem('bullowned',bullowned);
				var money = parseInt(money) - parseInt(bullcost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var bullcost = bullbase * Math.pow(1.5,bullowned);
				var bullcostabbr = abbreviate(bullcost, 2, 2, false);
				localStorage.setItem('bullcost',bullcost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeJessie() {
	if (move != 1) {
		if (bullowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var jessiecost = parseInt(localStorage.getItem('jessiecost'));
			var jessiebase = 100000;
			if (jessiecost <= money) {
				cps = parseInt(cps)+20;
				localStorage.setItem('cps',cps);
				jessieowned++;
				localStorage.setItem('jessieowned',jessieowned);
				var money = parseInt(money) - parseInt(jessiecost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var jessiecost = jessiebase * Math.pow(1.5,jessieowned);
				var jessiecostabbr = abbreviate(jessiecost, 2, 2, false);
				localStorage.setItem('jessiecost',jessiecost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeBrock() {
	if (move != 1) {
		if (jessieowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var brockcost = parseInt(localStorage.getItem('brockcost'));
			var brockbase = 250000;
			if (brockcost <= money) {
				cps = parseInt(cps)+40;
				localStorage.setItem('cps',cps);
				brockowned++;
				localStorage.setItem('brockowned',brockowned);
				var money = parseInt(money) - parseInt(brockcost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var brockcost = brockbase * Math.pow(1.5,brockowned);
				var brockcostabbr = abbreviate(brockcost, 2, 2, false);
				localStorage.setItem('brockcost',brockcost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeDynamike() {
	if (move != 1) {
		if (brockowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var dynamikecost = parseInt(localStorage.getItem('dynamikecost'));
			var dynamikebase = 700000;
			if (dynamikecost <= money) {
				cps = parseInt(cps)+100;
				localStorage.setItem('cps',cps);
				dynamikeowned++;
				localStorage.setItem('dynamikeowned',dynamikeowned);
				var money = parseInt(money) - parseInt(dynamikecost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var dynamikecost = dynamikebase * Math.pow(1.5,dynamikeowned);
				var dynamikecostabbr = abbreviate(dynamikecost, 2, 2, false);
				localStorage.setItem('dynamikecost',dynamikecost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeBo() {
	if (move != 1) {
		if (dynamikeowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var bocost = parseInt(localStorage.getItem('bocost'));
			var bobase = 2000000;
			if (bocost <= money) {
				cps = parseInt(cps)+200;
				localStorage.setItem('cps',cps);
				boowned++;
				localStorage.setItem('boowned',boowned);
				var money = parseInt(money) - parseInt(bocost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var bocost = bobase * Math.pow(1.5,boowned);
				var bocostabbr = abbreviate(bocost, 2, 2, false);
				localStorage.setItem('bocost',bocost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeElprimo() {
	if (move != 1) {
		if (boowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var elprimocost = parseInt(localStorage.getItem('elprimocost'));
			var elprimobase = 30000000;
			if (elprimocost <= money) {
				cps = parseInt(cps)+1000;
				localStorage.setItem('cps',cps);
				elprimoowned++;
				localStorage.setItem('elprimoowned',elprimoowned);
				var money = parseInt(money) - parseInt(elprimocost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var elprimocost = elprimobase * Math.pow(1.5,elprimoowned);
				var elprimocostabbr = abbreviate(elprimocost, 2, 2, false);
				localStorage.setItem('elprimocost',elprimocost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeBarley() {
	if (move != 1) {
		if (elprimoowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var barleycost = parseInt(localStorage.getItem('barleycost'));
			var barleybase = 100000000;
			if (barleycost <= money) {
				cps = parseInt(cps)+3000;
				localStorage.setItem('cps',cps);
				barleyowned++;
				localStorage.setItem('barleyowned',barleyowned);
				var money = parseInt(money) - parseInt(barleycost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var barleycost = barleybase * Math.pow(1.5,barleyowned);
				var barleycostabbr = abbreviate(barleycost, 2, 2, false);
				localStorage.setItem('barleycost',barleycost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradePoco() {
	if (move != 1) {
		if (barleyowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var pococost = parseInt(localStorage.getItem('pococost'));
			var pocobase = 180000000;
			if (pococost <= money) {
				cps = parseInt(cps)+5000;
				localStorage.setItem('cps',cps);
				pocoowned++;
				localStorage.setItem('pocoowned',pocoowned);
				var money = parseInt(money) - parseInt(pococost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var pococost = pocobase * Math.pow(1.5,pocoowned);
				var pococostabbr = abbreviate(pococost, 2, 2, false);
				localStorage.setItem('pococost',pococost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeRosa() {
	if (move != 1) {
		if (pocoowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var rosacost = parseInt(localStorage.getItem('rosacost'));
			var rosabase = 500000000;
			if (rosacost <= money) {
				cps = parseInt(cps)+8500;
				localStorage.setItem('cps',cps);
				rosaowned++;
				localStorage.setItem('rosaowned',rosaowned);
				var money = parseInt(money) - parseInt(rosacost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var rosacost = rosabase * Math.pow(1.5,rosaowned);
				var rosacostabbr = abbreviate(rosacost, 2, 2, false);
				localStorage.setItem('rosacost',rosacost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeRico() {
	if (move != 1) {
		if (rosaowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var ricocost = parseInt(localStorage.getItem('ricocost'));
			var ricobase = 30000000000;
			if (ricocost <= money) {
				cps = parseInt(cps)+50000;
				localStorage.setItem('cps',cps);
				ricoowned++;
				localStorage.setItem('ricoowned',ricoowned);
				var money = parseInt(money) - parseInt(ricocost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var ricocost = ricobase * Math.pow(1.5,ricoowned);
				var ricocostabbr = abbreviate(ricocost, 2, 2, false);
				localStorage.setItem('ricocost',ricocost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradeDarryl() {
	if (move != 1) {
		if (ricoowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var darrylcost = parseInt(localStorage.getItem('darrylcost'));
			var darrylbase = 100000000000;
			if (darrylcost <= money) {
				cps = parseInt(cps)+80000;
				localStorage.setItem('cps',cps);
				darrylowned++;
				localStorage.setItem('darrylowned',darrylowned);
				var money = parseInt(money) - parseInt(darrylcost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var darrylcost = darrylbase * Math.pow(1.5,darrylowned);
				var darrylcostabbr = abbreviate(darrylcost, 2, 2, false);
				localStorage.setItem('darrylcost',darrylcost);
			} else {}
		} else {}
	} else {move=0}
}



function upgradePenny() {
	if (move != 1) {
		if (darrylowned >= 1) {
			var money = parseInt(localStorage.getItem('money'));
			var pennycost = parseInt(localStorage.getItem('pennycost'));
			var pennybase = 350000000000;
			if (pennycost <= money) {
				cps = parseInt(cps)+150000;
				localStorage.setItem('cps',cps);
				pennyowned++;
				localStorage.setItem('pennyowned',pennyowned);
				var money = parseInt(money) - parseInt(pennycost);
				localStorage.setItem('money',money);
				var abbrmoney = abbreviate(parseInt(money), 2, 2, false);
				$("#currentmoney").text(abbrmoney);
				var pennycost = pennybase * Math.pow(1.5,pennyowned);
				var pennycostabbr = abbreviate(pennycost, 2, 2, false);
				localStorage.setItem('pennycost',pennycost);
			} else {}
		} else {}
	} else {move=0}
}