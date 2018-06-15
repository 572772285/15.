// console.log($('.fl'))



$(function(){
		$('.dropdown').hover(function(){
			var $this=$(this);
			console.log($this.data('active'))
			// var menu=$this.data('active')
			$(this).addClass($this.data('active')+'-active')
		},function(){
			$(this).removeClass($(this).data('active')+'-active')
		})

})