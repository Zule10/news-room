import moment from "moment";

export const loadingError = bool => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = bool => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingSuccess = news => ({
  type: "LOADING_SUCCESS",
  news
});

export const clearNews = () => ({
  type: "CLEAR_NEWS"
});

const date = moment(new Date()).format("YYYY-MM-DD");

export const getLastNews = () => {
  return async dispatch => {
    dispatch(clearNews());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    await fetch(`https://api.canillitapp.com/latest/${date}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));
        return response;
      })
      .then(response => response.json())
      .then(news => {
        let filteredNews = news.filter(ne => ne.category !== null);
        dispatch(loadingSuccess(filteredNews.slice(0, 10)));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getCategoryNews = category => {
  return async dispatch => {
    dispatch(clearNews());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    await fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));
        return response;
      })
      .then(response => response.json())
      .then(news => {
        dispatch(loadingSuccess(news));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getSearchNews = palabra => {
  return async dispatch => {
    dispatch(clearNews());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    await fetch(`https://api.canillitapp.com/search/${palabra}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));
        return response;
      })
      .then(response => response.json())
      .then(news => {
        dispatch(loadingSuccess(news));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};
