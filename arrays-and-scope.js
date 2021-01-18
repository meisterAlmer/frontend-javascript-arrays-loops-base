const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// --------------------------
// Opdracht 1: Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// verwacht antwoord: 6
// --------------------------
let cumLaude = 0;

for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 8) {
    cumLaude++;
  }
}
console.log(`Totaal aantal cum laude studenten: ${cumLaude}`);

// --------------------------
// Opdracht 2: Check welke waarde in de array het hoogste is, en log dit in de console
// verwacht antwoord: 9
// --------------------------
console.log(`Hoogste cijfer: ${Math.max(...grades)}`);

// --------------------------
// Opdracht 3: Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// verwacht antwoord: 6.642857142857143
// --------------------------
let totalValue = 0;

for (let i = 0; i < grades.length; i++) {
  totalValue += grades[i];
}

console.log(`Gemiddelde cijfer: ${totalValue / grades.length}`);
