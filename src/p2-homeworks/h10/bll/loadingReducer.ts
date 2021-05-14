export type initStateType = {
    isLoading: boolean
}

 const initState: initStateType = {
    isLoading: false
};

type LoadingTrueActionType = {
    type: "LOADING_TRUE"
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingTrueActionType): initStateType => { // fix any
    switch (action.type) {
        case "LOADING_TRUE": {
            return {...state, isLoading: action.isLoading};
        }
        default: return state;
    }
};

export const isLoadingAC = (isLoading: boolean): LoadingTrueActionType => {
    return {type: "LOADING_TRUE", isLoading}
}; // fix any