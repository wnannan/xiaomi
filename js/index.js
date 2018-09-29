window.onload=function(){
	//购物车选项卡 
	let info = document.querySelector(".topbar-info");
	let menu = document.querySelector(".cart-menu");
	let mini = document.querySelector(".cart-mini");
	
	info.onmouseover = function(){
		menu.style.display = "block";
		mini.style.backgroundColor = "#fff";
		mini.style.color = "#ff6700";
	}
	info.onmouseout = function(){
		menu.style.display = "none";
		mini.style.backgroundColor = "#424242";
		mini.style.color = "#b0b0b0";
	}

	// 侧滑页
	let item = document.querySelectorAll(".category-item");
	let list = document.querySelectorAll(".ul");
	
	for(let i=0;i<item.length;i++){
		item[i].onmouseover = function(){
			this.style.backgroundColor = "#ff6700";
			list[i].style.display = "block";
		}
		item[i].onmouseout = function(){
			list[i].style.display = "none";
			this.style.backgroundColor = "";
		}
	}
	// 小米闪购倒计时
	// let time11 = document.querySelector(".time-11");
	// let time3 = document.querySelector(".time-3");
	// let time2 = document.querySelector(".time-2");
	// let t1 = time11.innerHTML;
	// let t2 = time2.innerHTML;
	// let t3 = time3.innerHTML;
	// let t = window.setInterval(function(){
	// 	t3--;
	// 	time3.innerHTML=t3;
	// 	if(t3==0){
	// 		t3=60;
	// 	}
	// },1000);
	// let t22 = window.setInterval(function(){
	// 	t2--; 
	// 	time2.innerHTML=t2;
	// 	if(t2==0){
	// 		t2=60;
	// 	}
	// },60000);
	// let t33 = window.setInterval(function(){
	// 	t1--;
	// 	time2.innerHTML=t1;
	// 	if(t1==0){
	// 		t1=60;
	// 	}
	// },360000);

	let pp = document.querySelectorAll(".time-1");
	// console.log(pp);
	let qiu = new Date();
	qiu.setFullYear(2018);
	qiu.setMonth(8,21);
	qiu.setHours(18,0,0);
	let zhong = qiu.getTime();
	// console.log(zhong);
	let t = setInterval(function(){
		let nowdate = new Date();
		let nowtime = nowdate.getTime();
		let times = Math.round((zhong - nowtime)/1000);
		let days = Math.floor(times/60/60/24);
		let hours = Math.floor(times/60/60%24);
		let min = Math.floor(times/60%60);

		pp[0].innerHTML = days;
		pp[1].innerHTML = hours;
		pp[2].innerHTML = min;
	},1000);

	//平移轮播
	
	
		//小米闪购
		let box = document.querySelector(".bgbox");
		let left = document.querySelector(".left");
		let right = document.querySelector(".right");
		move1(box,left,right,2);

		//内容
		let content = document.querySelector(".content-item-book .ci");
		let czuo = document.querySelector(".zuo");
		let cyou = document.querySelector(".cyou");
		// console.log(content,czuo,cyou);
		move1(content,cyou,czuo,3);
		let content1 = document.querySelectorAll(".content-item-book .ci")[1];
		let czuo1 = document.querySelectorAll(".zuo")[1];
		let cyou1 = document.querySelectorAll(".cyou")[1];
		move1(content1,cyou1,czuo1,3);
		let content2 = document.querySelectorAll(".content-item-book .ci")[2];
		let czuo2 = document.querySelectorAll(".zuo")[2];
		let cyou2 = document.querySelectorAll(".cyou")[2];
		move1(content2,cyou2,czuo2,3);
		let content3 = document.querySelectorAll(".content-item-book .ci")[3];
		let czuo3 = document.querySelectorAll(".zuo")[3];
		let cyou3 = document.querySelectorAll(".cyou")[3];
		move1(content3,cyou3,czuo3,3);

		//元素，左箭头，右箭头，移动(需要显示几屏)
	function move1(box,left,right,n1){

		let widths = parseInt(getComputedStyle(box,null).width)/(n1);
		let num = 0;
		right.onclick = function(){
			num--;
			if(num==-1){
				num=0;
				return;
			}
			box.style.transform = "translateX(" + (-widths*num) + "px)";
		}
		left.onclick = function(){
			num++;
			if(num==(n1)){
				num=(n1-1);
				return;
			}
			box.style.transform = "translateX(" + (-widths*num) + "px)";
		}
	}


	// 顶部轮播图
	let banner = document.querySelector(".ui-viewport");
	let imgs = document.querySelectorAll(".ui-viewport a");
	let dot = document.querySelectorAll(".ui-dot-do");
	let leftss = document.querySelector(".icon-xiangzuo");
	let rightss = document.querySelector(".you");
	// let cls = document.querySelector(".ui-dot .active");
	ban(banner,imgs,dot,"active",leftss,rightss,2);


	
	// 函数形参：
	// 	1.鼠标移入的box，
	// 	2.图片长度imgs，
	// 	3.轮播点长度dots，
	// 	4.要添加/移除的类名clsname，
	//	5.左箭头lefts，
	// 	6.右箭头rights
	//  7.时间间隔函数的时间
	
	function ban(box,imgs,dots,clsname,lefts,rights,time){
		let w = parseInt(getComputedStyle(box,null).width);
		let t = setInterval(move,1000*time);
		let now = 0;
		let next = 0;
		imgs[0].style.left = 0;
		dots[0].classList.add(clsname);
		//自动轮播    
		function move(){
			next++;
			if(next==imgs.length){
				next=0;
			}
			imgs[now].style.left = 0;
			imgs[next].style.left = w+"px";
			animate(imgs[now],{left: -w},function(){
				dots[now].classList.remove(clsname);
			});
			animate(imgs[next],{left: 0},function(){
				for(let i=0;i<dots.length;i++){
					dots[i].classList.remove(clsname);
				}
				dots[next].classList.add(clsname);
			});
			now = next;
		}
		//轮播点轮播     
		for(let i=0;i<imgs.length;i++){
			dots[i].onmouseover = function(){
				for(let j=0;j<imgs.length;j++){
					imgs[j].style.left = -w + "px";
					dots[j].classList.remove(clsname);
				}
				imgs[i].style.left = 0;
				dots[i].classList.add(clsname);
				clearInterval(t);
			}
			dots[i].onmouseout = function(){
				t = setInterval(move,2000);
			}
		}
		//鼠标移入banner停止时间间隔
		box.onmouseover = function(){
			clearInterval(t);
		}
		//鼠标移出banner开始时间间隔
		box.onmouseout = function(){
			t = setInterval(move,2000);
		}
		//箭头    
		rights.onclick = function(){
			move();
		}
		lefts.onclick = function(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			imgs[now].style.left = 0;
			imgs[next].style.left = -w+"px";
			animate(imgs[now],{left: w},function(){
				dots[now].classList.remove(clsname);
			});
			animate(imgs[next],{left: 0},function(){
				for(let i=0;i<dots.length;i++){
					dots[i].classList.remove(clsname);
				}
				dots[next].classList.add(clsname);
			});
			now = next;
		}
	}
	
	//家电选项卡
	let hots = document.querySelectorAll(".box-hd-hot");
	let bl = document.querySelectorAll(".wi");
	
	for(let i=0;i<hots.length;i++){
		hots[i].onmouseover = function(){
			this.style = "color: #ff6700; border-bottom: 2px solid #ff6700";
			for(let j=0;j<bl.length;j++){
				bl[j].style.display = "none";
			}
			bl[i].style.display = "block";
		}
		hots[i].onmouseout = function(){
			this.style = "color: #424242; border: 0";
			bl[i].style.display = "block";
		}
	}
}
	