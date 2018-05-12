export const getBalance = state => state.user.balance

const initialState = {
    user: {
        balance: 10
    }
}

export default (state = initialState, action) => state
