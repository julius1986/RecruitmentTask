import React from "react";
import "./LoadingScreen.css";
import PropTypes from "prop-types"

/**
 * Loading screen.
 * 
 * @param {Object} props
 * @property {Boolean} isLoading  Show or hide loading screen.
 */
function LoadingScreen(props) {
  const { isLoading } = props;

  return isLoading ? (
    <div className="loading-screen">
      <div>
        <img
          alt="loading logo"
          className="loading-logo"
          src="https://www.seisnetics.com/theme/img/sand-clock.svg"
        ></img>
        <div className="loading-text">Loading</div>
      </div>
    </div>
  ) : null;
}

LoadingScreen.propTypes = {
    isLoading: PropTypes.bool
}

export default LoadingScreen;

