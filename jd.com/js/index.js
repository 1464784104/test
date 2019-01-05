$( function(){
	var timer;
	console.log('兄弟连大法好！！！')
	// 下方是懸浮欄
		$('#sousuo>input').click(function(){
			$('#sousuo>ul').css('display','block')
		})
		$('#sousuo>input').blur(function(){
			$('#sousuo>ul').css('display','none')
		})
			
		$(window).scroll(function(){
			// console.log($(window).scrollTop());
			if($(window).scrollTop() >= 500){
				$('#xfl').css('display','block')
			}else{
				$('#xfl').css('display','none')
			}
		});
			
	// 下方是標題淡出
	$('#header-b').click(function(){
		$('.header-top').fadeOut(1000);
	})
	

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
		$('.menu-nav').css('margin-top','0px')
	})
	$('.sousuo input').blur(function(){
		$('.sousuo ul').css('display','none')
		$('.menu-nav').css('margin-top','30px')
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
	//以下是中部第一個頁面左部控制
	$('#ccfl1,.ccfl1').mouseover(function(){
		$('.ccfl1').css("display","block")
	})
	$('#ccfl1,.ccfl1').mouseout(function(){
		$('.ccfl1').css("display","none")
	})
	
	$('#ccfl2,.ccfl2').mouseover(function(){
		$('.ccfl2').css("display","block")
	})
	$('#ccfl2,.ccfl2').mouseout(function(){
		$('.ccfl2').css("display","none")
	})
	
	$('#ccfl3,.ccfl3').mouseover(function(){
		$('.ccfl3').css("display","block")
	})
	$('#ccfl3,.ccfl3').mouseout(function(){
		$('.ccfl3').css("display","none")
	})
	
	$('#ccfl4,.ccfl4').mouseover(function(){
		$('.ccfl4').css("display","block")
	})
	$('#ccfl4,.ccfl4').mouseout(function(){
		$('.ccfl4').css("display","none")
	})
	
	$('#ccfl5,.ccfl5').mouseover(function(){
		$('.ccfl5').css("display","block")
	})
	$('#ccfl5,.ccfl5').mouseout(function(){
		$('.ccfl5').css("display","none")
	})
	
	$('#ccfl6,.ccfl6').mouseover(function(){
		$('.ccfl6').css("display","block")
	})
	$('#ccfl6,.ccfl6').mouseout(function(){
		$('.ccfl6').css("display","none")
	})
	
	$('#ccfl7,.ccfl7').mouseover(function(){
		$('.ccfl7').css("display","block")
	})
	$('#ccfl7,.ccfl7').mouseout(function(){
		$('.ccfl7').css("display","none")
	})
	
	$('#ccfl8,.ccfl8').mouseover(function(){
		$('.ccfl8').css("display","block")
	})
	$('#ccfl8,.ccfl8').mouseout(function(){
		$('.ccfl8').css("display","none")
	})
	
	$('#ccfl9,.ccfl9').mouseover(function(){
		$('.ccfl9').css("display","block")
	})
	$('#ccfl9,.ccfl9').mouseout(function(){
		$('.ccfl9').css("display","none")
	})
	
	$('#ccfl10,.ccfl10').mouseover(function(){
		$('.ccfl10').css("display","block")
	})
	$('#ccfl10,.ccfl10').mouseout(function(){
		$('.ccfl10').css("display","none")
	})
	
	$('#ccfl11,.ccfl11').mouseover(function(){
		$('.ccfl11').css("display","block")
	})
	$('#ccfl11,.ccfl11').mouseout(function(){
		$('.ccfl11').css("display","none")
	})
	
	$('#ccfl12,.ccfl12').mouseover(function(){
		$('.ccfl12').css("display","block")
	})
	$('#ccfl12,.ccfl12').mouseout(function(){
		$('.ccfl12').css("display","none")
	})
	
	$('#ccfl13,.ccfl13').mouseover(function(){
		$('.ccfl13').css("display","block")
	})
	$('#ccfl13,.ccfl13').mouseout(function(){
		$('.ccfl13').css("display","none")
	})
	
	$('#ccfl14,.ccfl14').mouseover(function(){
		$('.ccfl14').css("display","block")
	})
	$('#ccfl14,.ccfl14').mouseout(function(){
		$('.ccfl14').css("display","none")
	})
	
	$('#ccfl15,.ccfl15').mouseover(function(){
		$('.ccfl15').css("display","block")
	})
	$('#ccfl15,.ccfl15').mouseout(function(){
		$('.ccfl15').css("display","none")
	})
	
	$('#ccfl16,.ccfl16').mouseover(function(){
		$('.ccfl16').css("display","block")
	})
	$('#ccfl16,.ccfl16').mouseout(function(){
		$('.ccfl16').css("display","none")
	})
	
	$('#ccfl17,.ccfl17').mouseover(function(){
		$('.ccfl17').css("display","block")
	})
	$('#ccfl17,.ccfl17').mouseout(function(){
		$('.ccfl17').css("display","none")
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
	$('.content-content-first-middle-right img').mouseover(function(){
		$(this).css('opacity','0.8')
	})
	$('.content-content-first-middle-right img').mouseout(function(){
		$(this).css('opacity','1')
	})
	
	$('.content-content-first-right-middle-top li:nth-of-type(2)').mouseover(function(){
		
		$('.content-content-first-right-middle-s-s').animate({'margin-left':'55px'},300);
		$('.content-content-first-right-middle-bottom>ul:first-of-type').css('display','none')
		$('.content-content-first-right-middle-bottom>ul:last-of-type').css('display','block')
	})
	$('.content-content-first-right-middle-top li:nth-of-type(1)').mouseover(function(){
		$('.content-content-first-right-middle-s-s').animate({'margin-left':'0px'},300);
		$('.content-content-first-right-middle-bottom>ul:first-of-type').css('display','block')
		$('.content-content-first-right-middle-bottom>ul:last-of-type').css('display','none')
	})
	$(".content-content-first-right-bottom div:nth-of-type(1),.content-content-first-right-bottom div:nth-of-type(2),.content-content-first-right-bottom div:nth-of-type(3),.content-content-first-right-bottom div:nth-of-type(4)").mouseover(function(){
		// $('.content-content-first-right-bottom ul').animate({'top':'580px'},200)
		$('.content-content-first-right-bottom div:nth-of-type(1) p,.content-content-first-right-bottom div:nth-of-type(2) p,.content-content-first-right-bottom div:nth-of-type(3) p,.content-content-first-right-bottom div:nth-of-type(4) p').css('margin-top','-18px')
		$('.content-content-first-right-bottom div>img').css('height','0')
		$('.content-content-first-right-bottom ul').css('display','block')
	})
	$('.content-content-first-right-bottom button').click(function(){
		$('.content-content-first-right-bottom ul').css('display','none')
		// $('.content-content-first-right-bottom ul').animate({'top':'750px'},200),
		$('.content-content-first-right-bottom div:nth-of-type(1) p,.content-content-first-right-bottom div:nth-of-type(2) p,.content-content-first-right-bottom div:nth-of-type(3) p,.content-content-first-right-bottom div:nth-of-type(4) p').css('margin-top','0')
		$('.content-content-first-right-bottom div>img').css('height','20px')
	})
	// 以下是倒计时
	function run() {
		var currentTime = new Date().getTime();
		var futureTime = new Date('2018/10/01').getTime();
		var time = futureTime - currentTime;
		var second = Math.floor(time / 1000 % 60);
		var minute = Math.floor(time / 1000 / 60 % 60);
		var hour = Math.floor(time / 1000 / 60 / 60 % 24);
		document.getElementById('djs-hour').innerHTML = djs(hour);
		document.getElementById('djs-minute').innerHTML = djs(minute);
		document.getElementById('djs-second').innerHTML = djs(second);
	}
	function djs(dj){
		if(dj<10){
			a='0'+dj;
			return a;
		}else{
			a=dj;
			return a;
		}
		
	}
	run();
	setInterval(function() {
		run();
	}, 1000);
	
	//以下是长轮播图
	$(function () {
		var mi=0;
		function shi(){
		$('.content-content-second-two-lun-img li').eq(mi).show().siblings('li').hide();
					}
		function piaoi(){
		si=setInterval(function(){
				mi++;
				if(mi>7){
					mi=0;
				}
				shi(mi);
			},8000)
		}
		piaoi();
		$('.content-content-second-two').mouseover(function(){
			clearInterval(si);
			$('.content-content-second-two-lun-left,.content-content-second-two-lun-right').show();
		}).mouseout(function () {
			piaoi();
			$('.content-content-second-two-lun-left,.content-content-second-two-lun-right').hide();
		})
		$('.content-content-second-two-lun-right').click(function () {
			mi++;
			if(mi>7){
				mi=0;
			}
			shi(mi);
		})
		
		$('.content-content-second-two-lun-left').click(function () {
			mi--;
			if(mi<0){
				mi=7;
			}
			shi(mi);
			
		})
		
	})
	
	// 以下是小轮播图
	$(function () {
		var mo=0;
		function sho(){
		$('.content-content-second-three-img li').eq(mo).show().siblings('li').hide();
		$('.content-content-second-three-num li').eq(mo).addClass('content-content-second-three-num-show').siblings('li').removeClass('content-content-second-three-num-show');
					}
		function piaoo(){
		sx=setInterval(function(){
				mo++;
				if(mo>1){
					mo=0;
				}
				sho(mo);
			},10000)
		}
		piaoo();
		$('.content-content-second-three').mouseover(function(){
			clearInterval(sx);
		}).mouseout(function () {
			piaoo();
		})
		$('.content-content-second-three-num li').mouseover(function () {
			mo=$(this).index();
			sho(mo);
		})
		
	})
	
	// 以下是content-content-third-top-2-1
	$(function () {
		var ml=0;
		function shl(){
		$('.content-content-third-top-2-1-img li').eq(ml).show().siblings('li').hide();
		$('.content-content-third-top-2-1-num li').eq(ml).addClass('content-content-third-top-2-1-show').siblings('li').removeClass('content-content-third-top-2-1-show');
					}
		function piaol(){
		sl=setInterval(function(){
				ml++;
				if(ml>2){
					ml=0;
				}
				shl(ml);
			},3000)
		}
		piaol();
		$('.content-content-third-top-2-1').mouseover(function(){
			clearInterval(sl);
			$('.content-content-third-top-2-1-left,.content-content-third-top-2-1-right').show();
		}).mouseout(function () {
			piaol();
			$('.content-content-third-top-2-1-left,.content-content-third-top-2-1-right').hide();
		})
		$('.content-content-third-top-2-1-num li').mouseover(function () {
			ml=$(this).index();
			shl(ml);
		})
		$('.content-content-third-top-2-1-right').click(function () {
			ml++;
			if(ml>2){
				ml=0;
			}
			shl(ml);
		})
		
		$('.content-content-third-top-2-1-left').click(function () {
			ml--;
			if(ml<0){
				ml=2;
			}
			shl(ml);
			
		})
		
	})
	// 以下是content-content-third-bottom-2-1
	$(function () {
		var ml=0;
		function shl(){
		$('.content-content-third-bottom-2-1-img li').eq(ml).show().siblings('li').hide();
		$('.content-content-third-bottom-2-1-num li').eq(ml).addClass('content-content-third-bottom-2-1-show').siblings('li').removeClass('content-content-third-bottom-2-1-show');
					}
		function piaol(){
		sl=setInterval(function(){
				ml++;
				if(ml>2){
					ml=0;
				}
				shl(ml);
			},3000)
		}
		piaol();
		$('.content-content-third-bottom-2-1').mouseover(function(){
			clearInterval(sl);
			$('.content-content-third-bottom-2-1-left,.content-content-third-bottom-2-1-right').show();
		}).mouseout(function () {
			piaol();
			$('.content-content-third-bottom-2-1-left,.content-content-third-bottom-2-1-right').hide();
		})
		$('.content-content-third-bottom-2-1-num li').mouseover(function () {
			ml=$(this).index();
			shl(ml);
		})
		$('.content-content-third-bottom-2-1-right').click(function () {
			ml++;
			if(ml>2){
				ml=0;
			}
			shl(ml);
		})
		
		$('.content-content-third-bottom-2-1-left').click(function () {
			ml--;
			if(ml<0){
				ml=2;
			}
			shl(ml);
			
		})
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

	
	