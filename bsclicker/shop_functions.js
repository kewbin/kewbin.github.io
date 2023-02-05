function testcost() {
			var money = parseInt(localStorage.getItem('money'));
			var shellycost = parseInt(localStorage.getItem('shellycost'));
			var shellyowned = parseInt(localStorage.getItem('shellyowned'));
			var nitacost = parseInt(localStorage.getItem('nitacost'));
			var nitaowned = parseInt(localStorage.getItem('nitaowned'));
			var coltcost = parseInt(localStorage.getItem('coltcost'));
			var coltowned = parseInt(localStorage.getItem('coltowned'));
			var bullcost = parseInt(localStorage.getItem('bullcost'));
			var bullowned = parseInt(localStorage.getItem('bullowned'));
			var jessiecost = parseInt(localStorage.getItem('jessiecost'));
			var jessieowned = parseInt(localStorage.getItem('jessieowned'));
			var brockcost = parseInt(localStorage.getItem('brockcost'));
			var brockowned = parseInt(localStorage.getItem('brockowned'));
			var dynamikecost = parseInt(localStorage.getItem('dynamikecost'));
			var dynamikeowned = parseInt(localStorage.getItem('dynamikeowned'));
			var bocost = parseInt(localStorage.getItem('bocost'));
			var boowned = parseInt(localStorage.getItem('boowned'));
			var elprimocost = parseInt(localStorage.getItem('elprimocost'));
			var elprimoowned = parseInt(localStorage.getItem('elprimoowned'));
			var barleycost = parseInt(localStorage.getItem('barleycost'));
			var barleyowned = parseInt(localStorage.getItem('barleyowned'));
			var pococost = parseInt(localStorage.getItem('pococost'));
			var pocoowned = parseInt(localStorage.getItem('pocoowned'));
			var rosacost = parseInt(localStorage.getItem('rosacost'));
			var rosaowned = parseInt(localStorage.getItem('rosaowned'));
			var ricocost = parseInt(localStorage.getItem('ricocost'));
			var ricoowned = parseInt(localStorage.getItem('ricoowned'));
			var darrylcost = parseInt(localStorage.getItem('darrylcost'));
			var darrylowned = parseInt(localStorage.getItem('darrylowned'));
			var pennycost = parseInt(localStorage.getItem('pennycost'));
			var pennyowned = parseInt(localStorage.getItem('pennyowned'));
			if (shellycost <= money) {
				$("#shelly").css({"filter":"grayscale(0%)"});
			} else {
				$("#shelly").css({"filter":"grayscale(70%)"});
			}
			var shellycostabbr = abbreviate(parseInt(shellycost), 2, 2, false);
			unlockedStats("#shelly",shellyowned,shellycostabbr,"x2");



			if (shellyowned < 2) {
				$("#nita").css({"filter":"grayscale(100%)"});
				lockedStats("#nita","???","???","???");
			} else {
			var nitacostabbr = abbreviate(parseInt(nitacost), 2, 2, false);
			unlockedStats("#nita",nitaowned,nitacostabbr,"1");
			if (nitacost <= money) {
				$("#nita").css({"filter":"grayscale(0%)"});
			} else {
				$("#nita").css({"filter":"grayscale(70%)"});
			}
			}


			if (nitaowned < 1) {
				$("#colt").css({"filter":"grayscale(100%)"});
				lockedStats("#colt","???","???","???");
			} else {
			var coltcostabbr = abbreviate(parseInt(coltcost), 2, 2, false);
			unlockedStats("#colt",coltowned,coltcostabbr,"3");
			if (coltcost <= money) {
				$("#colt").css({"filter":"grayscale(0%)"});
			} else {
				$("#colt").css({"filter":"grayscale(70%)"});
			}
			}


			if (coltowned < 1) {
				$("#bull").css({"filter":"grayscale(100%)"});
				lockedStats("#bull","???","???","???");
			} else {
			var bullcostabbr = abbreviate(parseInt(bullcost), 2, 2, false);
			unlockedStats("#bull",bullowned,bullcostabbr,"10");
			if (bullcost <= money) {
				$("#bull").css({"filter":"grayscale(0%)"});
			} else {
				$("#bull").css({"filter":"grayscale(70%)"});
			}
			}



			if (bullowned < 1) {
				$("#jessie").css({"filter":"grayscale(100%)"});
				lockedStats("#jessie","???","???","???");
			} else {
			var jessiecostabbr = abbreviate(parseInt(jessiecost), 2, 2, false);
			unlockedStats("#jessie",jessieowned,jessiecostabbr,"20");
			if (jessiecost <= money) {
				$("#jessie").css({"filter":"grayscale(0%)"});
			} else {
				$("#jessie").css({"filter":"grayscale(70%)"});
			}
			}



			if (jessieowned < 1) {
				$("#brock").css({"filter":"grayscale(100%)"});
				lockedStats("#brock","???","???","???");
			} else {
			var brockcostabbr = abbreviate(parseInt(brockcost), 2, 2, false);
			unlockedStats("#brock",brockowned,brockcostabbr,"40");
			if (brockcost <= money) {
				$("#brock").css({"filter":"grayscale(0%)"});
			} else {
				$("#brock").css({"filter":"grayscale(70%)"});
			}
			}



			if (brockowned < 1) {
				$("#dynamike").css({"filter":"grayscale(100%)"});
				lockedStats("#dynamike","???","???","???");
			} else {
			var dynamikecostabbr = abbreviate(parseInt(dynamikecost), 2, 2, false);
			unlockedStats("#dynamike",dynamikeowned,dynamikecostabbr,"100");
			if (dynamikecost <= money) {
				$("#dynamike").css({"filter":"grayscale(0%)"});
			} else {
				$("#dynamike").css({"filter":"grayscale(70%)"});
			}
			}



			if (dynamikeowned < 1) {
				$("#bo").css({"filter":"grayscale(100%)"});
				lockedStats("#bo","???","???","???");
			} else {
			var bocostabbr = abbreviate(parseInt(bocost), 2, 2, false);
			unlockedStats("#bo",boowned,bocostabbr,"200");
			if (bocost <= money) {
				$("#bo").css({"filter":"grayscale(0%)"});
			} else {
				$("#bo").css({"filter":"grayscale(70%)"});
			}
			}



			if (boowned < 1) {
				$("#elprimo").css({"filter":"grayscale(100%)"});
				lockedStats("#elprimo","???","???","???");
			} else {
			var elprimocostabbr = abbreviate(parseInt(elprimocost), 2, 2, false);
			unlockedStats("#elprimo",elprimoowned,elprimocostabbr,"1.00k");
			if (elprimocost <= money) {
				$("#elprimo").css({"filter":"grayscale(0%)"});
			} else {
				$("#elprimo").css({"filter":"grayscale(70%)"});
			}
			}



			if (elprimoowned < 1) {
				$("#barley").css({"filter":"grayscale(100%)"});
				lockedStats("#barley","???","???","???");
			} else {
			var barleycostabbr = abbreviate(parseInt(barleycost), 2, 2, false);
			unlockedStats("#barley",barleyowned,barleycostabbr,"3.00k");
			if (barleycost <= money) {
				$("#barley").css({"filter":"grayscale(0%)"});
			} else {
				$("#barley").css({"filter":"grayscale(70%)"});
			}
			}



			if (barleyowned < 1) {
				$("#poco").css({"filter":"grayscale(100%)"});
				lockedStats("#poco","???","???","???");
			} else {
			var pococostabbr = abbreviate(parseInt(pococost), 2, 2, false);
			unlockedStats("#poco",pocoowned,pococostabbr,"5.00k");
			if (pococost <= money) {
				$("#poco").css({"filter":"grayscale(0%)"});
			} else {
				$("#poco").css({"filter":"grayscale(70%)"});
			}
			}



			if (pocoowned < 1) {
				$("#rosa").css({"filter":"grayscale(100%)"});
				lockedStats("#rosa","???","???","???");
			} else {
			var rosacostabbr = abbreviate(parseInt(rosacost), 2, 2, false);
			unlockedStats("#rosa",rosaowned,rosacostabbr,"8.50k");
			if (rosacost <= money) {
				$("#rosa").css({"filter":"grayscale(0%)"});
			} else {
				$("#rosa").css({"filter":"grayscale(70%)"});
			}
			}


			if (rosaowned < 1) {
				$("#rico").css({"filter":"grayscale(100%)"});
				lockedStats("#rico","???","???","???");
			} else {
			var ricocostabbr = abbreviate(parseInt(ricocost), 2, 2, false);
			unlockedStats("#rico",ricoowned,ricocostabbr,"50.00k");
			if (ricocost <= money) {
				$("#rico").css({"filter":"grayscale(0%)"});
			} else {
				$("#rico").css({"filter":"grayscale(70%)"});
			}
			}


			if (ricoowned < 1) {
				$("#darryl").css({"filter":"grayscale(100%)"});
				lockedStats("#darryl","???","???","???");
			} else {
			$(".prestigewrap").css({"visibility":"visible"});
			localStorage.setItem("knowprestige",1);
			var darrylcostabbr = abbreviate(parseInt(darrylcost), 2, 2, false);
			unlockedStats("#darryl",darrylowned,darrylcostabbr,"80.00k");
			if (darrylcost <= money) {
				$("#darryl").css({"filter":"grayscale(0%)"});
			} else {
				$("#darryl").css({"filter":"grayscale(70%)"});
			}
			}



			if (darrylowned < 1) {
				$("#penny").css({"filter":"grayscale(100%)"});
				lockedStats("#penny","???","???","???");
			} else {
			var pennycostabbr = abbreviate(parseInt(pennycost), 2, 2, false);
			unlockedStats("#penny",pennyowned,pennycostabbr,"150.00k");
			if (pennycost <= money) {
				$("#penny").css({"filter":"grayscale(0%)"});
			} else {
				$("#penny").css({"filter":"grayscale(70%)"});
			}
			}
		}

	function lockedStats(name) {
		$(name + "level").text("???");
		$(name + "cost").text("???");
		$(name + "cps").text("???");
	}

	function unlockedStats(name,level,cost,cps) {
		$(name + "level").text(level);
		$(name + "cost").text(cost);
		$(name + "cps").text(cps);
	}

	function updatemoney() {
		var money = parseInt(localStorage.getItem('money'));
		var abbrmoney = abbreviate(money, 2, 2, false);
			$("#currentmoney").text(abbrmoney);
	}