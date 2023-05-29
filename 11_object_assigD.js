let professor = {
  name: "Bishnupriya Dutt",
  age: 68,
  college: "Bharati Vidyapeet University",
  department: "Information Technology",
  qualification: "PhD",
  degrees: {
    engeneering: "CSC",
    PHD: "Adv Computing",
    informationScience: "Web Database Development",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming",
  ],
  getDegrees: function () {
    let allDegrees = `Engeneering: ${this.degrees.engeneering}, PHD: ${this.degrees.PHD}, Information Science: ${this.degrees.informationScience}`;
    return allDegrees;
  },
};
const detailDegrees = professor.getDegrees();
console.log(`Teacher degrees are:- ${detailDegrees} | Total degrees are:- ${Object.keys(professor.degrees).length}`);
console.log(`---------------------`);
console.table(professor);

console.log(`----------------------------------------------------------------------------`);

//  Adding Total experience
console.log(`Adding new property total experience`);
professor.totalExperience = "14 years";
console.log(`Total Experience: ${professor.totalExperience}`);

// Modifying
console.log(`---------------------`);
console.log(`Modifying properties`);
console.log(`Before modifying - College: ${professor.college}`);
professor.college = "JSPM College";
console.log(`After modifying - College: ${professor.college}`);

// Add one new Certificate
console.log(`---------------------`);
professor.certificates.push("Oracle Certified");
const lastElement = professor.certificates.length - 1;
console.log(`Last element in Certificates is: ${professor.certificates[lastElement]}`);

console.table(professor);
