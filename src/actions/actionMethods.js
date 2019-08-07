import axios from 'axios';

const stackExchangeHost="https://api.stackexchange.com/2.2"

export function getFeaturedQuestion(pageNo){
    let config = {
        url: stackExchangeHost+`/questions/featured/?page=${pageNo}&order=desc&sort=activity&site=stackoverflow`,
        method:'get'
    }
    return axios(config).then(response=>response)
}

export function getUserProfile(id){
    let config = {
        url: stackExchangeHost+`/users/${id}?order=desc&sort=reputation&site=stackoverflow`,
        method:'get'
    }
    return axios(config).then(response=>response)
}