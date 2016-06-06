// **** Header Name and Role ****

var name = "Michael Satow";
var formattedName =
    HTMLheaderName.replace("%data%", name);

var role = "Front-End Developer";
var formattedRole =
    HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// **** Bio ****

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
        "HTML", "CSS", "Javascript", "Didgeridoo"
    ],
    // picture grabbed from my twitter account
    "biopic": "https://pbs.twimg.com/profile_images/1349562784/glassesLookup.jpg"
};

// encapsulates function to format and display bio object

bio.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    $("#topContacts:last").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts:last").append(formattedEmail);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts:last").append(formattedGitHub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts:last").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts:last").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkill);
    }
};

bio.display();

// **** Work ****

var work = {
    "jobs": [{
        "employer": "The Directors Company",
        "title": "Actor",
        "location": "NYC",
        "dates": "April - June 2016",
        "description": "Off-Broadway Play called 'A Better Place' at the Duke Theater."
    }, {
        "employer": "Freelance",
        "title": "Front-End Web Developer",
        "location": "NYC",
        "dates": "February 2016 - Present",
        "description": "Designing and building interactive, responsive websites, maintaning/administrating clients online storefronts to keep bugs out and information up to date."
    }]
};

// encapsulates function to format and display work object

work.display = function() {
    for (job in work.jobs) {
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

work.display();

// **** Projects ****

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "March 2016",
        "description": "Building the shell of the website that will become my Portfolio",
        "images": ["https://scontent.cdninstagram.com/t51.2885-15/s280x280/e35/12677407_2012301288994272_1550183328_n.jpg?ig_cache_key=MTIyNDg3MzUxMjU4MDAzMTAxOA%3D%3D.2",
                "http://dw-portfolio.appspot.com/images/dw_portfolio_s.jpg"
            ]
            // placeholder images of course. First image is from my instagram account.
            // Second picture photo credit DAWOON CHOI.
    }, {
        "title": "Neighborhood Map",
        "dates": "May-June 2016",
        "description": "Made a Neighborhood Map, y'all!",
        "images": ["http://dw-resume.appspot.com/images/dw_neighborhood_s.jpg", "http://conversationagent.typepad.com/.a/6a00d8341c03bb53ef01a5118152b5970c-pi"]
            // placeholder images. First image photo credit DAWOON CHOI. Second image photo credit CONVERSATION AGENT.
    }]
};

// encapsulates function to format and display projects object

projects.display = function() {
    for (project in projects.projects) {
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

// **** Education ****

var education = {
    "schools": [{
        "name": "Northeastern University",
        "location": "Boston, MA, USA",
        "degree": "BA",
        "major": ["Theatre", " Music Industry"],
        "minor": "Music Industry",
        "dates": "2003-2007",
        "url": "http://www.neu.edu"
    }],
    // TODO go back and list all individual supplemental courses when nanodegree is completed
    "onlineCourse": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "February 2016 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

// encapsulates function to format and display education object

education.display = function() {
    for (school in education.schools) {
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

    for (course in education.onlineCourse) {
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

education.display();


// Uncomment this and the .append below to add Internationalize button.
// Function to change last name to all Uppercase.

//function inName(name) {
//	name = name.trim().split(" ");
//	console.log(name);
//	name[1] = name[1].toUpperCase();
//	name[0] = name[0].slice(0,1).toUpperCase() +
//		name[0].slice(1).toLowerCase();
//	return name[0] +" "+name[1];
//};


// Uncomment this and above function to add an Internationalize button to the resume

//$("#main").append(internationalizeButton);


// adds the interactive googlemap to the resume.

$("#mapDiv").append(googleMap);

// **** Footer Contact ****

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