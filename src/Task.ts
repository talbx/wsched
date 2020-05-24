import {uuidv4} from "./tools";

export interface Task {
    name: string;
    uuid: string;
}

const task = (name: string): Task => {
    return {name: name, uuid: uuidv4()}
};

export const tasks = [
    task("Bad"),
    task("Küche"),
    task("Staubsaugen"),
    task("Einkaufen"),
    task("Essensplanung"),
    task("Aufräumen"),
    task("Pfand + Papier"),
    task("Zettelwirtschaft"),
    task("Wäsche")
];
