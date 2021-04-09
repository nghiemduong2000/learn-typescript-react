const {
  GET_WEATHER_START,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
} = require('actions/type');

const initialState = {
  weather: {},
  loading: true,
  errors: null as any,
};

interface Action {
  type: string;
  payload: any;
}

const weatherReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_WEATHER_START:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        loading: false,
        errors: null as any,
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        weather: {},
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
