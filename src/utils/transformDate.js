export const transformDate = (date, time) => {
    const localTime = new Date();
    const timeZone = localTime.getTimezoneOffset();

    let tempTime = time.substring(0, 8);
    const utcDateTimeString = date + 'T' + tempTime;

    let UTCDate = new Date(utcDateTimeString);

    let LocalDate = new Date(UTCDate.getTime() - (timeZone * 60 * 1000))

    const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "numeric", 
    };

    return LocalDate.toLocaleString("en-US", options);
};