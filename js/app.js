function projectHTMLTemplate(project) {
	return "<p class='title'><a target='_blank' href=" + project.url + ">" +
		project.title + "</a> <span class='body'>" + project.desc + "</span></p>";
}

function showHideProjects() {
	var hide
	var show;

	if ($('.main').is(':visible')) {
		hide = $('.main');
		show = $('.projects')
	} else {
		hide = $('.projects');
		show = $('.main');
	}

	hide.fadeOut(200, function() {
		show.fadeIn(120);
		show.css("display", "table-cell");
	});
}

$(document).ready(function() {
	//add the html for the projects
	$('.card').append(projects.map(projectHTMLTemplate));

	$('.proj-btn').click(showHideProjects);
	$('.projects .close-btn').click(showHideProjects);

	// ignore any clicks to the background if the main content is hidden
	$('.wrapper').click(function(){
		if($('.main').is(':hidden')){
			showHideProjects();
		}
	});

	// ignore clicks made to the project card
	$('.projects .card').click(function(event) {
		event.stopPropagation();
	});
});