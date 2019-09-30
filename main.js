function calc(){
  const studentsPerCourse = document.getElementById("perc").value
  const coursesPerTerm = document.getElementById("pert").value
  const countOfTerms = document.getElementById("cot").value
  const totalst = parseInt(studentsPerCourse)*parseInt(coursesPerTerm)*parseInt(countOfTerms)
  document.getElementById("calculate").innerHTML=totalst
}

