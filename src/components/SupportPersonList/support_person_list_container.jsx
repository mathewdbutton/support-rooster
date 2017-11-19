import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SupportPersonItem from './SupportPersonItem/support_person_item_container'
import Moment from 'moment'
import ImageService from '../../utils/services/image_service'

class SupportPersonListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageList: [],

        }
        this.constructList = this.constructList.bind(this)
        this.getImages = this.getImages.bind(this)
    }

    componentDidMount() {

        this.getImages().then(results => {
            const imageList = results.hits.map(result => {
                return result.previewURL
            })

            this.setState({
                imageList
            })
        })
    }

    constructList() {
        const { people } = this.props
        let supportPersonList = []
        for (let i = 0; i < this.props.futureWeeks; i++) {
            let date = Moment().add(i, "week")
            let currentPerson = people[i % people.length]
            supportPersonList.push(<div key={i} className="column is-one-quarter"><SupportPersonItem
                index={i % people.length}
                startDate={Moment(date).isoWeekday(1)}
                endDate={Moment(date).isoWeekday(5)}
                name={currentPerson}
                image={this.state.imageList[i]}/></div>)
        }
        return supportPersonList
    }

    getImages() {
        return ImageService.get("rooster")
    }

    render() {
        return (
            <div className="support-person-list-container">
                <div className="columns is-multiline">
                    {this.state.imageList === [] ? null : this.constructList()}
                </div>
            </div>

        );
    }
}

SupportPersonListContainer.defaultProps = {
    people: [],
    futureWeeks: 0
}

SupportPersonListContainer.propTypes = {
    people: PropTypes.array.isRequired
}

export default SupportPersonListContainer;
