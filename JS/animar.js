let cabecera = document.querySelectorAll(".cabecera");

function mostrarScroll(){
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < cabecera.length; i++){

		let alturaCabecera = cabecera[i].offsetTop + 20;
		if (alturaCabecera < scrollTop) {
			cabecera[i].style.opacity = 1;
		}
		else if(alturaCabecera = scrollTop) {
			cabecera[i].style.opacity = 0;
		}
	}
}
window.addEventListener('scroll', mostrarScroll);


let principal = document.querySelectorAll(".principal");

	function ocultarScroll(){
		let scrollTop = document.documentElement.scrollTop;
		for (var i = 0; i < principal.length; i++){

			let alturaPrincipal = principal[i].offsetTop;
			if (alturaPrincipal - 30 < scrollTop) {
				principal[i].style.opacity = 0;
			}
			else if(alturaPrincipal = scrollTop) {
				principal[i].style.opacity = 1;
			}
		}
	}
window.addEventListener('scroll', ocultarScroll);


addEventListener('DOMContentLoaded', ()=>{
	const boton_ir_aarriba = document.querySelector('#ir_arriba')
	const barra_indicador = document.querySelector(".indicador_scroll")

	const obtener_pixeles = () => document.documentElement.scrollTop || document.body.scrollTop

	const irArriba = () => {
		if (obtener_pixeles() > 0){
			requestAnimationFrame(irArriba)
			scrollTo(0, obtener_pixeles() - (obtener_pixeles() / 10 ))
		}
	}

	const indicarScroll = () =>{
		if (obtener_pixeles()> 50) {
			boton_ir_aarriba.className = 'mostar'
		}else{
			boton_ir_aarriba.className = 'ocultar'
		}
		let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight
		let avance_scroll = (obtener_pixeles() / altura) * 100
		barra_indicador.style.width = `${avance_scroll}%`
	}

	boton_ir_aarriba.addEventListener('click', irArriba)
	window.addEventListener('scroll', indicarScroll)
})


var menu = document.getElementById('container-menu');
var cerrar = document.getElementById('cerrar');
var item = document.getElementById('menu-item');
var logoG = document.getElementById('logoG');
var logoP = document.getElementById('animado');
var boton_menu = document.getElementById('boton-menu')

function mostrar(){
	menu.style.padding = '26px 26px 200vw 200vw';
	cerrar.style.display = 'flex';
	item.style.display = 'flex';
	logoG.style.opacity = 0;
	logoG.style.zIndex = -1;
	logoP.style.opacity = 1;
	boton_menu.style.display = 'none';
}

function ocultar_menu(){
	menu.style.padding = '30px 26px 52px 52px';
	cerrar.style.display = 'none';
	logoG.style.zIndex = 0;
	item.style.display = 'none';
	boton_menu.style.display = 'block';
}