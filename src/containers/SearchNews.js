import { connect } from "react-redux";
import { getSearchNews } from "../actions";
import NewsList from "../components/NewsList";

const mapStateToProps = state => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetNews: () => dispatch(getSearchNews(ownProps.palabra))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
