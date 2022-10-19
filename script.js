// Typage dynamique
// let maVariable;
// console.log(maVariable);
// maVariable = 'bonjour';
// console.log(typeof (maVariable));

// const monObjet = {
//     key1: 'valeur1',
//     key2: 'valeur2',
//     greet() {
//         console.log('Bonjour');
//     }
// }
class Person {
    constructor(nom, age, genre) {
        this.nom = nom;
        this.age = age;
        this.genre = genre;
    }
    getYearOfBirth() {
        return 2022 - this.age;
    }
}
const person1 = new Person('Heritier', 45, 'M');
console.log(person1.getYearOfBirth());