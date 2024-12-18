const data: [string, number][] = [
    ["Alice", 100],
    ["Bob", 200],
    ["Charlie", 300],
    ["David", 400],
    ["Eve", 500],
    ["Frank", 600],
    ["Grace", 700],
    ["Heidi", 800],
    ["Ivan", 900],
    ["Judy", 1000],
    ["Kevin", 3100],
    ["Larry", 1200],
    ["Mallory", 1300],
    ["Nancy", 1400],
    ["Oliver", 1500],
    ["Peggy", 1600],
    ["Quentin", 1700],
    ["Romeo", 1800],
    ["Sybil", 1900],
    ["Trent", 2000],
    ["Ursula", 2100],
    ["Victor", 2200],
    ["Walter", 2300],
    ["Xander", 2400],
    ["Yvonne", 2500],
    ["Zelda", 2600]
]

type TPerson = {
    name: string;
    score: number;
}

const people: TPerson[] = data.map(([name, score]) => ({ name, score }));

const topScorer = people.reduce((acc, person) => person.score > acc.score ? person : acc, { name: "", score: 0 });

console.log(topScorer);