var arr = ['top', 'left'];
var b = 0;
var interval;
 function stride() {
	if(!document.getElementById) 
		return false;
	var oDiv1 = document.getElementById("div1");	
	if(!oDiv1)
		return false;
	//根据像素控制震动的幅度
 	oDiv1 .style[arr[b % 2]] = (b++) % 4 < 2 ? "0px" : "7px";
 	if (b >= 15) {
 		clearInterval(interval);
		//这块代码使抖动复原
		oDiv1.style['top'] = '0px';
		oDiv1.style['left'] = '0px';
 		b = 0
 	}
 }

 function time() {
 	clearInterval(interval);
	//控制定时器的时间，也就是控制震动的次数
	//试一试一个比较大的数，会比较由意思哦
 	interval = setInterval(stride, 30)
 }
 // 把函数加入到onload函数中
 function addLoadEvent(func){
 	var oldonload = window.onload;
 	if(typeof window.onload != 'function'){
 		window.onload = func;
 	}else{
 		window.onload = function(){
 			oldload();
 			func();
 		}
 	}
 }
function start() {
	if(!document.getElementById) 
		return false;
 	var btn = document.getElementById("btn");	
	if(!btn)
		return false;
 	btn.onclick = time;
 }
 addLoadEvent(start);
