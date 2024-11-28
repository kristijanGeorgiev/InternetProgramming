export type Author = {
    id: number;
    name: string;
    birth_date: string;
    nationality: string;
    bibliography: {
        name: string;
        year: number;
        type: string;
    }
}
export const Author = {
    empty: {
        id: 0,
        name: 'N/A',
        birth_date: '',
        nationality: '',
        bibliography: {
            name: '',
            year: 0,
            type: ''
        }
    } as Author
}