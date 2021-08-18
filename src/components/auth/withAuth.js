import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../actions/auth";
import LoadingSpinner from "../LoadingSpinner";
import LoginPage from "../LoginPage";


function withAuth(WrappedComponent) {
  class Wrapper extends React.Component {
    componentDidMount() {
      this.props.dispatchCheckAuth();
    }

    render() {
      if (!this.props.authChecked) {
        // debugger
        return <LoadingSpinner />;
      } else if (!this.props.loggedIn) {
        return (
          <>
            <LoginPage {...this.props} />
            <p>You need to login to view this page.</p>
          </>
        );
      } else {
        // debugger
        return <WrappedComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({
    auth: { authChecked, loggedIn, currentUser }
  }) => {
    return { authChecked, loggedIn, currentUser };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckAuth: () => dispatch(checkAuth())
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}

export default withAuth;