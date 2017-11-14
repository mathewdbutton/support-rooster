import React from 'react';
import PropTypes from 'prop-types';
import SupportPersonItemView from './support_person_item_view'

const SupportPersonItemContainer = (props) => {
    const {startDate, endDate, name, index} = props

    const formatDates = (date) => {
        return date.format("dddd, MMMM Do")
    }

    return (
        <SupportPersonItemView startDate={formatDates(startDate)} endDate={formatDates(endDate)} name={name} index={index} />
    );

}

SupportPersonItemContainer.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
};

export default SupportPersonItemContainer;
