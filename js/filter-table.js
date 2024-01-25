$(document).ready(function() {
	if($(".filter-search input").length){
		
		$(".filter-search input").on("keyup touchend", function() {
			var value = $(this).val().toLowerCase();
			// update css
			if(!$(".filter-results").hasClass('ui')){
				$(".filter-results tbody tr").filter(function() {
					$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
				});
				$(".filter-results tbody tr:visible:odd").css('background', '#eeeeee');
				$(".filter-results tbody tr:visible:even").css('background', '#fff');				
			} else {
				$(".filter-results tbody tr").filter(function() {
					if($(this).text().toLowerCase().indexOf(value) > -1)
						$(this).removeAttr('style');
					else
						$(this).attr('style', 'display: none!important;');
				});
			}			
		});		  
    
	}	
});