function calculateGrade(): void {
    const marksInput: HTMLInputElement = document.getElementById('marks') as HTMLInputElement;
    const gradeOutput: HTMLElement = document.getElementById('gradeOutput')!;
    const marks: number = parseFloat(marksInput.value);

    let grade: string;

    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    gradeOutput.innerText = grade;
}
