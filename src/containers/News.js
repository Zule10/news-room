import { connect } from "react-redux";
import { getLastNews, getCategoryNews, getSearchNews } from "../actions";
import NewsList from "../components/NewsList";

const mapStateToProps = state => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetLastNews: () => dispatch(getLastNews()),
  onGetNewsByCategory: () =>
    dispatch(getCategoryNews(ownProps.match.params.category)),
  onGetSearchNews: () => dispatch(getSearchNews(ownProps.match.params.palabra))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
