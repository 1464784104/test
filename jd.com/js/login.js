$( function(){
	$('.content-2 li:first-of-type').click(function(){
		$('.content-3').css('display','block')
		$('.content-4').css('display','none')
	})
	$('.content-2 li:last-of-type').click(function(){
		$('.content-3').css('display','none')
		$('.content-4').css('display','block')
	})
	
	var username,password;
	document.getElementById("username").onblur = function() {
			username = this.value;
			if(username.length == 0) {
				document.getElementById("tip").innerHTML = "用户名必填";
			}else if(username==12345){
				//uname = URLEncoder();
				//alert(uname);
				var ajax = createAjax();
 
				function createAjax() {
					var ajax = null;
					try {
						ajax = new ActiveXObject("microsoft.xmlhttp");
					} catch(e) {
						ajax = new XMLHttpRequest();
 
					}
					return ajax;
				}
				ajax.open("get", "php/login.php?name="+username);
				ajax.send(null);
				ajax.onreadystatechange = function() {
					if(ajax.readyState == 4) {
						if(ajax.status == 200) {
							var varReturn = ajax.responseText;
							document.getElementById("tip").innerHTML = varReturn;
						}
					}
				}
			}
 
		}
	
		document.getElementById("password").onblur = function() {
				password = this.value;
				if(password.length == 0) {
					document.getElementById("tip2").innerHTML = "密碼為空";
				} else if(password==123456789){
					//uname = URLEncoder();
					//alert(uname);
					var ajax = createAjax();
		
					function createAjax() {
						var ajax = null;
						try {
							ajax = new ActiveXObject("microsoft.xmlhttp");
						} catch(e) {
							ajax = new XMLHttpRequest();
		
						}
						return ajax;
					}
					ajax.open("get", "php/login.php&password="+password);
					ajax.send(null);
					ajax.onreadystatechange = function() {
						if(ajax.readyState == 4) {
							if(ajax.status == 200) {
								var varReturn = ajax.responseText;
								console.log(varReturn)
								document.getElementById("tip2").innerHTML = varReturn;
							}
						}
					}
				}
		
			}
				
				$('.content-4 button').click(function(){
					if(username==12345 && password==123456789){
					    window.location.href="index.html"
					}
				})
			




})