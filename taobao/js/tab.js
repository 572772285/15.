;(function($){

	function tab($elem,options){
		this.$elem = $elem;
		this.options = options;
		this.$imgs = this.$elem.find('.imgs');
		this.itemNum = this.$imgs.length;
		this.$controlBtns = $elem.find('.control');

		this.now = this._getCorrectIndex(options.activeIndex);
		this._init();
	}
	Carousel.prototype = {
		constructor:Carousel,
		_init:function(){
			var self = this;
			//添加划入划出的初始化class,隐藏所有的
			this.$elem.addClass('active');
			//显示当前的
			this.$imgs.eq(this.now).show();								
			//初始化显示隐藏插件
			this.$imgs.showHide(this.options);
			this.tab = this._fade;
	},
	_fade(index){
			if(this.now == index) return;
			//当前的隐藏
			this.$carouselItems.eq(this.now).showHide('hide');
			this.$btns.eq(this.now).removeClass('active');
			//下一张显示
			this.$carouselItems.eq(index).showHide('show');
			this.$btns.eq(index).addClass('active');

			this.now = index;
		}

	Carousel.DEFAULTS = {
		css3:false,
		js:true,
		mode:'fade',
		activeIndex:1,
		interval:0
	}

	$.fn.extend({
		carousel:function(options){
			return this.each(function(){
				var $this = $(this);
				var carousel = $this.data('carousel');
				if(!carousel){//单例模式
					options  = $.extend({},Carousel.DEFAULTS,options);
					carousel = new Carousel($(this),options);
					$this.data('carousel',carousel);
				}
				if(typeof carousel[options] == 'function'){
					carousel[options]();
				}
			});
		}
	})

})(jQuery);