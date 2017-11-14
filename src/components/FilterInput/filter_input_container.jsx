import React, {Component} from 'react';
import FilterInputView from './filter_input_view'
import PropTypes from 'prop-types';

class FilterInputContainer extends Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
    }

    valueChanged(e) {
        const futureWeeks = e.target.value === "" ? undefined : e.target.value

        this.props.filterChanged(futureWeeks)
    }

    render() {
        return (
            <FilterInputView valueChanged={this.valueChanged}/>
        );
    }
}

FilterInputContainer.propTypes = {
    filterChanged: PropTypes.func
};

export default FilterInputContainer;
