import { FETCH, GOOD_DOG, BAD_DOG } from "../actions/actions";

export const initialState = {
  dog: "https://images.dog.ceo//breeds//greyhound-italian//n02091032_4210.jpg",
  isLoading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isLoading: true
      };
    case GOOD_DOG:
      return {
        ...state,
        dog: action.payload,
        isLoading: false
      };
    case BAD_DOG:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
