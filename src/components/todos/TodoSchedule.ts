export class WeeklyTodos {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;

    constructor(monday: string, tuesday: string, wednesday: string, thursday: string, friday: string, saturday: string, sunday: string) {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }
}

export const weekly = [
    new WeeklyTodos("Zettelwirtschaft", "Einkaufen", "Küche", "", "Staubsaugen", "Pfand / Papier", "Aufräumen"),
    new WeeklyTodos("Staubsaugen", "", "Bad", "", "Einkaufen", "Küche", "Wäsche"),
    new WeeklyTodos("", "", "", "", "", "Bad", "")
]
