
let recuar = function(){
	let getmenu = document.querySelector(".menu");
	let getInfo = document.querySelector(".informacoes");
	let getmenuP = document.querySelector(".barra-preta");
	let getFoto = document.querySelector(".foto");
	let getSeta = document.querySelector(".setaCima");

	getFoto.style.height = "0px";
	getmenu.style.top = "0px";
	getmenuP.style.height = "0px";
	getInfo.style.top = "110px";
	getSeta.style.height = "0px";
	

}
let avancar = function(){
	let getmenu = document.querySelector(".menu");
	let getInfo = document.querySelector(".informacoes");
	let getmenuP = document.querySelector(".barra-preta");
	let getFoto = document.querySelector(".foto");
	let getSeta = document.querySelector(".setaCima");

	getFoto.style.height = "240px";
	getmenu.style.top = "240px";
	getmenuP.style.height =  "240px";
	getInfo.style.top = "310px";
	getSeta.style.height = "50px";
	

}