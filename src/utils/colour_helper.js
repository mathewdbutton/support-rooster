import RandomColor from 'randomcolor'
import CONSTANTS from '../shared/constants'

const getRandomColour = RandomColor({
    count: 10,
    hue: CONSTANTS.THEME.TILE_SET,
    format: 'rgb'
});

const getAppropriateTextColour = (rgba) => {
    rgba = rgba.match(/\d+/g);
    if (((rgba[0] * 0.299) + (rgba[1] * 0.587) + (rgba[2] * 0.114)) > 186) {
        return 'black';
    } else {
        return 'white';
    }
}

export {getRandomColour, getAppropriateTextColour}