const { formatTime } = require("./formatTime");

function getFormattedTime(time?: number | undefined): string {
    const today = time ? new Date(time) : new Date();
    const hours = formatTime(today.getHours(), "hours");
    const minutes = formatTime(today.getMinutes(), "minutes");
    const seconds = formatTime(today.getSeconds(), "seconds");
    const amOrPm = today.getHours() < 12 ? "AM" : "PM";
    const formattedTime: string = `${hours}:${minutes}:${seconds} ${amOrPm}`;
    return formattedTime;
}

export { getFormattedTime };
