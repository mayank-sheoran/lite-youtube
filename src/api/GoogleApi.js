import React from 'react'
import axios from 'axios'

const KEY = 'AIzaSyCn8ShJFLW-lD8zI_akeVVwPNjDcycrBAw'
const instance = axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        maxResults : 5,
        part : 'snippet',
        key : KEY
    }
}
)

export default instance


