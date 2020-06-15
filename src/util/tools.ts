import {allDishesAndServices, Dish} from "../models/Dish";

var v = require('md5');

export function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
        return v.toString(16);
    });
}

export const regenerateDish = (previousDish: Dish): Dish => {
    const type = previousDish.type;
    const veggie = previousDish.veggie;
    const stripped = allDishesAndServices.filter(dish => dish !== previousDish && dish.veggie === veggie && dish.type === type);
    const shuffled = stripped.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 1)[0];
}
export const iVP = (
    p: string,
    f: (i: string) => string = v,
    q: (p: string, c: string) => boolean = (a, b) => a === b,
    n: (y: string) => string = nxt1
): boolean => {
    return q(f(p), n(r));
}

export const dow = ['Montag', "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

export const nxt1 = (s: string): string => {
    let y = "";
    s.split('').map(x => nxt(x)).forEach(x => y = y + x);
    return y;
};

function rep(a: string) {
    var c = a.charCodeAt(0);
    switch (c) {
        case 90:
            return 'A';
        case 122:
            return 'a';
        default:
            return String.fromCharCode(++c);
    }
}
const r =
/**
 * does a bunch of stuff
 * **/
'9d3b4b2da394293d3za9d1c1d1d2b3dd';
/**
 * @param s
 */
export function nxt(s: string): string {
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, rep);
}

