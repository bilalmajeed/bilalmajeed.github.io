var projects = [{
    "title": "Handwritten Digits OCR Tool",
    "desc": "A tool that recognizes handwritten digits, created to get a better understanding of OpenCV and machine learning libraries such as 'scikit-learn'",
    "url": "https://github.com/bilalmajeed/digit_ocr"
}, {
    "title": "RateMyCar",
    "desc": "A machine learning tool that rates your car based on statistical data",
    "url": "https://github.com/bilalmajeed/RateMyCar"
}, {
    "title": "ECE2019",
    "desc": "A landing page for the Electrical/Computer Engineering program at UW",
    "url": "https://github.com/bilalmajeed/ece2019"
}, {
    "title": "Smart Switch",
    "desc": "An app to control a custom made power switch using an Android device",
    "url": "https://github.com/bilalmajeed/LED_Remote"
}, {
    "title": "RPI Cloud Server",
    "desc": "Online data storage created using a Raspberry Pi",
    "url": "#"
}];

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