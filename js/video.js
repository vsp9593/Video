function play(){
	url=document.getElementById("vdurl").value;
	var str=url.split("/");
	var src="https://www.youtube.com/embed/"+str[3]+"?autoplay=1";
	console.log(src);
	document.getElementById("plyr").src=src;
	document.getElementById("video").style.display="block";
}