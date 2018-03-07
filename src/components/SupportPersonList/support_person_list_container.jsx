import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SupportPersonItem from './SupportPersonItem/support_person_item_container'
import SupportHeroContainer from './SupportPersonHero/support_person_hero_container'
import Moment from 'moment'
import ImageService from '../../utils/services/image_service'
import Constants from '../../shared/constants'

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
            if(i === 0) {
                supportPersonList.push(<div key={i} className="column is-offset-one-third is-one-third"><SupportHeroContainer
                    index={i % people.length}
                    startDate={Moment(date).isoWeekday(1)}
                    endDate={Moment(date).isoWeekday(5)}
                    name={currentPerson}
                    image={this.state.imageList[i]}/></div>);
                supportPersonList.push(<div key={-1} className="column  is-one-third"> </div>)
            } else {
                supportPersonList.push(<div key={i} className="column is-one-quarter-desktop is-half-mobile"><SupportPersonItem
                    index={i % people.length}
                    startDate={Moment(date).isoWeekday(1)}
                    endDate={Moment(date).isoWeekday(5)}
                    name={currentPerson}
                    image={this.state.imageList[i]}/></div>)
            }

        }
        return supportPersonList
    }

    getImages() {
        console.log(Constants.IMAGE_SERVICE.SEARCH_TERM)
        return ImageService.get(Constants.IMAGE_SERVICE.SEARCH_TERM)
    }

    render() {
        return (
            <div className="support-person-list-container">
                <div className="columns  is-multiline is-mobile is-desktop">
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
