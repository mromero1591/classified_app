var initalState = {
    items: []
}

const UPDATE_ITEMS = 'UPDATE_ITEMS';

function reducer(state = initalState, action) {
    switch (action.type) {
        case UPDATE_ITEMS:
            return {
                ...state,
                items: action.payLoad
            }
        default:
            return {
                ...state
            }
    }
}

export function updateItems(items) {
    return {
        type: UPDATE_ITEMS,
        payLoad: items
    }
}

export default reducer;