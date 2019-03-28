export function FetchWeather(city) {
  let url = `${API_URL}&q=${city},in`;
  return function(dispatch) {
    axios
      .get(url)
      .then(response =>
        dispatch({
          type: types.FETCH_WEATHER_SUCCESS,
          data: response.data
        })
      )
      .catch(response =>
        dispatch({
          type: types.FETCH_WEATHER_FAILURE,
          error: response.error
        })
      );
  };
}
