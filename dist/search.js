let jobsTitle = [
"Computer",
"Scientist",
"IT Professional",
"UX  Designer & UI Developer",
"SQL Developer",
"Web Designer",
"Web Developer",
"Help Desk Worker/Desktop Support",
"Software Engineer",
"Data Entry",
"DevOps Engineer",
"front-end Developer",
"Backend Developer",
"Computer Programmer",
"Network Administrator",
"Information Security Analyst",
"Artificial Intelligence Engineer",
"Cloud Architect",
"IT Manager",
"Technical Specialist",
"Application Developer",
"Sales Associate",
"Sales Representative",
"Sales Manager",
"Retail Worker",
"Store Manager",
"Sales Representative",
"Sales Manager",
];

// Arama işlevi
function searchFunction() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  var searchResults = document.getElementById("searchResults");

  // Arama sonuçlarını sıfırla
  searchResults.innerHTML = "";

  // Arama girdisi boş ise işlem yapma
  if (filter === "") {
    return;
  }

  // Arama sonuçlarını filtrele
  var matchingJobs = jobsTitle.filter(function(jobsTitle) {
    return jobsTitle.toLowerCase().includes(filter);
  });

  // İlk 5 sonucu listele
  for (var i = 0; i < Math.min(5, matchingJobs.length); i++) {
    var resultItem = document.createElement("div");
    var jobName = matchingJobs[i];
    var boldedJobName = boldMatchingLetters(jobName, filter);
    resultItem.innerHTML = boldedJobName;
    searchResults.appendChild(resultItem);
  }
}

function boldMatchingLetters(jobName, filter) {
  var regex = new RegExp('(' + filter + ')', 'gi');
  var boldedText = jobName.replace(regex, '<b>$1</b>');
  return boldedText;
}

