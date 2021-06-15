const images = document.querySelectorAll('slider3 slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;
var time = 4000;

function init()
{
	console.log('resize');
	width = document.querySelector('.slider3').offsetWidth;
	/*sliderLine.style.width = width*images.length + 'px';
	images.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	});*/
	console.log(width);
	/*alert(width);*/
}

window.addEventListener('resize', init);

init();

document.querySelector('.next').addEventListener('click', function(){
	Forward();
});

document.querySelector('.prev').addEventListener('click', function(){
	count--;
	if(count == -1)
	{
		count = 3;
		sliderLine.style.transform = 'translate(-'+ 3*width +'px)';
	}
	sliderLine.style.transform = 'translate(-'+ width*count +'px)';
});

function changeIms()
{
	Forward();
	setTimeout("changeIms()", time);
}

window.onload = changeIms;

function Forward()
{
	count++;
	if(count == 4)
	{
		count = 0;
		sliderLine.style.transform = 'translate(-'+ 0 +'px)';
	}
	else
	{
		sliderLine.style.transform = 'translate(-'+ width*count +'px)';
	}
}