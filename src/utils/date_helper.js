const millisecondsToWeeks = (milliseconds) => {
    const seconds = milliseconds/1000
    return seconds/(60 * 60 * 24 * 7)
}


const DateHelper = {
    millisecondsToWeeks
}

export default DateHelper;