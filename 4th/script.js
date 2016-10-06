$(document).ready(function () {
	$("td").click(function() {
		process_keyboardInput($(this).text());
	});
});

function process_keyboardInput(key) {
	str = $("#result").text();
	switch (key) {
		case "←": {
			if (str.length > 0 && str != "Infinity") { 
				nstr = str.substr(0, str.length-1);
				$("#result").text(nstr);
			}
			break;
		}
		case "CE": {
			$("#result").text("");
			break;
		}
		case "=": {
			try {
				$("#result").text(eval(str));
			}
			catch (e) {
				alert(e);
			}
			break;
		}
		case ".": {
			if (str.length <= 0 || str == "Infinity") {$("#result").text("0"+key);} 
			else {$("#result").text(str+key);}
			break;
		}
		default: {
			if (str == "Infinity") {$("#result").text("0"+key);}
			else { $("#result").text(str+key);}
			break;
		}
	}
}