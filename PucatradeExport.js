var addresses = "";
var columnDelimiter = ',';
var recordDelimiter = '\r\n';
$('td:contains("Shipped Card")').each(function(i,v) { 
	var row = $(v).parent();
	var number = row.find('td:nth-child(1)').text().replace(/\s/g, '');
	var address =  row.find('.copy_to_clipboard')
					.attr('onclick')
					.replace('window.prompt("Copy to clipboard: Ctrl+C, Enter", "','')
					.replace('");','')
					.replace(/\\n/g, '\r\n');
	var card = row.find('td:nth-child(3) a.cl').text();
	addresses += (number + columnDelimiter + card + columnDelimiter + '"' + address + '"' + columnDelimiter + recordDelimiter);
});
console.log(addresses);
