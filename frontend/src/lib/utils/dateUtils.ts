import { DateTime } from 'luxon';
const dateString = "Fri, 26 Nov 2021 21:06:25 -0500";
/* Nov 22 * 2:30am * Source */

export const parseDate = (date: string) => {
    const dateSplit = date.split(' ');
    const dateParse = `${dateSplit[2]} ${dateSplit[1]}`

    const keepzone = DateTime.fromFormat(date, "EEE, dd MMM y TT ZZZ")
    const time = new Date(keepzone.ts)
    const timeParse = time.toLocaleTimeString('en-US', { hour12: false }).split(':');

    return [dateParse, `${timeParse[0]}:${timeParse[1]}`]
}
