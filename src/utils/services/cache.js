import request from './request'
import moment from 'moment'

class Cache {

    static make_request(options) {
        let storageKey = options.baseURL
        //Checking if key and time are set OR if it's been a day since we made a request
        if((!localStorage.getItem(storageKey) && !localStorage.getItem(`${storageKey}_TIME`)) || moment().diff(moment(localStorage.getItem(`${storageKey}_TIME`),"DD-MM"),'days') > 0 ) {
            return request(options).then((response) => {
                localStorage.setItem(storageKey, JSON.stringify(response))
                localStorage.setItem(`${storageKey}_TIME`,moment().format("DD-MM"))
                return response
            })
        } else {
            return Promise.resolve(JSON.parse(localStorage.getItem(storageKey)))
        }
    }
}

export default Cache