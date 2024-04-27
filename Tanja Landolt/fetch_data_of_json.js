// Get the 'Year' property of the 'Cloud' project
var year = data.projects[0].year;

// Get the h6 element with the id 'year'
var yearElement = document.querySelector("#year");

// Set the text of the yearElement to the year
yearElement.textContent = year;

// Get the 'Collaborator' property of the 'Cloud' project
var collaborator = cloudProject.Collaborator;

// Get the h6 element with the id 'collaborator'
var collaboratorElement = document.querySelector("#collaborator");

// Set the text of the collaboratorElement to the collaborator
collaboratorElement.textContent = collaborator;
