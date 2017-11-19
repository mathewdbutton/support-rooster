import constants from '../../shared/constants'

import Cache from './cache'

function get(id) {
    return Cache.make_request({
        params: {
            q:id,
            key: constants.IMAGE_SERVICE.KEY
        },
        method: 'GET',
        baseURL: constants.IMAGE_SERVICE.API
    });
}

const ImageService = {
    get
}

export default ImageService;