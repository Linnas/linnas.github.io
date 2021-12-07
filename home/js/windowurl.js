function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串  
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

function nav(e) {
	switch (e.action) {
		case "index":
			navcurr(0)
			break;
		case "research":
			navcurr(1)
			break;
		case "people":
			navcurr(2)
			break;
		case "publication":
			navcurr(3)
			break;
		case "contact":
			navcurr(4)
			break;
		case "newslist":
			navcurr(5)
			break;
		case "newsdetails":
			navcurr(5)
			break;
		case "protocolonlinedata":
			navcurr(6)
			break;
		case "lifelist":
			navcurr(7)
			break;
		case "lifedetails":
			navcurr(7)
			break;
		default:
			break;
	}
}

function navcurr(e) {
	$(".nav li").eq(e).addClass("curr").siblings().removeClass("curr");
}
nav(GetRequest())
