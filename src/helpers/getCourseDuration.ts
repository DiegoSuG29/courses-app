export default function getCourseDuration(minutes: number): string {
    let duration = "";
    let hrsStr, minsStr = "";

    let hrs = Math.floor(minutes / 60);
    let mins = minutes % 60;

    if (hrs < 10) {
        hrsStr = "0" + hrs;
    }
    else {
        hrsStr = hrs;
    }
    if (mins < 10) {
        minsStr = "0" + mins;
    }
    else {
        minsStr = String(mins);
    }

    if (hrs === 1) {
        duration = hrsStr + ":" + minsStr + " hour";
    }
    else{
        duration = hrsStr + ":" + minsStr + " hours";
    }

    return duration;
}