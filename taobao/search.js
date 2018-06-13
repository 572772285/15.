(function($){
	$(function(){
		var $searchForm=$('#search-form')
		var $searchInput=$('.search-input');
		var $submit=$('.submit');
		var $searchLayer=$('.searchLayer')
		console.log($searchInput)
		$searchForm.on('submit',function(){
			if($searchInput.val()==''){
				return false
			}
			console.log('submit...');
		})


		var url = 'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1528889766600_556&callback=jsonp557&k=1&area=c2c&bucketid=17&q=';
		//当用户输入时动态获取提示数据
		$searchInput.on('input',function(){
			//获取服务器数据
			$.ajax({
				url:url+getInputVal(),
				dataType:'jsonp',
				jsonp:'callback'

			})
			.done(function(data){
				// console.log(data);
				var html = '';

				for(var i = 0;i<data.result.length;i++){
					html += '<li class="search-item">'+data.result[i][0]+'</li>'
				}

				$searchLayer.html(html).show();
			})
			.fail(function(err){
				console.log(err);
			})
			.always(function(){
				console.log('always me');
			})
		});

		function getInputVal(){
			return $.trim($searchInput.val());
		}
	})
	
})(jQuery)