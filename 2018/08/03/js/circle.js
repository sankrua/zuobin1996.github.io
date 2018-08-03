//随机函数
function myRandom(min, max) {
	return Math.random() * (max - min) + min;
}
// 随机颜色
function myColor() {
	var r = myRandom(0, 255);
	var g = myRandom(0, 255);
	var b = myRandom(0, 255);
	var a = myRandom(0.4, 1);// 不能比0小，不然透明，看不见
	return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
// 气球的函数
function Circle() {
	// 气球的容器
	this.div = document.createElement("div");
	// 气球的半径
	this.r = myRandom(20, 80);// 随机0~1之间的一个小数20~80
	// 20~80 Math.random()*(max-min)+min;
	// 气球的位置
	this.left = myRandom(0, 1000);
	this.top = myRandom(0, 500);
	// 气球的颜色
	this.bg = myColor();
	// 气球的速度
	this.speedX = myRandom(-6, 6);
	this.speedY = myRandom(-6, 6);
}

// 画圆的方法 原型
Circle.prototype.drawCircle = function(parent) {
	this.parent = parent;
	var ts = this.div.style;
	ts.width = this.r * 2 + 'px';
	ts.height = this.r * 2 + 'px';
	ts.left = this.left + 'px';
	ts.top = this.top + 'px';
	ts.background = this.bg;
	parent.appendChild(this.div);
}
// 运行的方法
Circle.prototype.run = function() {
	// 获取容器的宽高
	var maxLeft = this.parent.offsetWidth - this.r * 2;
	var maxTop = this.parent.offsetHeight - this.r * 2;
	var ts = this;
	// 计时器
	setInterval(function() {
		// 获取当前的位置
		var left = ts.div.offsetLeft + ts.speedX;
		var top = ts.div.offsetTop + ts.speedY;

		// 判断当前位置
		if (left <= 0) {
			left = 0;
			ts.speedX *= -1;
		}

		if (left >= maxLeft) {
			left = maxLeft;
			ts.speedX *= -1;
		}

		if (top <= 0) {
			top = 0;
			ts.speedY *= -1;
		}

		if (top >= maxTop) {
			top = maxTop;
			ts.speedY *= -1;
		}

		// 重新设置个气球
		ts.div.style.left = left + 'px';
		ts.div.style.top = top + 'px';
	}, 20);
}
