(function($){
	var $dropdown=$('.dropdown');
	$dropdown.on('dropdown-show',function(ev){
		// console.log(this);
		var $this=$(this);
		//获取需要请求的地址
		var loadUrl=$this.data('load');
		var isLoaded=$this.data('isLoaded');
		//如果页面没有设置请求地址直接返回
		if(!loadUrl) return;
		//如果加载过了就直接返回
		if(isLoaded) return;
		//如果有data-load这个请求地址就请求数据
		$.getJSON(loadUrl,function(data){
			// console.log(data)
			var html='';
			for(var i=0; i<data.length;i++){
				html+='<li><a href="'+data[i].url+'"  class="dropdown-item bg">'+data[i].name+'</a></li>';
				setTimeout(function(){
					$this.find('.dropdown-layer').html(html);
					$this.data('isLoaded',true);
				},1000)
				
			}
		})
	})
	$dropdown.dropdown({});
	// $('button').eq(0).on('click',function(){
	// 	$dropdown.dropdown('show')
	// })
	
})(jQuery);