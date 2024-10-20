const data: [string, string, number][] = [
    ["Kristijan","Georgiev", 100],
    ["Nadica","Naumova", 70],
    ["Kristina","Avramovska", 75],
    ["David","Najdovski", 62],
    ["Bojan","Ivanovski", 76],
    ["Matea","Mitrovska", 60],
    ["Kristina","Angelevska", 72],
    ["Borjan","Georgievski", 80],
    ["Niki","Ramancev", 96],
    ["Stefan","Stavrevski", 91],
    ["Rastko","Markovski", 93],
    ["Anastasija","Smilkovska", 67],
    ["Ana","Kirovska", 100],
    ["Nada","Chokova", 69],
    ["Filip","Gavrilovski", 75],
    ["Anastasija","Sazdovska", 71],
    ["Filip","Penderkovski", 62],
    ["Sanja","Stefanonik", 73],
    ["Matej","Trajcevski", 91],
    ["Alek","Cibrev", 82],
    ["Luka","Slavkovic", 92],
    ["Aleksandar","Alce", 83],
    ["Tristan","Beason", 79],
    ["Goce","Lazarevski", 98],
    ["Oliver","Twist", 83],
    ["Ivan","Mojsovski", 72]
]

type Student = {
    name: string;
    surname: string;
    score: number;
}

const people: Student[] = data.map(([name, surname, score]) => ({ name, surname, score }));
console.log(data)

const topScorer = people.reduce((acc, person) => person.score > acc.score ? person : acc, { name: "", surname: "", score: 0 });

console.log(topScorer);
const MinScorer = people.reduce((acc, person) => person.score < acc.score ? person : acc, { name: people[0].name, surname: people[0].surname, score: people[0].score });
console.log(MinScorer)