import DateHelper from './date_helper'

function getSupportListOrder(offset, people) {
    //Bring the current person to the front of the array
    return people
        .slice(offset)
        .concat(people.slice(0, offset))
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