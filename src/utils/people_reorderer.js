import DateHelper from './date_helper'

function getSupportListOrder(offset, people) {
    //Bring the current person to the front of the array
    //["mat","bob","steve"] offset 2 = ["steve","bob","mat"]
    let cycle = offset % people.length
    return people
        .slice(cycle)
        .concat(people.slice(0, cycle))
}

function getSupportList(fromDate, tilDate, people) {
    let offset = DateHelper.millisecondsToWeeks(tilDate - fromDate);
    return getSupportListOrder(offset, people);
}

const PeopleReorderer = {
    getSupportList,
    getSupportListOrder
}

export default PeopleReorderer;