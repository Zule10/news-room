import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palabra: ""
    };
  }
  handleChange = e => {
    const palabra = e.target.value;
    this.setState({ palabra });
  };

  render() {
    return (
      <li>
        <div className="nav-input">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar"
              onChange={this.handleChange}
            />
            <div className="input-group-prepend">
              <NavLink
                to={this.state.palabra ? `/search/${this.state.palabra}` : "/"}
                className="btn btn-outline-secondary"
              >
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Search;
