import DateHelper from './utils/date_helper'
const millisecondsInWeek = 604800000

beforeEach(() => {
});

afterEach(() => {

});


describe('#millisecondsToWeeks', function() {
    it('results in 1 week', () => {
        let week = DateHelper.millisecondsToWeeks(millisecondsInWeek)
        expect(week).toEqual(1)
    })

    it('returns 6 weeks', () => {
        let week = DateHelper.millisecondsToWeeks(millisecondsInWeek*6)
        expect(week).toEqual(6)
    })

})