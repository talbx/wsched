import moment, {Moment} from "moment";


export const getCurrentWeek = (): Moment[] => {

    const monday = moment().startOf('week').add(1, 'days');
    let tuesday = moment().startOf('week').add(2, 'days');
    let wednesday = moment().startOf('week').add(3, 'days');
    let thursday = moment().startOf('week').add(4, 'days');
    let friday = moment().startOf('week').add(5, 'days');
    let saturday = moment().startOf('week').add(6, 'days');
    let sunday = moment().startOf('week').add(7, 'days');

    return [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
}
