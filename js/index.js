window.onload=function(){
	navscroll();
	function navscroll(){
		var show=false;
		window.onscroll=window.onresize=window.onload=function(){
			var oHead0=document.getElementById('head0');
			var oSection=document.getElementById('section');
			var iTop=document.body.scrollTop||document.documentElement.scrollTop;
			var iHeight=window.innerHeight;
			if(iTop>140){
				if(!show){
					animation(oHead0,{'height':'100'},false);
					oSection.style.marginTop='150px';
					show=true;
				}
			}else{
				if(show){
					animation(oHead0,{'height':'0'},false);
					oSection.style.marginTop='0px';
					show=false;
				}
			}
		}
	}


	handleCart();
	function handleCart(){
		var oCat=document.querySelector('.cart');
		var oCatload=document.querySelector('.loading');
		var oSpan=oCatload.nextElementSibling;
		var oCartbox=document.querySelector('.cart-box');
		var oCatA=oCat.getElementsByTagName('a')[0];
		console.log(oCatA)
		oCat.onmouseenter=function(){
			oCat.style.background='#fff';
			oCatA.style.color='#fa6700';
			oCatload.style.display='block';
			// oCartbox.style.height='100px';
			/*用animation动画执行回调函数，先变高再变display*/
			animation(oCartbox,{'height':'100'},false,function(){
				oCatload.style.display='none';
				oSpan.style.display='block';
			})
		}
		oCat.onmouseleave=function(){	
			oCat.style.background='#333';
			oCatA.style.color='#b0b0b0';
			animation(oCartbox,{'height':'0'},false,function(){
				oCatload.style.display='none';
				oSpan.style.display='block';
			})
		}
	}

	handlenav();
	var oImgphone=document.querySelector('.imgphone');
	function handlenav(){
		var timer=null;
		var oNavA=document.querySelectorAll('.headleft a');
		var oNavbox=document.querySelector('.nav-content');
		for(var i=0;i<oNavA.length-13;i++){
			oNavA[i].index=i;
			oNavA[i].onmouseenter=function(){
				clearTimeout(timer);
				oNavbox.style.borderTop='1px solid #ccc';
				animation(oNavbox,{'height':200},false);
				loadtate(this.index);
			}
			oNavA[i].onmouseleave=function(){
				timer=setTimeout(function(){
					animation(oNavbox,{'height':'1'},false,function(){
						oNavbox.style.borderTop='none';
					})
				},500)
			}
		}
		oNavbox.onmouseenter=function(){
			clearTimeout(timer);
		}
		oNavbox.onmouseleave=function(){
			timer=setTimeout(function(){
					animation(oNavbox,{'height':'0'},false);
				},500)
		}
	}
	function loadtate(index){
		var shuzu=duogeshuzu[index];
		console.log(shuzu)
		oImgphone.innerHTML='';
		if(!shuzu){
			return false;
		}
		for(var i=0;i<shuzu.length;i++){
			
			var oLi=document.createElement('li');
			oImgphone.appendChild(oLi);
			var oImg=document.createElement('img');
			oImg.src=shuzu[i].img;
			console.log(shuzu[i].img)
			oLi.appendChild(oImg);
			var oP=document.createElement('p');
			oP.innerHTML=shuzu[i].name;
			oLi.appendChild(oP);
			var oSpan1=document.createElement('span');
			oSpan1.innerHTML=shuzu[i].price;
			oLi.appendChild(oSpan1);
		}
		
	}
}