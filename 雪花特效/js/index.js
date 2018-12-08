var snowList = [];
var oPageX = window.screen.width;
var oPageY = window.screen.height;
//雪花对象
function Snow(x,y,xSpeed,ySpeed,size){
	this.node  = document.createElement("div");
	this.x = x;
	this.y = y;
	this.xSpeed  = xSpeed;
	this.ySpeed = ySpeed;
	this.size = size;
	//创建雪花
	this.createSnow = function(){
		this.node.style.fontSize = this.size +"px";
		this.node.style.position = "absolute";
		this.node.style.top = this.y + "px";
		this.node.style.left = this.x + "px";
		this.node.innerHTML = "*";
		document.body.appendChild(this.node);
	}
	//雪花移动
	this.moveSnow = function(){
		this.node.style.top = parseInt(this.node.style.top) + this.ySpeed + "px";
		this.node.style.left = parseInt(this.node.style.left) + this.xSpeed + "px";
	}	
}
//创建大量的雪花数组
function createSnows(){
	var snow = new Snow(Math.random()*oPageX,0,Math.random()+1,Math.random()+2,20+Math.random()*20);
	snow.createSnow();
	snowList.push(snow);
}
//雪花数组中所有雪花的移动
function moveSnows(){
	for(var i=0;i<snowList.length;i++){
		snowList[i].moveSnow();
		if(parseInt(snowList[i].node.style.top)>oPageY || parseInt(snowList[i].node.style.left)>oPageX){
			//把雪花元素从父元素中移除
			snowList[i].node.parentNode.removeChild(snowList[i].node);
			//把雪花从雪花数组中移除
			snowList.splice(i,1);
		}
	}
}
//开始特效
function start(createTime,moveTime){
	//一秒钟创建一个雪花
	setInterval(createSnows,createTime);
	//每隔10毫秒移动雪花
	setInterval(moveSnows,moveTime);
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
addLoadEvent(start(500,10));