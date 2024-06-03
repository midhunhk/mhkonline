/*////////////////////////////////////////////////////////	
// Js implementation to read card names	`				//
// Script : (C) 2006 Centrum inc Software Solutions.	//
// contact: midhunhk@gmail.com							//
////////////////////////////////////////////////////////*/
var dflt_theme="BARDWH"
var black = "#000000";
var blue  = "#0066FF";
var brown = "#990000";
var cream = "#FFFFD5";
var violet= "#9933FF";
var white = "#FFFFFF";
var red   = "#FF3300";
var orange= "#FF6600";
var pink  = "#FF66FF";
	
function getCard(){
	var srch = location.search;	//	Gets the card id name after file name
	srch = srch.toUpperCase();
	var swfn = srch.substr(1);	//	Removes the ? mark
	if(!swfn){	// The user has accessed the page without any card id 	eg: cardviewer.html
		swfn = "default";
		setStyle(dflt_theme);
	}
	else{	// Ok, here the card id has been got						eg: cardviewer.html?CARDIDHERE
		setStyle(swfn);
	}
var code ='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '+		'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" ' +
			'width="550" height="400">' +
            '<param name="movie" value="' + swfn +'.swf" />' +
            '<param name="quality" value="high" />' +
            '<embed src="' + swfn +'.swf" quality="high"' +
	'pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"' +
	'width="550" height="400"></embed>  </object>';
	document.getElementById("daswf").innerHTML=code;
}
/* Fn that sets styles of the cardviewer.html as per the card id */
function setStyle(id)
{	
	var bgclr  = id.substring(0,2);
	var ttlclr = id.substring(2,4);
	var txclr  = id.substring(4,6);
//Background Color
	if(bgclr=="BA") bgclr = black;
	if(bgclr=="BL") bgclr = blue;
	if(bgclr=="BW") bgclr = brown;
	if(bgclr=="CM") bgclr = cream;
	if(bgclr=="WH") bgclr = white;
	if(bgclr=="VI") bgclr = violet;
	if(bgclr=="RD") bgclr = red;
	if(bgclr=="PK") bgclr = pink;
//Title Color	
	if(ttlclr=="RD") ttlclr = red;
	if(ttlclr=="VI") ttlclr = violet;
	if(ttlclr=="BL") ttlclr = blue;
	if(ttlclr=="BW") ttlclr = brown;
	if(ttlclr=="WH") ttlclr = white;
	if(ttlclr=="VI") ttlclr = violet;
	if(ttlclr=="OR") ttlclr = orange;
//Text Color
	if(txclr=="VI") txclr = violet;
	if(txclr=="BW") txclr = brown;
	if(txclr=="WH") txclr = white;
	if(txclr=="PK") txclr = pink;
/* Setting the colors */
	document.bgColor = bgclr;								//	Page Background color
	document.getElementById("hdr").style.color = ttlclr;	//	Title Item
	document.fgColor = txclr;								//	Text in the body color
}