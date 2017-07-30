const initialState = {
    users: {
        foo: {
            id: 'foo',
            name: 'Paulo'
        }
    },
    day: 'Sunday'
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
