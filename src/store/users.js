
export const users = {
    state: () => ({
        user: 'pau'
    }),
    getters: {
        getForm( state ){
            return state.user;
        }
    }
}