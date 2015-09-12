function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#"+ "00000".substring(0, 6 - c.length) + c;
}

var names = $('td.member a:last-child');

for(var n = 1; n < names.length; n++)
{
	if(names[n].text == names[n-1].text)
	{
		var clr = intToRGB(hashCode(names[n].text));
		//console.log(clr);
		$(names[n]).parent().css('background-color', clr);
		$(names[n-1]).parent().css('background-color', clr);
	}
}
