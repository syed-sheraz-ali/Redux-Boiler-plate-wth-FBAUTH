const INITIAL_STATE = {
    users: [{
        name: "Sheraz",
        email: "syedsherazali14@gmail.com"
    },
     {
         name: "Faraz",
         email: "sheraz@hotmail.com"
     }]
}

export default (state= INITIAL_STATE, action) => {
    console.log("app-action" , action)
    switch (action.type){
        case "SETDATA":
        return({
            ...state,
            users: [...state.users, action.data]
        })
    
    default:
        return state;
}
}