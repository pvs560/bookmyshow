import history from "../history"

export const createReducer = (initialState, reducerMap) => {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];
        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export const createConstants = (...constants) => {
    let reducedConst = constants.reduce((obj, constant) => {
        var newObject = {
            ...obj,
            [constant]: constant.toString()
        }
        return newObject;
    }, {});
    const freezedConst = Object.freeze(reducedConst);
    return freezedConst;
}

export function replaceHistory(newState) {
    history.replace(newState);
  }
  
  export function pushHistory(newState) {
    history.push(newState);
  }
