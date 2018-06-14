(function($){
	$(function(){
		var $searchForm=$('#search-form')
		var $searchInput=$('.search-input');
		var $submit=$('.submit');
		var $searchLayer=$('.searchLayer')
		console.log($searchInput)
		$searchForm.on('submit',function(){
			if(getInputVal()==''){
				return false
			}
			console.log('submit...');
		})


		var url = 'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1528889766600_556&callback=jsonp557&k=1&area=c2c&bucketid=17&q=';
		/*存储获取淘宝数据的地址*/
		//当用户输入时动态获取提示数据
		$searchInput.on('input',function(){
			//获取服务器数据
			$.ajax({
				url:url+getInputVal(),
				/*getInputVal()是q的值*/
				dataType:'jsonp',
				jsonp:'callback'

			})
			.done(function(data){
				// console.log(data);
				/*如果在服务器端什么都没有请求到，则让下拉层隐藏掉*/
				if(data.result.length==0){
					$searchLayer.html('').hide();
				}
				var html = '';
				var dataNumber=10;
				for(var i = 0;i<data.result.length;i++){
					if(i>=dataNumber) break;
					html += '<li class="search-item">'+data.result[i][0]+'</li>'
				}

				$searchLayer.html(html).show();
			})
			.fail(function(err){
				$searchLayer.html('').hide();
				console.log(err);
			})
			.always(function(){
				// console.log('always me');
			})
		});

		function getInputVal(){
			return $.trim($searchInput.val());
		}
		/*通过事件代理完成搜索框*/
		$searchLayer.on('click','.search-item',function(){
			var $this=$(this)
			// console.log(this)
			// $searchInput.val($this.html());
			$searchInput.val(removeHTMLTag($this.html()));
			$searchForm.trigger('submit')
		});
		$(document).on('click',function(){
			$searchLayer.hide();
			// return false
		});
		$searchInput
		.on('focus',function(){
			if($.trim($searchLayer.html())==''){
				$searchLayer.hide();
			}else{
				$searchLayer.show();
			}
		})
		.on('click',function(){
			return false
		})
		/*阻止输入框的onclick事件，因为他冒泡了，冒到document上*/
		function removeHTMLTag(str){
			return str.replace(/<[^<|>]+>/g,'');
		}
		/*防止输入框加粗字体*/
	})
	
})(jQuery)