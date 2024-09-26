function changeStyles(){
	let seasonChoice = document.querySelector('#pageTheme').value;
	let pagePath = "./CSS/"+seasonChoice;
	document.querySelector('#styleSheetChoice').href=pagePath;
};

function displayTime(){
	let theCurrTime = new Date();
	let theCurrTimeHours24 = theCurrTime.getHours();
	let theCurrTimePeriod = " PM"
	let theCurrTimeHours12 = theCurrTimeHours24 - 12;
	if (theCurrTimeHours24 == 24 || theCurrTimeHours24 < 12){
		theCurrTimeHours12 = theCurrTimeHours24;
		theCurrTimePeriod = " AM";
	}
	let theCurrTimeMinutes = theCurrTime.getMinutes();
	let theCurrTimeSeconds = theCurrTime.getSeconds();
	let theCurrTimeString = theCurrTimeHours12+":"+("0" + theCurrTimeMinutes).substr(-2)+":"+("0" + theCurrTimeSeconds).substr(-2)+" "+theCurrTimePeriod;				
	document.getElementById('timeDisplay').innerHTML=theCurrTimeString;
};

setInterval(displayTime, 1000);

function displayDate(){
	const theCurrDate = new Date();
	const theCurrDateString = (theCurrDate.getMonth()+1)+"/"+theCurrDate.getDate()+"/"+theCurrDate.getFullYear();	
	document.getElementById('dateDisplay').innerHTML=theCurrDateString;
	};

setInterval(displayDate, 1000);