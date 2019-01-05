$(function(){
	// 下方懸浮框
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		if($(window).scrollTop() >= 700){
			$('#xfl').css('display','block')
		}else{
			$('#xfl').css('display','none')
		}
	});
	
	
	
	
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
		
		
		//以下是大轮播图
		$(function () {
			var m=0;
			function sh(){
			$('.lun-img li').eq(m).show().siblings('li').hide();
			$('.lun-num li').eq(m).addClass('show').siblings('li').removeClass('show');
						}
			function piao(){
			s=setInterval(function(){
					m++;
					if(m>7){
						m=0;
					}
					sh(m);
				},3000)
			}
			piao();
			$('#lun').mouseover(function(){
				clearInterval(s);
				$('.left,.right').show();
			}).mouseout(function () {
				piao();
				$('.left,.right').hide();
			})
			$('.lun-num li').mouseover(function () {
				m=$(this).index();
				sh(m);
			})
			$('.right').click(function () {
				m++;
				if(m>7){
					m=0;
				}
				sh(m);
			})
			
			$('.left').click(function () {
				m--;
				if(m<0){
					m=7;
				}
				sh(m);
				
			})
			
		})
	
		// 以下是选项卡控制
		
		$('.content-content-bottom>div:nth-of-type(1)>ul>li:nth-of-type(2)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(2)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(1)>span').animate({'margin-left':'220px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(1)>ul>li:nth-of-type(3)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(3)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(1)>span').animate({'margin-left':'440px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(1)>ul>li:nth-of-type(4)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(4)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(1)>div:nth-of-type(1)>span').animate({'margin-left':'660px'},200)
		})
		
		
		// 以下是第二个选项卡控制
		
		$('.content-content-bottom>div:nth-of-type(2)>ul>li:nth-of-type(2)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(2)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(1)>span').animate({'margin-left':'220px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(2)>ul>li:nth-of-type(3)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(3)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(1)>span').animate({'margin-left':'440px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(2)>ul>li:nth-of-type(4)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(4)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(2)>div:nth-of-type(1)>span').animate({'margin-left':'660px'},200)
		})
		
		
		// 以下是第三个选项卡控制
		
		$('.content-content-bottom>div:nth-of-type(3)>ul>li:nth-of-type(2)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(2)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(1)>span').animate({'margin-left':'220px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(3)>ul>li:nth-of-type(3)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(3)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(1)>span').animate({'margin-left':'440px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(3)>ul>li:nth-of-type(4)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(4)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(3)>div:nth-of-type(1)>span').animate({'margin-left':'660px'},200)
		})
		
		
		// 以下是第二个选项卡控制
		
		$('.content-content-bottom>div:nth-of-type(4)>ul>li:nth-of-type(2)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(2)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(1)>span').animate({'margin-left':'220px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(4)>ul>li:nth-of-type(3)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(3)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(1)>span').animate({'margin-left':'440px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(4)>ul>li:nth-of-type(4)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(4)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(4)>div:nth-of-type(1)>span').animate({'margin-left':'660px'},200)
		})
		
		// 以下是第二个选项卡控制
		
		$('.content-content-bottom>div:nth-of-type(5)>ul>li:nth-of-type(2)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(2)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(1)>span').animate({'margin-left':'220px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(5)>ul>li:nth-of-type(3)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(3)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(1)>span').animate({'margin-left':'440px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(5)>ul>li:nth-of-type(4)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(4)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(5)>div:nth-of-type(1)>span').animate({'margin-left':'660px'},200)
		})
		
		// 以下是第二个选项卡控制
		
		$('.content-content-bottom>div:nth-of-type(6)>ul>li:nth-of-type(2)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(2)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(1)>span').animate({'margin-left':'220px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(6)>ul>li:nth-of-type(3)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(3)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(4)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(1)>span').animate({'margin-left':'440px'},200)
		})
		$('.content-content-bottom>div:nth-of-type(6)>ul>li:nth-of-type(4)').mouseover(function(){
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(2)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(3)').css('display','none')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(4)').css('display','block')
			$('.content-content-bottom>div:nth-of-type(6)>div:nth-of-type(1)>span').animate({'margin-left':'660px'},200)
		})
		
		
		// 以下楼层
	$(function (){
		console.log($('.floor'));		
		console.log($('.lis'));
	
				// 点击楼层li 滚动到指定的位置
				$('.lis').click(function(){
					// 获取当前li的下标
					var index=$(this).index()-1;
					// console.log(index);
	
					// 找到对应的.floor距离顶部的位置
	
					// 将获取的值 给滚动条 滚动到指定的 位置
					var top=$('.floor').eq(index).offset().top;
					// console.log(top);

					$('body').scrollTop(top);
					// 加动画
					$('body').animate({scrollTop:top},500);
				})
	
				//根据当前滚动位置 判断处于几楼
	
				// 把所有楼层距离顶部的位置放入数组
				var heights=[];
				// 遍历添加数组 向数组
				$('.floor').each(function () {
					heights.push($(this).offset().top)
				})
				// console.log(heights);
	
	
				// 滚动监听事件
				$(window).scroll(function () {
					// 获取当前滚动的距离
					var top=$(window).scrollTop();
					// console.log(top);
	
					
					// 遍历判断 在几楼
					for (var i = 0; i < heights.length; i++) {
						// top>=100 <720 一层
						if (top>=heights[i] && top<heights[i+1]) {
							//找到对用的楼层 需要当前下标
							var index=i;
							// 赋值给1F 背景
							$('ul li').eq(index+1).css("background","red").siblings().css("background","blue")
						
						//7楼没有小于8楼
						}else if (top>=heights[heights.length-1]) {
							//7楼自己的下标
							index=heights.length-1;
							$('ul li').eq(index+1).css("background","red").siblings().css("background","blue")
						}
					}
				})
			})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
})