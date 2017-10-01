
//Action Creator

export function getLots (lots) {
    return {
        type: 'GET_LOTS',
        payload: lots,
    };
}