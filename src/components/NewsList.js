import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class NewsList extends React.Component {
  async componentDidMount() {
    await this.props.onGetLastNews();
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      if (this.props.match.params.category !== undefined) {
        await this.props.onGetNewsByCategory();
      } else if (this.props.match.params.palabra !== undefined) {
        await this.props.onGetSearchNews();
      } else {
        await this.props.onGetLastNews();
      }
    }
  }
  render() {
    const { news, hasError, isLoading } = this.props;
    if (hasError) {
      return (
        <div className="container">
          <h6>Sorry! There was an error loading the news.</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="load-container">
          <FontAwesomeIcon className="load rotating" icon={faSpinner} />
        </div>
      );
    }

    return (
      <div className="container">
        {news.map((repo, i) => (
          <div className="card" key={i}>
            <div>
              <img
                className="card-image"
                src={repo.img_url}
                alt={repo.news_id}
              />
            </div>
            <div className="card-content">
              <span className="badge badge-pill badge-dark ml-2">
                {repo.category}
              </span>
              <p>{repo.title}</p>
              <div className="card-button">
                <a href={repo.url} className="btn btn-dark">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

NewsList.propTypes = {
  news: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  onGetNews: PropTypes.func
};

export default NewsList;
