const NEW_CONFIRMED = "NEW_CONFIRMED"
const TOTAL_CONFIRMED = "TOTAL_CONFIRMED"

let initialState = {

  NewConfirmed: null,
  TotalConfirmed: null,
  NewDeaths: null,
  TotalDeaths: null,
  NewRecovered: null,
  TotalRecovered: null,
  Date: null

}

const NewConfirmedReducer = (state = initialState, action) => {

  switch (action.type) {
    case NEW_CONFIRMED:
      let body = action.newConfirmedBody;

      return {
        ...state,
        NewConfirmed: body
      }
    default:
      return state;
  }
}
export const NewConfirmedAC = (newConfirmedBody) => ({
  type: NEW_CONFIRMED, newConfirmedBody
})

export const requestConfirmed = (store) => {
  return async (dispatch) => {
    dispatch(NewConfirmedAC(store._state.NewConfirmed));
  }
};

export const TotalConfirmed1Reducer = (state = initialState, action) => {

  switch (action.type) {
    case TOTAL_CONFIRMED:
      let body = action.newTotalBody;

      return {
        ...state,
        NewTotal: body
      }
    default:
      return state;
  }
}

export default NewConfirmedReducer;