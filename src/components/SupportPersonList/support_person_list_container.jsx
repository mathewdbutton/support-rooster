import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SupportPersonItem from './SupportPersonItem/support_person_item_container'
import Moment from 'moment'


class SupportPersonListContainer extends Component {
    constructor(props) {
        super(props)
        this.constructList = this.constructList.bind(this)
    }

    constructList() {
        const { people } = this.props
        let supportPersonList = []
        for (let i = 0; i < this.props.futureWeeks; i++) {
            let date = Moment().add(i, "week")
            let currentPerson = people[i % people.length]
            supportPersonList.push(<SupportPersonItem key={i}
                                                      index={i % people.length}
                                                      startDate={Moment(date).isoWeekday(1)}
                                                      endDate={Moment(date).isoWeekday(5)}
                                                      name={currentPerson}/>)
        }
        return supportPersonList
    }


    render() {
        return (
            <div className="support-person-list-container">
                <h3>Support People</h3>
                {this.constructList()}
            </div>

        );

    }
}

SupportPersonListContainer.defaultProps = {
    people: [],
    futureWeeks: 5
}

SupportPersonListContainer.propTypes = {
    people: PropTypes.array.isRequired
}

export default SupportPersonListContainer;
