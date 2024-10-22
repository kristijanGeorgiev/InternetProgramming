function calculateGrade() {
    var marksInput = document.getElementById('marks');
    var gradeOutput = document.getElementById('gradeOutput');
    var marks = parseFloat(marksInput.value);
    var grade;
    if (marks >= 90) {
        grade = 'A';
    }
    else if (marks >= 80) {
        grade = 'B';
    }
    else if (marks >= 70) {
        grade = 'C';
    }
    else if (marks >= 60) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    gradeOutput.innerText = grade;
}
