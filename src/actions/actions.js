import axios from "axios";

export const FETCH = "FETCH";
export const GOOD_DOG = "GOOD_DOG";
export const BAD_DOG = "BAD_DOG";

export function fetch() {
  return dispatch => {
    dispatch({ type: FETCH });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(res => dispatch({ type: GOOD_DOG, payload: res.data.message }))
      .catch(err => dispatch({ type: BAD_DOG, payload: err }));
  };
}
