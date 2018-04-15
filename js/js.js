function fun(){
		document.getElementById('mypic').src="images/slider1.jpeg";
	}
function fun2(){
		document.getElementById('mypic').src="images/slider2.jpeg";
	}
function fun3(){
		document.getElementById('mypic').src="images/slider3.jpeg";
}

function lorem(){
	document.getElementById('text1').display = "block";
}
function lorem(){
	document.getElementById('text2').visibility = "visible";
}


document.querySelector(".icon").addEventListener("click",function(e){
	e.preventDefault();
	console.log('david');
	document.querySelector(".navbar").classList.toggle("isOpen");	
});








window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    $('html,body').animate({
    	"scrollTop": 0 
    },1000);
}
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});






