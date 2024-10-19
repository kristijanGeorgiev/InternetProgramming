export {}

const add = (a:number, b?:number) => {
    if (b === undefined) {
        return a;
    }
    return a + b;
}

const result = add(3, 4);

const len = (s:string) => s.length;

const res2 = add(3);