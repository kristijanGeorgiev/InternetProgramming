export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

export const Todo = {
    empty: Object.freeze<Todo>({
        id: 0,
        title: "",
        completed: false,
    }),
}