var addresses = "";
$('.copy_to_clipboard').each(function(i,v) { 
	addresses += '"'+ $(v).attr('onclick')
						.replace('window.prompt("Copy to clipboard: Ctrl+C, Enter", "','')
						.replace('");','')
						.replace(/\\n/g, '\r\n')
						+'"\r\n'; 
});
console.log(addresses);
