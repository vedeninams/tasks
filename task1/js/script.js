var div_progress = document.getElementById("progress");
var div_value =  document.getElementById("progress_value");
var timerId = setInterval(
		function () {
			if (parseInt(div_progress.style.width)>99) {div_progress.style.width = '0%'}
			else {div_progress.style.width = (parseInt(div_progress.style.width|| 0)+1)+'%'} 
			div_value.innerHTML=div_progress.style.width;
		}
	,70);



