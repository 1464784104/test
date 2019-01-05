/*
			实现需求：
			1.判断条的监听事件 判断滚到底部 
			2.向服务器请求数据 拿到服务器的返回数据
			3.向页面添加数据 
			4.需要到指定的添加不在请求数据||页面不在添加数据
		*/

		// 获取对象
		var cont=document.getElementById('cont');

		// 滚动事件
		window.onscroll=function(){
			// 每次滚到到底部 就请求数据

			// 文档总高度
			var aHeight=document.documentElement.offsetHeight;
			console.log(aHeight);
			// 可视区域高度
			var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
			console.log(cHeight);
			// 滚动高度
			var sHeight=document.documentElement.scrollTop||document.body.scrollTop;
			console.log(sHeight);

			// 每次滚到到底部=总高度-可视区域高度
			if(aHeight-cHeight<=sHeight){
				// 建立ajax请求数据
				Ajax().get('./php/data.php',function(msg){
					if(aHeight>=12000){
						cont.innerHTML=cont.innerHTML;

					}else{
						cont.innerHTML+=msg;
					}
					

				});

			}

		}
