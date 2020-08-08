import { connect } from "react-redux";
import NewsList from "../components/NewsList";
import { getLastNews } from "../actions";
import moment from "moment";

const today = moment(new Date()).format("YYYY-MM-DD");

const mapStateToProps = state => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetNews: () => dispatch(getLastNews(today))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
