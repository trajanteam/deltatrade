export const BALANCE_FETCH_REQUESTED = "BALANCE_FETCH_REQUESTED"
export const balanceFetchRequested = token => ({
    type: BALANCE_FETCH_REQUESTED,
    token: token
})

export const BALANCE_FETCH_SUCCEEDED = "BALANCE_FETCH_SUCCEEDED"
export const balanceFetchSucceeded = bal => ({
    type: BALANCE_FETCH_SUCCEEDED,
    balance: bal
})

export const BALANCE_FETCH_FAILED = "BALANCE_FETCH_FAILED"
export const balanceFetchFailed = err => ({
    type: BALANCE_FETCH_FAILED,
    message: err
})

export const ORDER_PLACE_REQUESTED = "ORDER_PLACE_REQUESTED"
export const orderPlaceRequested = (base, quote, amount, price, side) => ({
    type: ORDER_PLACE_REQUESTED,
    request: {
        data: {
            base: base,
            quote: quote,
            amount: amount,
            price: price
        },
        side: side
    }
})

export const ORDER_PLACE_SUCCEEDED = "ORDER_PLACE_SUCCEEDED"
export const orderPlaceSucceeded = res => ({
    type: ORDER_PLACE_SUCCEEDED,
    result: res
})

export const ORDER_PLACE_FAILED = "ORDER_PLACE_FAILED"
export const orderPlaceFailed = () => ({
    
})
