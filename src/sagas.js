import { call, put, takeEvery, takeLatest, all, fork } from 'redux-saga/effects'
import { balanceFetchRequested, BALANCE_FETCH_REQUESTED, 
         balanceFetchSucceeded, BALANCE_FETCH_SUCCEEDED,
         balanceFetchFailed,    BALANCE_FETCH_FAILED,
         orderPlaceRequested,   ORDER_PLACE_REQUESTED,
         orderPlaceSucceeded,   ORDER_PLACE_SUCCEEDED} from './actions'
import { getBalance } from './reducers'

import web3 from './web3'
import { deltatrade } from './deltatrade'

import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)

const delay = ms => new Promise(res => setTimeout(res, ms))

const API_ROOT = 'localhost:8080'

const responseBody = res => res.body

const requests = {
    del: (url) => 
        superagent.del(`${API_ROOT}${url}`).then(responseBody),
    get: (url) => 
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) => 
        superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) => 
        superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
}

const order = {
    place: data => 
        requests.post(`/order`, data)
}

function* placeOrder(action) {
    const addr = window.web3.eth.defaultAccount
    const data = {
        ...action.request.data,
        address: addr
    }
    const sign = yield call(web3.eth.sign, data, addr, (err, res) => {
        if (err) {
            return Promise.reject(err)
        }            
        return Promise.resolve(res)
    })
    console.log("a")
    const request = {
        ...action.request,
        data: data,
        sign: sign
    }
    const res = yield call(order.place, request)
    yield put(orderPlaceSucceeded, res)
}

function* tick() {
    while(true) {
        yield call(delay, 1000)
        //let token = yield select(getToken)
        let token = "ETH"
        yield put(balanceFetchRequested, token)
    }
}
/*
function* fetchBalance() {
    try {
        const token = action.token
        if (token == "ETH") {
            const balance = yield call(web3.eth.getBalance, web3.eth.defaultAccount)
            yield put(balanceFetchSucceeded(balance))
        } else {
            /*
            const contract = new web3.eth.Contract(ERC20.abi, token)
            const balance = yield call(contract.methods.balanceOf.call())
            yield put(balanceFetchSucceeded(balance))

        }
    } catch (e) {
        yield put(balanceFetchFailed(e))
    }
}

function* watchBalance() {
    while(true) {
        yield fetchBalance()
        yield delay(1000)
    }
}
*/
export default function* saga() {
  yield takeEvery(ORDER_PLACE_REQUESTED, placeOrder)
}
