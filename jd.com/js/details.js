$(function(){
	// 下方地区是移入移出
		// $('.diqu') 
			$('.diqu').mouseover(function(){
				$('.diqu ul').css("display","block")
				$('.diqu').css({'background':'white','border':'1px solid #999999','border-bottom':'1px solid white','position':'relative','z-index':'999'})
			})
			$('.diqu').mouseout(function(){
				$('.diqu ul').css("display","none")
				$('.diqu').css({'background':'#E3E4E5','border':'none'})
			})
		
		//下方是页头菜单栏移入移出
		$('.cd1').mouseover(function(){
			$('#cd1').css("display","block")
			$('.cd1-a').css({'background':'white','border':'1px solid #999999',
			'border-bottom':'1px solid white','position':'relative',
			'z-index':'999','padding-bottom':'5px'})
		})
		$('.cd1').mouseout(function(){
			$('#cd1').css("display","none")
			$('.cd1-a').css({'background':'none','border':'none'})
		})
		$('.cd2').mouseover(function(){
			$('#cd2').css("display","block")
			$('.cd2-a').css({'background':'white','border':'1px solid #999999',
			'border-bottom':'1px solid white','position':'relative',
			'z-index':'999','padding-bottom':'5px'})
		})
		$('.cd2').mouseout(function(){
			$('#cd2').css("display","none")
			$('.cd2-a').css({'background':'none','border':'none'})
		})
		$('.cd3').mouseover(function(){
			$('#cd3').css("display","block")
			$('.cd3-a').css({'background':'white','border':'1px solid #999999',
			'border-bottom':'1px solid white','position':'relative',
			'z-index':'999','padding-bottom':'5px'})
		})
		$('.cd3').mouseout(function(){
			$('#cd3').css("display","none")
			$('.cd3-a').css({'background':'none','border':'none'})
		})
		$('.cd4').mouseover(function(){
			$('#cd4').css("display","block")
			$('.cd4-a').css({'background':'white','border':'1px solid #999999',
			'border-bottom':'1px solid white','position':'relative',
			'z-index':'999','padding-bottom':'5px'})
		})
		$('.cd4').mouseout(function(){
			$('#cd4').css("display","none")
			$('.cd4-a').css({'background':'none','border':'none'})
		})
		
		$('.cd5').mouseover(function(){
			$('#cd5').css("display","block")
	// 		$('.cd5-a').css({'background':'white','border':'1px solid #999999',
	// 				'border-bottom':'1px solid white','position':'relative',
	// 				'z-index':'999','padding-bottom':'5px'})
		})
		$('.cd5').mouseout(function(){
			$('#cd5').css("display","none")
			// $('.cd5-a').css({'background':'none','border':'none'})
		})
		// 以下是sousuo控制
		$('.sousuo').click(function(){
			$('.sousuo ul').css('display','block')
			$('.menu-nav').css('margin-top','2px')
			$('.menu-nav').css('margin-left','40px')
		})
		$('.sousuo input').blur(function(){
			$('.sousuo ul').css('display','none')
			$('.menu-nav').css('margin-top','30px')
			$('.menu-nav').css('margin-left','-160px')
		})
		//以下是购物车控制
		$('.gouwuche').mouseover(function(){
			$('.gouwuche ul').css("display","block")
		})
		$('.gouwuche').mouseout(function(){
			$('.gouwuche ul').css("display","none")
		})
		// 以下是二维码控制
		$('.menu-erweima').mouseover(function(){
			$('#cd5').css("display","block")
		})
		$('.gouwuche').mouseout(function(){
			$('#cd5').css("display","none")
		})
		
		// 以下是sousuo控制
		$('.sousuo').click(function(){
			$('.sousuo ul').css('display','block')
			$('.menu-nav').css('margin-top','2px')
			$('.menu-nav').css('margin-left','40px')
		})
		$('.sousuo input').blur(function(){
			$('.sousuo ul').css('display','none')
			$('.menu-nav').css('margin-top','30px')
			$('.menu-nav').css('margin-left','-160px')
		})
		//以下是购物车控制
		$('.gouwuche').mouseover(function(){
			$('.gouwuche ul').css("display","block")
		})
		$('.gouwuche').mouseout(function(){
			$('.gouwuche ul').css("display","none")
		})
		// 以下是二维码控制
		$('.menu-erweima').mouseover(function(){
			$('#cd5').css("display","block")
		})
		$('.gouwuche').mouseout(function(){
			$('#cd5').css("display","none")
		})
		
		// 以下是放大鏡
		
			$(function () {
		
					// small中移动事件
					$("#small").mousemove(function(e){
						// move big显示
						$("#move,#big").show();
		
						// 获取移动的值
						var x=e.pageX-$(this).offset().left-$("#move").width()/2;
						var y=e.pageY-$(this).offset().top-$("#move").height()/2;
						// 判断边距
						if(x<=0){
							x=0
						}else if(x>=$(this).width()-$("#move").width()){
							x=$(this).width()-$("#move").width()
						}
		
						if(y<=0){
							y=0
						}else if(y>=$(this).height()-$("#move").height()){
							y=$(this).height()-$("#move").height()
						}
						// 赋值
						$("#move").css({left:x+'px',top:y+'px'});
		
						// big img 移动
		
						//大图与小图的比例
						var scale=$("#big>img").width()/$("#small>img").width();

		
						//大图的运动距离=小图移动*scale
						// $("#big>img").css({left:-x*scale+'px',top:-y*scale+'px'}) 
		
						// 大图的容器 元素的滚动
						$("#big").scrollTop(y*scale);
						$("#big").scrollLeft(x*scale);
		
		
					}).mouseout(function(){
						// move big隐藏
						$("#move,#big").hide();
					})
		
					// 点击更换图片
					$('#dian li img').mouseover(function(){
						// small big src=当前
						// console.log($(this).attr("src"));
						$('#small>img,#big>img').attr("src",$(this).attr("src"));
					})
				})
		
				var dian=document.getElementById('dian');
							var left=document.getElementById('left');
							var right=document.getElementById('right');
							var ul=dian.getElementsByTagName('ul')[0];
						
				
							function off(aa){
								// 获取当前ul的位置 +指定的移动距离
								var l=parseInt(ul.style.left)+aa;
				
								console.log(l);
				
								// 判断走 到-300
								if(l<-200){
									return;
								}
				
								// 0 的时候 最后
								if (l>0) {
									return;
								}
								
								
								//重新赋值
								ul.style.left=l+'px';
				
							}
				
							// off(-300);
				
							// 左边点击
							left.onclick=function(){
								off(100);
							}
							// 右击
							right.onclick=function(){
								off(-100)
							}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
})