import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SupportPersonHeroView from './support_person_hero_view'

class SupportPersonHeroContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded:false
        }
    }

    componentDidMount() {
        setTimeout(() =>  this.setState({
            loaded:true
        }))

    }

    componentWillUnmount() {
        this.setState({
            loaded:false
        })
    }

    formatDates(date) {
        return date.format("dddd, MMM Do")
    }


    render() {
        const { startDate, endDate, name, index, image } = this.props
        const {loaded} = this.state
        return (
            <SupportPersonHeroView startDate={this.formatDates(startDate)}
                                   endDate={this.formatDates(endDate)}
                                   name={name}
                                   index={index}
                                   image={image}
                                   loaded={loaded}
            />
        );
    }


}

SupportPersonHeroContainer.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
};

export default SupportPersonHeroContainer;
