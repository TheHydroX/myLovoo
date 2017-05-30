//// UI
let newHTML = '<nav class="o-nav o-nav--vertical u-margin-bottom-lg">';
		newHTML += '<h4>TheFinder</h4>';
		newHTML += '<div class="form-group">';
		newHTML += '<input class="form-control" type="text" id="finder_name">';
		newHTML += '<button class="form-control btn btn-success" id="finder_search">suchen!</button>';
		newHTML += '</div>';
		newHTML += '</nav>';
let finder = $('.o-grid > div').first().prepend(newHTML)


//// Finder
$('#finder_search').click(function() {
	$('.o-grid__cell .thumbnail-banner > div > p > span > span').each(function(index) {
		if( $( this ).html().split(',')[0] != $('#finder_name').val()){
			$(this).parent().parent().parent().parent().parent().parent().parent().remove();
		}
	});
});
