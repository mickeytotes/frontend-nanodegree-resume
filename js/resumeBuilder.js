// TODO format and append remaining bio elements
// TODO add picture to bio
// TODO add real pics to projects
// TODO format and append footer contacts
// TODO encapsulate functions in objects

var name = "Michael Satow";
var formattedName =
	HTMLheaderName.replace("%data%", name);

var role = "Front-End Developer"
var formattedRole =
	HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "Michael Satow",
	"role": "Front-End Developer",
	"contacts": {
		"email": "satow.m@gmail.com",
		"phone": "914.661.0181",
		"github": "mickeytotes",
		"twitter": "@michaelsatow",
		"location": "NYC, NY, USA"
	},
	"welcomeMessage": "Thanks for checking out my resume!",
	"skills": [
	"HTML", "CSS", "Javascript"
	]
		};

// Launch Skills section if there are any!

if(bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
};

var work = {
	"jobs": [
	{
		"employer": "The Directors Company",
		"title": "Actor",
		"location": "NYC",
		"dates": "April - June 2016",
		"description": "Off-Broadway Play called 'A Better Place' at the Duke Theater."
	},
	{
		"employer": "Freelance",
		"title": "Front-End Web Developer",
		"location": "NYC",
		"dates": "February 2016 - Present",
		"description": "I've got the world on a string. And it won't unravel."
	}]
};

function displayWork(){
for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
};

displayWork();

var projects = {
	"projects": [
	{
		"title": "Portfolio",
		"dates": "March 2016",
		"description": "Building the shell of the website that will become my Portfolio",
		"images": ["http://placehold.it/350x350", "http://placehold.it/351x351"]
	},
	{
		"title": "Neighborhood Map",
		"dates": "May-June 2016",
		"description": "Made a Neighborhood Map, y'all!",
		"images": ["http://placehold.it/350x350", "http://placehold.it/351x351"]
	}]
};

projects.display = function() {
	for(project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
};

projects.display();

var education = {
	"schools": [
	{
		"name": "Northeastern University",
		"location": "Boston, MA, USA",
		"degree": "BA",
		"major": ["Theatre", " Music Industry"],
		"minor": "Music Industry",
		"dates": "2003-2007",
		"url": "http://www.neu.edu"
	}],
	"onlineCourse": [
	{
		"title": "Front-End Nanodegree",
		"school": "Udacity",
		"dates": "February 2016 - Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};

function displayEducation() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name)
		.replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDegree = formattedSchool + formattedDegree;
		$("#education:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$("#education:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$("#education:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$("#education:last").append(formattedMajor);
	}

	for(course in education.onlineCourse) {
		$("#education").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title)
		.replace("#", education.onlineCourse[course].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
		var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$("#education:last").append(formattedTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
		$("#education:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url)
		.replace("#", education.onlineCourse[course].url);
		$("#education:last").append(formattedOnlineURL);
	}
};

displayEducation();


// function to change last name to all Uppercase. Works with the internationalize button

//function inName(name) {
//	name = name.trim().split(" ");
//	console.log(name);
//	name[1] = name[1].toUpperCase();
//	name[0] = name[0].slice(0,1).toUpperCase() +
//		name[0].slice(1).toLowerCase();
//	return name[0] +" "+name[1];
//};


// Uncomment this and above function to add and Internationalize button to the resume

//$("#main").append(internationalizeButton);


// add the interactive googlemap to the resume.

$("#mapDiv").append(googleMap);

// footer contact

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
$("#footerContacts:last").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts:last").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts:last").append(formattedGitHub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts:last").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts:last").append(formattedLocation);

//var formattedFooterContacts = formattedEmail + formattedGitHub + formattedTwitter +
//	formattedLocation;
//$("#lets-connect").append(formattedFooterContacts);

//$("#footerContacts").append(formattedEmail);







