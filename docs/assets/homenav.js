/* (c) 2006 Centrum inc Software Solutions R & D */
quotes = new Array();	//	Array to hold the random quotes displayed on the welcome screen
quotes[1] = 'Welcome to Mhkonline Revision Version 3';
quotes[2] = '\"Don\'t cross this field unless you can do it in 9.9s, the bull can do it in 10.\" - Sign at a Bison Ranch';
quotes[3] = '\"The light at the end of a tunnel may be an oncoming train.\" - Anon'
quotes[4] = '\"What ever you do will be insignificant, but it is very important that you do it.\" - Mahatma Gandhi';
quotes[5] = 'You only live once, but if you work it right, once is enough.';
quotes[6] = 'A horse may be coaxed to drink, but a pencil must be lead.';
quotes[7] = '3 out of 4 people make up 75% of the population.';
quotes[8] = '\"Anything that can go wrong will go wrong.\" - Murphy\'s Law';
quotes[9] = '\"The measure of life is its excellence and not its length.\" - Plato';
quotes[10] = '\"The empires of the future are the empires of the mind.\" - Winston Churchill';
quotes[11] = '\"What the mind can conceive and imagine, it can achieve.\" - Napolean';
quotes[12] = '\"Keep your face to the sunshine and you cannot see the darkness.\" - Helen Keller';
quotes[13] = 'Minds are like parachutes, they function only when they open.';
quotes[14] = 'Hard work never killed anybody. But why take any chances!';

/*Data for Random FMA */
names = new Array();		/* Creating the names array and populating it */
names[1] ='fma_en_main_7601.swf';
names[2] ='fma_en_main_7640.swf';
names[3] ='fma_en_main_7501.swf';

var fma_num = names.length-1;       /* The number of FMA's*/

simplePreload('images/tab_home_n.jpg','images/tab_ae_s.jpg','images/tab_dload_s.jpg','images/tab_info_s.jpg','images/tab_sols_s.jpg','images/tab_tuts_s.jpg');

function randomFma(){
var fma_now = names[getRandNum(fma_num)];

var code =
'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '+		'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" ' +
			'width="334" height="100"> ' +
            '<param name="movie" value="fma/' + fma_now +'" /> ' +
            '<param name="quality" value="high" /> ' +
            '<embed src="fma/' + fma_now +'" quality="high"' +
	'pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" ' +
	'width="334" height="100"></embed></object>';
return (code);
}
function checkBrowser() { 
    var b = navigator.appName
    if (b=="Netscape") this.b = "ns"
    else if (b=="Microsoft Internet Explorer") this.b = "ie"
    else this.b = "ie";
  
    this.v = parseInt(navigator.appVersion)
    this.ns = (this.b=="ns" && this.v==4)
    this.ns4 = (this.b=="ns" && this.v==4)
    this.ie = ((this.b=="ie" && this.v>=4)||(this.b=="ns" && this.v>=5))
    this.ie4 = (navigator.userAgent.indexOf('MSIE 4')>0)
    this.ie5 = (navigator.userAgent.indexOf('MSIE 5')>0)
    this.moz = (this.b=="ns" && this.v>=5)

    if (this.ie5) this.v = 5
    this.min = (this.ns||this.ie)

    if(!this.ns) this.ie=true;
}
is = new checkBrowser()
// Show/Hide script
function show(id) { 
    if (is.ns && document.layers[id]) document.layers[id].display = "inline"
    else if (is.ie4 && document.all[id]) document.all[id].style.display = "inline"
    else if (is.ie && document.getElementById(id)) document.getElementById(id).style.display = "inline"
}
function hide(id) {
    if (is.ns && document.layers[id]) document.layers[id].display = "none"
    else if (is.ie4 && document.all[id]) document.all[id].style.display = "none"
    else if (is.ie && document.getElementById(id)) document.getElementById(id).style.display = "none"
}
function hideall() {	//	Sets all the tab images to norm
hide('home'); hide('ae');
hide('dloads'); hide('info');
hide('sols'); hide('tuts');
setImage('tabn_home','images/tab_home_n.jpg');	 
setImage('tabn_ae','images/tab_ae_n.jpg');
setImage('tabn_dload','images/tab_dload_n.jpg');	 
setImage('tabn_info','images/tab_info_n.jpg');	 
setImage('tabn_sols','images/tab_sols_n.jpg');
setImage('tabn_tuts','images/tab_tuts_n.jpg');	 
}