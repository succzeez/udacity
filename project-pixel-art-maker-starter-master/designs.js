// Select color input
// Select size input
var height,width,color;


$('#sizePicker').submit(function(event){
"use strict";
 event.preventDefault();
height=$('#inputHeight').val();
width=$('#inputWeight').val();
makeGrid(height, width);
 


});

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {
	"use strict";
// Your code goes here!
$('tr').remove();
 
for (var i=1;i<= x;i++){
	$('#pixelCanvas').append('<tr id=table'+ i +'></tr>');
for (var j=1 ;j<=y ;j++){
	$('#table'+ i).append('<td></td>');
	}	
	}
//add color to each cells when clicked 
$('td').click(function addColor() {
	color=$('#colorPicker').val();
	
	if ($(this).attr('style')){
		$(this).removeAttr('style')
		} else {
			$(this).attr('style' , 'background-color:' + color);
			}
	})



}
