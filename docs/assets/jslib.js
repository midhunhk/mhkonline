/* (c) 2006 Centrum inc Software Solutions R & D Team */
var d = document;
function gebid(id){	return d.getElementById(id);}
function setImage(imgName,imgSrc){// Usage : setImage('imageName','path_to_file');
  if (d.images)  {
    if (imgSrc != "none") d.images[imgName].src = imgSrc;
  }
}
function getRandNum(limit){
	return(Math.round( (limit-1) * Math.random()) + 1) ;/*Round the number between 1 & limit */
}
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    d.MM_pgW=innerWidth; d.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=d.MM_pgW || innerHeight!=d.MM_pgH) location.reload();
}
MM_reloadPage(true);

function simplePreload(){ 	//USAGE simplePreload( '01.gif', '02.gif' ); 
  var args = simplePreload.arguments;
  d.imageArray = new Array(args.length);
  for(var i=0; i<args.length; i++)  {
    d.imageArray[i] = new Image;
    d.imageArray[i].src = args[i];
  }
}
/* AJAX Routine*/
var loadedobjects="";
var rootdomain="http://"+window.location.hostname;
function ajaxpage(url, containerid){
	var page_request = false;
	if (window.XMLHttpRequest) // if Mozilla, Safari etc
		page_request = new XMLHttpRequest()
	else if (window.ActiveXObject){ // if IE
		try {page_request = new ActiveXObject("Msxml2.XMLHTTP")}
		catch (e){
			try{page_request = new ActiveXObject("Microsoft.XMLHTTP")}
			catch (e){}
		}
	}
	else return false
	page_request.onreadystatechange=function(){
		loadpage(page_request, containerid)
	}
page_request.open('GET', url, true)
page_request.send(null)
}
function loadpage(page_request, containerid){
if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
gebid(containerid).innerHTML=page_request.responseText
}
function loadobjs(){
if (!gebid)
return
for (i=0; i<arguments.length; i++){
var file=arguments[i]
var fileref=""
if (loadedobjects.indexOf(file)==-1){ //Check to see if this object has not already been added to page before proceeding
if (file.indexOf(".js")!=-1){ //If object is a js file
fileref=document.createElement('script')
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", file);
}
else if (file.indexOf(".css")!=-1){ //If object is a css file
fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", file);
}}
if (fileref!=""){
document.getElementsByTagName("head").item(0).appendChild(fileref)
loadedobjects+=file+" " //Remember this object as being already added to page
}}}
/* end ajax */
