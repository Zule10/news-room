import { connect } from "react-redux";
import NewsList from "../components/NewsList";
import { getCategoryNews } from "../actions";

const mapStateToProps = state => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetNews: () => {
    return dispatch(getCategoryNews(ownProps.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
