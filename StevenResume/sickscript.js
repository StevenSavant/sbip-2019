$("[data-menu-underline-from-center] a").addClass("underline-from-center");

var javaInfo = {
    title: "Java",
    details: "At the University of Louisiana at Monroe, Java was our primary coding language. " +
    "Using Java we worked on projects to train in various programming principles"
}

var htmlInfo = {
    title: "HTML",
    details: "This pages were built using simple HTML"
}

var nodeJSInfo = {
    title: "NodeJS",
    details: "I've used NodeJS in the past for my ULM Capstone project. It was used to test, debut, and compile the front-end code."
}

var cssInfo = {
    title: "CSS",
    details: "Stands for Cascading-Style-Sheets if that scores me any points. I levereaged the CSS Library from the Foundation UI (<a href='https://https://foundation.zurb.com/'>Check it out here<a>)" + 
    "This helped me build the simple webite quickly, while still having it look decent. How'd I do?"
}

var temp = {
    title: "Uh-Oh",
    details: "Haha!, I actually haven't finished this page yet. but Click on HTML, CSS, NodeJS, or Java to get cool factoids thrown at you. K byyyeeee...."
}



function getDetails(topic) {
    switch(topic) {
        case "Java":
            setTechCardInfo(javaInfo)
            break;
        case "HTML":
            setTechCardInfo(htmlInfo)
            break;
        case "NodeJS":
            setTechCardInfo(nodeInfo)
            break;
        case "CSS":
            setTechCardInfo(cssInfo)
            break;
        default:
            setTechCardInfo(temp)
    }
}

function setTechCardInfo(json) {
    var cardtitle = document.getElementById("card-title")
    cardtitle.innerHTML = json.title
    var cardinfo = document.getElementById("card-content")
    cardinfo.innerHTML = json.details
}