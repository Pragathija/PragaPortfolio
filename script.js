var home=document.getElementById("homePage");
var about=document.getElementById("aboutPage");
var acheive=document.getElementById("AheivePage");
var skill=document.getElementById("skillPage");
var course=document.getElementById("coursePage");
var project=document.getElementById("projectPage");
var passion=document.getElementById("passionPage");

function openAbout() {
    home.style.display="none";
    about.style.display="block";
    acheive.style.display="none";
    skill.style.display="none";
    course.style.display="none";
    project.style.display="none";
    passion.style.display="none";
}

function openHome() {
    home.style.display="block";
    about.style.display="none";
    acheive.style.display="none";
    skill.style.display="none";
    course.style.display="none";
    project.style.display="none";
    passion.style.display="none";
}

function openAchieve() {
    home.style.display="none";
    about.style.display="none";
    acheive.style.display="block";
    skill.style.display="none";
    course.style.display="none";
    project.style.display="none";
    passion.style.display="none";
}

function openSkill() {
    home.style.display="none";
    about.style.display="none";
    acheive.style.display="none";
    skill.style.display="block";
    course.style.display="none";
    project.style.display="none";
    passion.style.display="none";
}
function openCourse() {
    home.style.display="none";
    about.style.display="none";
    acheive.style.display="none";
    skill.style.display="none";
    course.style.display="block";
    project.style.display="none";
    passion.style.display="none";
}
function openProject() {
    home.style.display="none";
    about.style.display="none";
    acheive.style.display="none";
    skill.style.display="none";
    course.style.display="none";
    project.style.display="block";
    passion.style.display="none";
}
function openPassion() {
    home.style.display="none";
    about.style.display="none";
    acheive.style.display="none";
    skill.style.display="none";
    course.style.display="none";
    project.style.display="none";
    passion.style.display="block";
}
