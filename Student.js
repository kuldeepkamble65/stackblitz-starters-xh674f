// Assuming the array of student objects is already available
let students = [
  { name: 'John', chemistryMarks: 80, biologyMarks: 90, dob: '15-03-2001' },
  { name: 'Alice', chemistryMarks: 70, biologyMarks: 95, dob: '21-05-2002' },
  { name: 'Bob', chemistryMarks: 75, biologyMarks: 85, dob: '10-11-2000' },
  // ... more student objects
];

// Sort the array of student objects
students.sort((a, b) => {
  // First priority: Total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1; // a should come before b
  }
  if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1; // b should come before a
  }

  // Second priority: Biology marks
  if (a.biologyMarks > b.biologyMarks) {
    return -1; // a should come before b
  }
  if (a.biologyMarks < b.biologyMarks) {
    return 1; // b should come before a
  }

  // Third priority: Date of birth (assuming format DD-MM-YYYY)
  const aDobParts = a.dob.split('-');
  const bDobParts = b.dob.split('-');
  const aDate = new Date(aDobParts[2], aDobParts[1] - 1, aDobParts[0]);
  const bDate = new Date(bDobParts[2], bDobParts[1] - 1, bDobParts[0]);

  if (aDate < bDate) {
    return -1; // a should come before b
  }
  if (aDate > bDate) {
    return 1; // b should come before a
  }

  // If all criteria are equal, maintain the original order
  return 0;
});

// Print the sorted array of student objects
students.forEach((student) => {
  console.log(
    student.name,
    student.chemistryMarks,
    student.biologyMarks,
    student.dob
  );
});
