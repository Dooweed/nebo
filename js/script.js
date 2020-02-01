/*MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--MENU--*/
var menuColumnar = document.getElementById("menuColumnar"),
	menuSwitcherShow = document.getElementById("menuSwitcher-show"),
	menuSwitcherHide = document.getElementById("menuSwitcher-hide");

menuSwitcherShow.addEventListener("click", menuShow);
menuSwitcherHide.addEventListener("click", menuHide);
function menuShow(){
	menuColumnar.style.display = "block";
	menuSwitcherHide.style.display = "block";
	menuSwitcherShow.style.display = "none";
};
function menuHide(){
	menuColumnar.style.display = "none";
	menuSwitcherHide.style.display = "none";
	menuSwitcherShow.style.display = "block";
}
/*--------------------------------------------------------------------------------------------------------*/
/*-TITLE-IMAGES---TITLE-IMAGES---TITLE-IMAGES---TITLE-IMAGES---TITLE-IMAGES---TITLE-IMAGES---TITLE-IMAGES-*/
var columnImg1 = document.getElementById("column_1_img-1"),
	columnImg2 = document.getElementById("column_1_img-2");
showColumnImg1();
function showColumnImg1(){
	columnImg1.style.display = "block";
	columnImg2.style.display = "none";
	setTimeout(showColumnImg2, 6000);
};
function showColumnImg2(){
	columnImg1.style.display = "none";
	columnImg2.style.display = "block";
	setTimeout(showColumnImg1, 6000);
};
/*--------------------------------------------------------------------------------------------------------*/
/*----CAROUSEL_1----CAROUSEL_1----CAROUSEL_1----CAROUSEL_1----CAROUSEL_1----CAROUSEL_1----CAROUSEL_1----*/
var	blockFourth1 = document.getElementById("block_4-1"),
	blockFourth2 = document.getElementById("block_4-2"),
	arrowPrev4 = document.getElementById("arrowPrev_4"),
	arrowNext4 = document.getElementById("arrowNext_4"),
	var4 = 1;
showBlockFourth1();

arrowPrev4.addEventListener("click", showPrev4);
arrowNext4.addEventListener("click", showNext4);


function showPrev4(){
	var4--;
	clearTimeout(carouselTimeout4);
	if (var4 == 1){
		showBlockFourth1();
	}
	if (var4 == 2){
		showBlockFourth2();
	}
	if (var4 == 0){
		var4 = 3;
		showPrev4();
	}
};
function showNext4(){
	var4++;
	clearTimeout(carouselTimeout4);
	if (var4 == 1){
		showBlockFourth1();
	}
	if (var4 == 2){
		showBlockFourth2();
	}
	if (var4 == 3){
		var4 = 0;
		showNext4();
	}
}
function showBlockFourth1(){
	blockFourth1.style.display = "block";
	blockFourth2.style.display = "none";
	carouselTimeout4 = setTimeout(showNext4, 5000);
};
function showBlockFourth2(){
	blockFourth1.style.display = "none";
	blockFourth2.style.display = "block";
	carouselTimeout4 = setTimeout(showNext4, 5000);
};
/*--------------------------------------------------------------------------------------------------------*/
/*----CAROUSEL_2----CAROUSEL_2----CAROUSEL_2----CAROUSEL_2----CAROUSEL_2----CAROUSEL_2----CAROUSEL_2----*/
var blockFifth1 = document.getElementById("block_5-1"),
    blockFifth2 = document.getElementById("block_5-2"),
    arrowPrev5 = document.getElementById("arrowPrev_5"),
    arrowNext5 = document.getElementById("arrowNext_5"),
    var5 = 1;
showBlockFifth1();

arrowPrev5.addEventListener("click", showPrev5);
arrowNext5.addEventListener("click", showNext5);


function showPrev5(){
    var5--;
    clearTimeout(carouselTimeout5);
    if (var5 == 1){
        showBlockFifth1();
    }
    if (var5 == 2){
        showBlockFifth2();
    }
    if (var5 == 0){
        var5 = 3;
        showPrev5();
    }
};
function showNext5(){
    var5++;
    clearTimeout(carouselTimeout5);
    if (var5 == 1){
        showBlockFifth1();
    }
    if (var5 == 2){
        showBlockFifth2();
    }
    if (var5 == 3){
        var5 = 0;
        showNext5();
    }
}
function showBlockFifth1(){
    blockFifth1.style.display = "block";
    blockFifth2.style.display = "none";
    carouselTimeout5 = setTimeout(showNext5, 5000);
};
function showBlockFifth2(){
    blockFifth1.style.display = "none";
    blockFifth2.style.display = "block";
    carouselTimeout5 = setTimeout(showNext5, 5000);
};
/*--------------------------------------------------------------------------------------------------------*/
/*----CAROUSEL_3----CAROUSEL_3----CAROUSEL_3----CAROUSEL_3----CAROUSEL_3----CAROUSEL_3----CAROUSEL_3----*/
var blockSixth1 = document.getElementById("block_6-1"),
    blockSixth2 = document.getElementById("block_6-2"),
    arrowPrev6 = document.getElementById("arrowPrev_6"),
    arrowNext6 = document.getElementById("arrowNext_6"),
    var6 = 1;
showBlockSixth1();

arrowPrev6.addEventListener("click", showPrev6);
arrowNext6.addEventListener("click", showNext6);


function showPrev6(){
    var6--;
    clearTimeout(carouselTimeout6);
    if (var6 == 1){
        showBlockSixth1();
    }
    if (var6 == 2){
        showBlockSixth2();
    }
    if (var6 == 0){
        var6 = 3;
        showPrev6();
    }
};
function showNext6(){
    var6++;
    clearTimeout(carouselTimeout6);
    if (var6 == 1){
        showBlockSixth1();
    }
    if (var6 == 2){
        showBlockSixth2();
    }
    if (var6 == 3){
        var6 = 0;
        showNext6();
    }
}
function showBlockSixth1(){
    blockSixth1.style.display = "block";
    blockSixth2.style.display = "none";
    carouselTimeout6 = setTimeout(showNext6, 5000);
};
function showBlockSixth2(){
    blockSixth1.style.display = "none";
    blockSixth2.style.display = "block";
    carouselTimeout6 = setTimeout(showNext6, 5000);
};
/*--------------------------------------------------------------------------------------------------------*/


/*----CAROUSEL_4----CAROUSEL_4----CAROUSEL_4----CAROUSEL_4----CAROUSEL_4----CAROUSEL_4----CAROUSEL_4----*/
var blockEleventh1 = document.getElementById("block_11-1"),
    blockEleventh2 = document.getElementById("block_11-2"),
    arrowPrev11 = document.getElementById("arrowPrev_11"),
    arrowNext11 = document.getElementById("arrowNext_11"),
    var11 = 1;
showBlockEleventh1();

arrowPrev11.addEventListener("click", showPrev11);
arrowNext11.addEventListener("click", showNext11);


function showPrev11(){
    var11--;
    clearTimeout(carouselTimeout11);
    if (var11 == 1){
        showBlockEleventh1();
    }
    if (var11 == 2){
        showBlockEleventh2();
    }
    if (var11 == 0){
        var11 = 3;
        showPrev11();
    }
};
function showNext11(){
    var11++;
    clearTimeout(carouselTimeout11);
    if (var11 == 1){
        showBlockEleventh1();
    }
    if (var11 == 2){
        showBlockEleventh2();
    }
    if (var11 == 3){
        var11 = 0;
        showNext11();
    }
}
function showBlockEleventh1(){
    blockEleventh1.style.display = "block";
    blockEleventh2.style.display = "none";
    carouselTimeout11 = setTimeout(showNext11, 5000);
};
function showBlockEleventh2(){
    blockEleventh1.style.display = "none";
    blockEleventh2.style.display = "block";
    carouselTimeout11 = setTimeout(showNext11, 5000);
};
/*--------------------------------------------------------------------------------------------------------*/





/*----CHARTERS----CHARTERS----CHARTERS----CHARTERS----CHARTERS----CHARTERS----CHARTERS----CHARTERS----*/
var arrowPrev9$1 = document.getElementById("arrowPrev9-1"),
	arrowNext9$1 = document.getElementById("arrowNext9-1"),
	blockNineth1 = document.getElementById("block1_9-1"),
	blockNineth2 = document.getElementById("block1_9-2"),
	var9 = 1;

showBlockNineth1();

arrowPrev9$1.addEventListener("click", showPrev9);
arrowNext9$1.addEventListener("click", showNext9);


function showPrev9(){
    var9--;
    clearTimeout(carouselTimeout9);
    if (var9 == 1){
        showBlockNineth1();
    }
    if (var9 == 2){
        showBlockNineth2();
    }
    if (var9 == 0){
        var9 = 3;
        showPrev9();
    }
};
function showNext9(){
    var9++;
    clearTimeout(carouselTimeout9);
    if (var9 == 1){
        showBlockNineth1();
    }
    if (var9 == 2){
        showBlockNineth2();
    }
    if (var9 == 3){
        var9 = 0;
        showNext9();
    }
}
function showBlockNineth1(){
    blockNineth1.style.display = "block";
    blockNineth2.style.display = "none";
    carouselTimeout9 = setTimeout(showNext9, 3000);
};
function showBlockNineth2(){
    blockNineth1.style.display = "none";
    blockNineth2.style.display = "block";
    carouselTimeout9 = setTimeout(showNext9, 3000);
};












var arrowPrev9$2 = document.getElementById("arrowPrev9-2"),
    arrowNext9$2 = document.getElementById("arrowNext9-2"),
    blockNineth1$2 = document.getElementById("block2_9-1"),
    blockNineth2$2 = document.getElementById("block2_9-2"),
    blockNineth3$2 = document.getElementById("block2_9-3"),
    var9$2 = 1;

showBlockNineth1$2();

arrowPrev9$2.addEventListener("click", showPrev9$2);
arrowNext9$2.addEventListener("click", showNext9$2);


function showPrev9$2(){
    var9$2--;
    clearTimeout(carouselTimeout9$2);
    if (var9$2 == 1){
        showBlockNineth1$2();
    }
    if (var9$2 == 2){
        showBlockNineth2$2();
    }
    if (var9$2 == 3){
        showBlockNineth3$2();
    }
    if (var9$2 == 0){
        var9$2 = 4;
        showPrev9$2();
    }
};
function showNext9$2(){
    var9$2++;
    clearTimeout(carouselTimeout9$2);
    if (var9$2 == 1){
        showBlockNineth1$2();
    }
    if (var9$2 == 2){
        showBlockNineth2$2();
    }
    if (var9$2 == 3){
        showBlockNineth3$2();
    }
    if (var9$2 == 4){
        var9$2 = 0;
        showNext9$2();
    }
};
function showBlockNineth1$2(){
    blockNineth1$2.style.display = "block";
    blockNineth2$2.style.display = "none";
    blockNineth3$2.style.display = "none";
    carouselTimeout9$2 = setTimeout(showNext9$2, 3000);
};
function showBlockNineth2$2(){
    blockNineth1$2.style.display = "none";
    blockNineth2$2.style.display = "block";
    blockNineth3$2.style.display = "none";
    carouselTimeout9$2 = setTimeout(showNext9$2, 3000);
};
function showBlockNineth3$2(){
    blockNineth1$2.style.display = "none";
    blockNineth2$2.style.display = "none";
    blockNineth3$2.style.display = "block";
    carouselTimeout9$2 = setTimeout(showNext9$2, 3000);
};
/*--------------------------------------------------------------------------------------------------------*/


/*----COMMENTS----COMMENTS----COMMENTS----COMMENTS----COMMENTS----COMMENTS----COMMENTS----COMMENTS----*/
var blockTwelfth1 = document.getElementById("block_12-1"),
	blockTwelfth2 = document.getElementById("block_12-2"),
	blockTwelfth3 = document.getElementById("block_12-3"),
	blockTwelfth4 = document.getElementById("block_12-4"),
	blockTwelfth5 = document.getElementById("block_12-5"),
	blockTwelfth6 = document.getElementById("block_12-6"),
	dot1 = document.getElementById("dot_1"),
	dot2 = document.getElementById("dot_2"),
	dot3 = document.getElementById("dot_3"),
	dot4 = document.getElementById("dot_4"),
	var12 = 1;
carouselTimeout12 = setTimeout(showNext12 , 2000);

dot1.addEventListener("click", teleportBlockTwelfth1);
dot2.addEventListener("click", teleportBlockTwelfth2);
dot3.addEventListener("click", teleportBlockTwelfth3);
dot4.addEventListener("click", teleportBlockTwelfth4);

function showNext12(){
    var12++;
    clearTimeout(carouselTimeout12);
    if (var12 == 2){
        showBlockTwelfth2();
        carouselTimeout12 = setTimeout(showNext12 , 4000);
    }
    if (var12 == 3){
        showBlockTwelfth3();
        carouselTimeout12 = setTimeout(showNext12 , 4000);
    }
    if (var12 == 4){
        showBlockTwelfth4();
        carouselTimeout12 = setTimeout(showNext12 , 4000);
    }
    
    if (var12 == 5){
        var12 = 4;
        showPrev12();
    }
};
function showPrev12(){
    var12--;
    clearTimeout(carouselTimeout12);
    if (var12 == 1){
        showBlockTwelfth1Rev();
        carouselTimeout12 = setTimeout(showPrev12 , 4000);
    }
    if (var12 == 2){
        showBlockTwelfth2Rev();
        carouselTimeout12 = setTimeout(showPrev12 , 4000);
    }
    if (var12 == 3){
        showBlockTwelfth3Rev();
        carouselTimeout12 = setTimeout(showPrev12 , 4000);
    }
    if (var12 == 0){
        var12 = 1;
        showNext12();
    }
};

function clearDots12(){
    dot1.style.background = "#ebebeb";
    dot2.style.background = "#ebebeb";
    dot3.style.background = "#ebebeb";
    dot4.style.background = "#ebebeb";
}
function clearAll12(){
    clearTimeout(carouselTimeout12);
	blockTwelfth1.style.display = "none";
	blockTwelfth2.style.display = "none";
	blockTwelfth3.style.display = "none";
	blockTwelfth4.style.display = "none";
	blockTwelfth5.style.display = "none";
	blockTwelfth6.style.display = "none";
    clearDots12();
};


function teleportBlockTwelfth1(){
	var12 = 1;
	clearAll12();
    dot1.style.background = "#828282";
	blockTwelfth1.style.display = "block";
	blockTwelfth2.style.display = "block";
	blockTwelfth3.style.display = "block";
	carouselTimeout12 = setTimeout(showNext12 , 4000);
};
function teleportBlockTwelfth2(){
	var12 = 2;
	clearAll12();
    dot2.style.background = "#828282";
	blockTwelfth2.style.display = "block";
	blockTwelfth3.style.display = "block";
	blockTwelfth4.style.display = "block";
	carouselTimeout12 = setTimeout(showNext12 , 4000);
};
function teleportBlockTwelfth3(){
	var12 = 3;
	clearAll12();
    dot3.style.background = "#828282";
	blockTwelfth3.style.display = "block";
	blockTwelfth4.style.display = "block";
	blockTwelfth5.style.display = "block";
	carouselTimeout12 = setTimeout(showNext12 , 4000);
};
function teleportBlockTwelfth4(){
	var12 = 4;
	clearAll12();
    dot4.style.background = "#828282";
	blockTwelfth4.style.display = "block";
	blockTwelfth5.style.display = "block";
	blockTwelfth6.style.display = "block";
	carouselTimeout12 = setTimeout(showNext12 , 4000);
};


function showBlockTwelfth2(){
    clearDots12()
    dot2.style.background = "#828282";
	blockTwelfth1.style.display = "none";
    blockTwelfth4.style.display = "block";
};
function showBlockTwelfth3(){
    clearDots12()
    dot3.style.background = "#828282";
	blockTwelfth2.style.display = "none";
    blockTwelfth5.style.display = "block";
};
function showBlockTwelfth4(){
    clearDots12()
    dot4.style.background = "#828282";
	blockTwelfth3.style.display = "none";
    blockTwelfth6.style.display = "block";
};


function showBlockTwelfth1Rev(){
    clearDots12()
    dot1.style.background = "#828282";
    blockTwelfth4.style.display = "none";
    blockTwelfth1.style.display = "block";
};
function showBlockTwelfth2Rev(){
    clearDots12()
    dot2.style.background = "#828282";
    blockTwelfth5.style.display = "none";
    blockTwelfth2.style.display = "block";
};
function showBlockTwelfth3Rev(){
    clearDots12()
    dot3.style.background = "#828282";
    blockTwelfth6.style.display = "none";
    blockTwelfth3.style.display = "block";
};
/*--------------------------------------------------------------------------------------------------------*/

/*----COMMENTS_MINI----COMMENTS_MINI----COMMENTS_MINI----COMMENTS_MINI----COMMENTS_MINI----COMMENTS_MINI----*/
var blockTwelfthMini1 = document.getElementById("block_12-1-mini"),
    blockTwelfthMini2 = document.getElementById("block_12-2-mini"),
    blockTwelfthMini3 = document.getElementById("block_12-3-mini"),
    blockTwelfthMini4 = document.getElementById("block_12-4-mini"),
    blockTwelfthMini5 = document.getElementById("block_12-5-mini"),
    blockTwelfthMini6 = document.getElementById("block_12-6-mini"),
    dotMini1 = document.getElementById("dot_1-mini"),
    dotMini2 = document.getElementById("dot_2-mini"),
    dotMini3 = document.getElementById("dot_3-mini"),
    dotMini4 = document.getElementById("dot_4-mini"),
    dotMini5 = document.getElementById("dot_5-mini"),
    dotMini6 = document.getElementById("dot_6-mini"),
    varMini12 = 1;
carouselMiniTimeout12 = setTimeout(showNextMini , 3000);


dotMini1.addEventListener("click", showBlockTwelfthMini1);
dotMini2.addEventListener("click", showBlockTwelfthMini2);
dotMini3.addEventListener("click", showBlockTwelfthMini3);
dotMini4.addEventListener("click", showBlockTwelfthMini4);
dotMini5.addEventListener("click", showBlockTwelfthMini5);
dotMini6.addEventListener("click", showBlockTwelfthMini6);


function clearDotnavMini12(){
    dotMini1.style.background = "#ebebeb";
    dotMini2.style.background = "#ebebeb";
    dotMini3.style.background = "#ebebeb";
    dotMini4.style.background = "#ebebeb";
    dotMini5.style.background = "#ebebeb";
    dotMini6.style.background = "#ebebeb";
}

function showNextMini(){
    varMini12++;
    clearTimeout(carouselMiniTimeout12);
    if (varMini12 == 1){
        showBlockTwelfthMini1();
        
    }
    if (varMini12 == 2){
        showBlockTwelfthMini2();
        
    }
    if (varMini12 == 3){
        showBlockTwelfthMini3();
        
    }
    if (varMini12 == 4){
        showBlockTwelfthMini4();
        
    }
    if (varMini12 == 5){
        showBlockTwelfthMini5();
        
    }
    if (varMini12 == 6){
        showBlockTwelfthMini6();
        
    }
    if (varMini12 == 7){
        varMini12 = 0;
        showNextMini();
    }
};

function clearBlockTwelfthMini(){
    blockTwelfthMini1.style.display = "none";
    blockTwelfthMini2.style.display = "none";
    blockTwelfthMini3.style.display = "none";
    blockTwelfthMini4.style.display = "none";
    blockTwelfthMini5.style.display = "none";
    blockTwelfthMini6.style.display = "none";
}
function showBlockTwelfthMini1(){as
    clearDotnavMini12();
    clearBlockTwelfthMini();
    varMini12 = 1;
    dotMini1.style.background = "#828282";
    blockTwelfthMini1.style.display = "block";
    carouselMiniTimeout12 = setTimeout(showNextMini , 3000);
};
function showBlockTwelfthMini2(){
    clearDotnavMini12();
    clearBlockTwelfthMini();
    varMini12 = 2;
    dotMini2.style.background = "#828282";
    blockTwelfthMini2.style.display = "block";
    carouselMiniTimeout12 = setTimeout(showNextMini , 3000);
};
function showBlockTwelfthMini3(){
    clearDotnavMini12();
    clearBlockTwelfthMini();
    varMini12 = 3;
    dotMini3.style.background = "#828282";
    blockTwelfthMini3.style.display = "block";
    carouselMiniTimeout12 = setTimeout(showNextMini , 3000);
};
function showBlockTwelfthMini4(){
    clearDotnavMini12();
    clearBlockTwelfthMini();
    varMini12 = 4;
    dotMini4.style.background = "#828282";
    blockTwelfthMini4.style.display = "block";
    carouselMiniTimeout12 = setTimeout(showNextMini , 3000);
};
function showBlockTwelfthMini5(){
    clearDotnavMini12();
    clearBlockTwelfthMini();
    varMini12 = 5;
    dotMini5.style.background = "#828282";
    blockTwelfthMini5.style.display = "block";
    carouselMiniTimeout12 = setTimeout(showNextMini , 3000);
};
function showBlockTwelfthMini6(){
    clearDotnavMini12();
    clearBlockTwelfthMini();
    varMini12 = 6;
    dotMini6.style.background = "#828282";
    blockTwelfthMini6.style.display = "block";
    carouselMiniTimeout12 = setTimeout(showNextMini , 3000);
};
/*--------------------------------------------------------------------------------------------------------*/