// TODO change all for-ins to forEach?
// TODO append skills to #skills (figure out why that doesn't work)
// TODO look at css review

// **** Bio ****

var bio = {
    "name": "Michael Satow",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "914.661.0181",
        "email": "satow.m@gmail.com",
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
// also appends contact info to the **** FOOTER ****

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts, #topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts, #topContacts").append(formattedEmail);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts, #topContacts").append(formattedGitHub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts, #topContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts, #topContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        if (bio.skills.hasOwnProperty(skill)) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
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
        "description": "Designing and building interactive, responsive websites," +
        				" maintaning/administrating clients online storefronts to" +
        				"keep bugs out and information up to date."
    }]
};

// encapsulates function to format and display work object

work.display = function() {
    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace
            ("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace
            ("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace
            ("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace
            ("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace
            ("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
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
        "images": ["http://dw-resume.appspot.com/images/dw_neighborhood_s.jpg",
        			"http://conversationagent.typepad.com/.a/6a00d8341c03bb53ef01a5118152b5970c-pi"]
            // placeholder images. First image photo credit DAWOON CHOI.
            // second image photo credit CONVERSATION AGENT.
    }]
};

// encapsulates function to format and display projects object

projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace
            ("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace
            ("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace
            ("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);


            if (projects.projects[project].images.length > 0) {
                for ( var image in projects.projects[project].images) {
                    if (projects.projects[project].images.hasOwnProperty(image)) {
                        var formattedImage = HTMLprojectImage.replace
                        ("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
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
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "date": "February 2016 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

// encapsulates function to format and display education object

education.display = function() {
    for ( var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            $("#education").append(HTMLschoolStart);

            var formattedSchool = HTMLschoolName.replace
            ("%data%", education.schools[school].name)
                .replace("#", education.schools[school].url);
            var formattedDegree = HTMLschoolDegree.replace
            ("%data%", education.schools[school].degree);
            var formattedSchoolDegree = formattedSchool + formattedDegree;
            $("#education").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace
            ("%data%", education.schools[school].dates);
            $("#education").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace
            ("%data%", education.schools[school].location);
            $("#education").append(formattedSchoolLocation);

            var formattedMajor = HTMLschoolMajor.replace
            ("%data%", education.schools[school].major);
            $("#education").append(formattedMajor);
        }
    }

	$("#education").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(course)) {
            var formattedOnlineTitle = HTMLonlineTitle.replace
            ("%data%", education.onlineCourses[course].title)
                .replace("#", education.onlineCourses[course].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace
            ("%data%", education.onlineCourses[course].school);
            var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $("#education").append(formattedTitleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace
            ("%data%", education.onlineCourses[course].date);
            $("#education").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace
            ("%data%", education.onlineCourses[course].url)
                .replace("#", education.onlineCourses[course].url);
            $("#education").append(formattedOnlineURL);
        }
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