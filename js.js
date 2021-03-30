function parsSheet(dt,nm) {
	dt.then(function(result) {
		let jsn = JSON.parse(result).feed
		
		    let data = jsn.entry;
			let i;
			for (i = 0; i < data.length; i++) {
			  let p1 = data[i]
			  let cn = 0;
			  let s = "";
				for (y in p1) {
					if (y.includes("gsx$")) {
						cn++;
						s += "<td>"+data[i][y]["$t"]+"</td>";
					}
				};
			  let stl = "";
			  if (cn == 1){
				  stl = 'class="row_one"';
			  };
			  
				console.log(nm);
			  document.getElementById(jsn["title"]["$t"]).innerHTML +=
				"<tr "+stl+">" + s + "</tr>";
			  
			}
		return;
	})

};
let ptc = ["pricetable_electric", "pricetable_santechnic", "pricetable_otoplenie", "pricetable_prochee"];
let ptx = [];
let ptn = 0;

$(document).ready(function(){

for (i in ptc){
	ptn++;
	fetch("https://spreadsheets.google.com/feeds/list/1mFf1J1t639tSUED3dOyFTfbBtNUwS6VS0kIsVbV1fRQ/"+ptn+"/public/values?alt=json").then( function(response){ parsSheet(response.text(),ptc[i])} );
	};
});



function priceTabs(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



var velocity = 0.5;

function update(){ 
var pos = $(window).scrollTop(); 
var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
$('.container').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.width();
    $(this).css('backgroundPosition', '70%' + '' + Math.round( scrollPercent*5 +60)+'%'); 
   }); 
   };
 $(window).bind('scroll', update);