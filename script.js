function calculateAverage() {
  var name = document.getElementById("name").value;
  var gradesText = document.getElementById("grades").value;
  if (name === "" || gradesText === "") {
    alert("Please enter both name and grades.");
    return;
  }
  var gradesArray = gradesText.split(",");
  var total = 0;
  for (var i = 0; i < gradesArray.length; i++) {
    total += Number(gradesArray[i]); // Convert each to number and add to total
  }

  var average = total / gradesArray.length;
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML += name + " - Average Grade: " + average.toFixed(2) + "<br>";
  document.getElementById("name").value = "";
  document.getElementById("grades").value = "";
}
