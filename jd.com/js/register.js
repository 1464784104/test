$(function(){
	$('.content>ul>li:first-of-type>div:first-of-type span').click(function(){
		$('.phone').css('display','block')
	})
	$('.content>ul>li:first-of-type>div:first-of-type span').blur(function(){
		$('.phone').css('display','none')
	})
	$('.content>ul>li:first-of-type>div:nth-of-type(4)').click(function(){
			$(' .content>ul>li:first-of-type').css('display','none')
			$(' .content>ul>li:nth-of-type(2)').css('display','block')
			$('.content').css('height','800px')
			$('#footer').css('margin-top','210px')
	})
	$('.content>ul>li:nth-of-type(2)>div:nth-of-type(6)').click(function(){
			$(' .content>ul>li:nth-of-type(2)').css('display','none')
			$(' .content>ul>li:last-of-type').css('display','block')
			$('.content').css('height','475px')
			$('#footer').css('margin-top','10px')
	})
	
	setTimeout(function(){
		$('#zzc').css('display','block')
	},2000)
	$('#zzc button').click(function(){
		$('#zzc').fadeOut(1000)
	})
	
	
	
	
	
	
	
	
	
	
	
})