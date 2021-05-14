import {initialPeopleType} from "../HW8";

type SortPeopleByNameType = {
    type: "sort"
    payload: "up" | "down"
}

type SortPeopleByAgeType = {
    type: "check"
    payload: number
}

type ActionType = SortPeopleByNameType | SortPeopleByAgeType
export const homeWorkReducer = (state: initialPeopleType, action: ActionType): initialPeopleType => {
    switch (action.type) {
        case "sort": {
            // if (action.payload === "up") {
            //     const newState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            //     return newState
            // } else {
            //     const newState = [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            //     return newState
            // }
            const newState = [...state].sort((a,b)=>a.name > b.name ? 1 : -1)
            return action.payload === "up" ? newState : newState.reverse()
        }
        case "check": {
            const newPeopleArray = state.filter(s => s.age >= action.payload)
            return newPeopleArray
        }
        default:
            return state
    }
};