/* index_to_tutorials project */
var sectionColors = new Array();
sectionColors['Index'] = '#99ccff';
sectionColors['Css']   = '#67fe33';
sectionColors['Ccpp'] = '#6699CC';
sectionColors['Flash'] ='#f28885';
sectionColors['Fireworks'] ='#ffff99';
sectionColors['Javascript'] ='#ff3366';


/* When the site is to be uploaded, use the second value */
	var tutsRoot  = "tutorials/";
//	var tutsRoot  = "http://www.geocities.com/mhkonline2/tutorials/";

function Tuts(t_section,t_title,t_link){	//	Constructor fn
	this.sectionName = t_section;
	this.titleName   = t_title;
	this.linkVal     = t_link;
}
var tuts_list = new Array();
tuts_list[0] = 'This is intentionally left Blank!';
tuts_list[1] = new Tuts('Css','Introduction to CSS','css\\css_introduction.html');
tuts_list[2] = new Tuts('Fireworks','Curved Text','fworks\\curved_text\\index.html');
tuts_list[3] = new Tuts('Flash','Circular Clockwise Animation using Masks ','flash\\circular_animation\\index.html');
tuts_list[4] = new Tuts('Fireworks','Glowing Sphere One','fworks\\glowing_sphere1\\index.html');
tuts_list[5] = new Tuts('Fireworks','Glowing Sphere Two','fworks\\glowing_sphere2\\index.html');
tuts_list[6] = new Tuts('C-Cpp Programs','Decimal to Hexadecimal','c_cpp\\programs\\deci_to_hex.html');
tuts_list[7] = new Tuts('Css','Image rollover with only css','css\\image_rollover_with_only_css\\index.html');
tuts_list[8] = new Tuts('Fireworks','Circular Text','fworks\\circular_text\\index.html');
tuts_list[9] = new Tuts('Flash','Simple Preloader','flash\\simple_preloader\\index.html');
tuts_list[10] = new Tuts('Flash','Percentage preloader','flash\\percentage_preloader\\index.html');
tuts_list[11] = new Tuts('Javascript','Day Calculator','javascript\\get_day.html');
tuts_list[12] = new Tuts('C-Cpp Programs','Get The Day','c_cpp\\programs\\get_day.html');
tuts_list[13] = new Tuts('C-Cpp Tutorials','Structures and Unions','c_cpp\\tutorials\\structures_and_unions.html');
tuts_list[14] = new Tuts('Flash','Glint Animation','flash\\glint_animation\\index.html');
tuts_list[15] = new Tuts('C-Cpp Tutorials','Linear & Binary Search','c_cpp\\tutorials\\searching_algorithms.html');