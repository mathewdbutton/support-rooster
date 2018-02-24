import Moment from 'moment'
import PeopleReorderer from '../utils/people_reorderer'
let supportList;

beforeEach(() => {
    supportList = ["mat", "steve", "bob"];
});

afterEach(() => {

});


describe('#getSupportListOrder', () => {
    it('people array shifts by 1 - Reverse', () => {
        let newOrder = PeopleReorderer.getSupportListOrder(-1, supportList)
        expect(newOrder).toEqual(["bob","mat","steve"])
    })

    it('people array shifts by 1', () => {
        let newOrder = PeopleReorderer.getSupportListOrder(1, supportList)
        expect(newOrder).toEqual(["steve","bob","mat"])
    })

    it('people array shifts by 2', () => {
        let newOrder = PeopleReorderer.getSupportListOrder(2, supportList)
        expect(newOrder).toEqual(["bob","mat","steve"])
    })

    it('people array shifts by 3 - reset', () => {
        let newOrder = PeopleReorderer.getSupportListOrder(3, supportList)
        expect(newOrder).toEqual(supportList)
    })

    it('people array remains the same', () => {
        let newOrder = PeopleReorderer.getSupportListOrder(0, supportList)
        expect(newOrder).toEqual(supportList)
    })
})

describe('#supportList', () => {
  it('array shifts forward', () => {
    let array = PeopleReorderer.getSupportList(Moment(), Moment().add(1,"weeks"), supportList);
    expect(array).toEqual(["steve","bob","mat"]);
  })

  it('array shifts backward', () => {
      let array = PeopleReorderer.getSupportList(Moment(), Moment().add(-1,"weeks"), supportList);
      expect(array).toEqual(["bob","mat","steve"]);
  })
})