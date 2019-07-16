var clique = document.querySelector('.clique')
console.log(clique);
clique.addEventListener('click', function(){
	var para = document.querySelector('.monpara')
	para.classList.toggle('visible');
	clique.classList.add('invisible');
	para.addEventListener('click', function(){
		clique.classList.remove('invisible');
		para.classList.remove('visible');
	})
});

(function(){
	    var onScroll=function(){
	    	var element=document.querySelector('.entete');
	    	if(element.getBoundingClientRect().top<0){
	    		element.classList.add('fixed')
	    	}
	    }
		window.addEventListener('scroll', onScroll);
	
})()

/*var nav=document.querySelector(".entete");
var header=document.querySelector("#avanttete");

console.log(nav);
console.log(header);

function scrolled(){
	var scroll= document.body.scrollTop || document.documentElement.scrollTop;
	entete.className=(currentScroll >= header.clientHeight) ? "fixed":"";
}
addEventListener("srcoll",scrolled,false);*/