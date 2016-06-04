
var gif_i = 0,
    line_i = 0,
    poem_i = 0;

var words = [],
    titles = [];

var width = $(window).width(),
	height = $(window).height();

//SETUP
$('#content').css({
	'position': 'absolute',
	'left': width/2-200,
	'top': height/2-70,
	'font-size':24+'px',
	'cursor':'pointer'
})

//LOAD Text
$.getJSON( "assets/words.json", function( data ) {
    words = data;
    titles = Object.keys(words);

	//MOUSE MOVE
	$(document).mousemove(function(e){ updateProfession();})
	document.addEventListener('touchmove', function(e) { updateProfession();}, false);
 });

//CLICK
$(document).click(function(e){
	console.log('but you don\'t need me')
	displayConcession();
})

function displayConcession() {
	var d = $('<div>');
	d.css({
		'position':'absolute',
	});
	d.appendTo($('#content'));
	d.html("but you don't need that");
}

function updateProfession() {
	$('#content').html("i could protect u from "+genNoun());
}

function updateSwatch() {
	$('#swatch').css('background-color','#' + Math.floor(Math.random()*16777215).toString(16));
}

function genTitle() {
	var code = 0 | Math.random() * 1024;
	return String.fromCharCode(20 + code);
}

function genNoun() {
	var n = words['nouns'],
		i1 = Math.floor(Math.random() * n.length);
	return n[i1];
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
