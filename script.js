function determineTriangle(a, b, c) {
  if (a === b && b === c) {
    window.alert("The triangle is EQUILATERAL.");
  } else if (a === b || b === c || a === c) {
    window.alert("The triangle is ISOSCELES.");
  } else {
    window.alert("The triangle is SCALENE.");
  }
}

function main() {
  var sideA, sideB, sideC;

  do {
    sideA = parseFloat(prompt("Enter the length of side A:"));
  } while (isNaN(sideA));

  do {
    sideB = parseFloat(prompt("Enter the length of side B:"));
  } while (isNaN(sideB));

  do {
    sideC = parseFloat(prompt("Enter the length of side C:"));
  } while (isNaN(sideC));

  determineTriangle(sideA, sideB, sideC);
}
main();
