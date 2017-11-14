const milliSecondsToWeeks = (milliseconds) => {
    const seconds = milliseconds/1000
    const weeks = seconds/(60 * 60 * 24 * 7)
    return weeks
}

export {milliSecondsToWeeks}