// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.


  

 var projects={
 	"projects":[
 	{
 		"title":"Takaful",
 		"dates":"21/1/2017",
 		"description":"charity social media Web & Mobile App for helping poor pepole. I work as a FullStack Wed Developer. I work with 5 colleuges on it, two on web & Building API for Mobile app, two on mobile and one making docs",
 		"images":["images/pr1.png"]
 	},
 	{
 		"title":"Menofea FCI Website",
 		"dates":"21/1/2016",
 		"description":"a web site for my faculty to help students and instructors to comunicate and sharing mateials. I worked as a FullStack developer also with 7 colleuges",
 		"images":["images/1.jpg"]
 	}
 	]
 };
var work={
	/*"jobs":[
		{
			"employer":"hossam",
			"title":"fullstack",
			"location":"Cairo,Egypt",
			"dates":"11/3/2017",
			"description":"awesomejob"
		},
		{
			"employer":"ahmed",
			"title":"webdesigner",
			"location":"Alexandria,Egypt",
			"dates":"11/4/2017",
			"description":"awesomejob"
		}
	]
*/
};
 var bio={
	"name":"Hossam",
	"role":"Fullstack web Developer",
	"contacts":{"mobile":"+201143145901",
	"email":"hosssamhassan14895@gmail.com",
	"githup":"hossamhassan722",
	"Facebook":"hossam_55_@yahoo.com",
	"location":"Menofia,Egypt"
	},
	"skills":["HTML5 & CSS3 & BootStrap Framework 85%","JavaScript&Jquery With Angular & knockout Frameworks 80%","JavaEE(sevlet&JSP) 70%","Core PHP and Learning Larvel 75%","APIs & Webservice building and using 60%"],
	"biopic":"images/197x148.gif",
	"welcomeMessage":"Welcome to my resume page"
};
var education={
	"schools" : [
	{
		"name" : "FCI Menofia",
		"location" : "Menofia,Egypt",
		"degree" : "bachelor", 
		"majors" : ["computer science"],
		"dates" : "2013-2017",
		"url" : "http://mu.menofia.edu.eg/fci/Home/en"
	}],
	"onlineCourses" : [
		{
			"title":"front-end Udacity",
			"school":"udacity",
			"dates":"14/2/2017",
			"url":"https://classroom.udacity.com/nanodegrees"
		}
	]

};
bio.display=function(){
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedemail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedpic=HTMLbioPic.replace("%data%",bio.biopic);
var formattedWM=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedFacebook=HTMLtwitter.replace("%data%",bio.contacts.Facebook);
var formattedGit=HTMLgithub.replace("%data%",bio.contacts.githup);
var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.location);
 $("#header").append(formattedName);
 $("#header").append(formattedRole);
 $("#header").append(formattedpic);
 $("#header").append(formattedWM);
 $("#topContacts").append(formattedemail,formattedmobile,formattedFacebook,formattedGit,formattedlocation); 
 $("#footerContacts").append(formattedemail,formattedmobile,formattedFacebook,formattedGit,formattedlocation); 
 $("#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill){
var formattedSkill2=HTMLskills.replace("%data%",skill);
	$("#skills").append(formattedSkill2);
});
};
bio.display();
/*work.display=function(){
 
work.jobs.forEach(function(job){

	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",job.employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",job.title);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates=HTMLworkDates.replace("%data%",job.dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription=HTMLworkDescription.replace("%data%",job.description);
	$(".work-entry:last").append(formattedDescription);
	var formattedLocation=HTMLworkLocation.replace("%data%",job.location);
	$(".work-entry:last").append(formattedLocation);
});
};
 
work.display();*/
$(document).click(function(loc){
var x=loc.pageX;
var y=loc.pageY;
logClicks(x,y);

});

$('#main').append(internationalizeButton);
projects.display=function(){

projects.projects.forEach(function(project){

	$("#projects").append(HTMLprojectStart);
	var formattedTitle=HTMLprojectTitle.replace("%data%",project.title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates=HTMLprojectDates.replace("%data%",project.dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription=HTMLprojectDescription.replace("%data%",project.description);
	$(".project-entry:last").append(formattedDescription);
	if ((project.images.length) >= 0 ) {

		project.images.forEach(function(img){
             var formattedImage=HTMLprojectImage.replace("%data%",img);
			$(".project-entry:last").append(formattedImage);

		});
	}

});


};
projects.display();
education.display=function(){
	$("#education").append(HTMLschoolStart);
education.schools.forEach(function(school){
var formattedName=HTMLschoolName.replace("%data%",school.name).replace("#",school.url);
 $(".education-entry:last").append(formattedName);
 var formattedDegree=HTMLschoolDegree.replace("%data%",school.degree);
 $(".education-entry:last").append(formattedDegree);
 var formattedDates=HTMLschoolDates.replace("%data%",school.dates);
 $(".education-entry:last").append(formattedDates);
 var formattedLocation=HTMLschoolLocation.replace("%data%",school.location);
 $(".education-entry:last").append(formattedLocation);
  var formattedMajor=HTMLschoolMajor.replace("%data%",school.majors);
 $(".education-entry:last").append(formattedMajor);

});

education.onlineCourses.forEach(function(onlineCourse){
$(".education-entry:last").append(HTMLonlineClasses);

  var formattedTitle=HTMLonlineTitle.replace("%data%",onlineCourse.title);
 $(".education-entry:last").append(formattedTitle);
 var formattedSchool=HTMLonlineSchool.replace("%data%",onlineCourse.school);
 $(".education-entry:last").append(formattedSchool);
 var formattedDates1=HTMLonlineDates.replace("%data%",onlineCourse.dates);
 $(".education-entry:last").append(formattedDates1);
 var formattedUrl=HTMLonlineURL.replace("%data%",onlineCourse.url);
 $(".education-entry:last").append(formattedUrl);

});

};
education.display();

$("#mapDiv").append(googleMap);