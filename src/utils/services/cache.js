import request from './request'

class Cache {

    static make_request(options) {
        let storageKey = options.baseURL
        if(!localStorage.getItem(storageKey)) {
            return request(options).then((response) => {
                localStorage.setItem(storageKey, JSON.stringify(response))
                localStorage.setItem(`${storageKey}_TIME`,Date.now())
                return response
            })
        } else {
            return Promise.resolve(JSON.parse(localStorage.getItem(storageKey)))
        }
    }
}

export default Cache