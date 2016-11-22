import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { fetchPythonPackages } from '../../api/packages';


export class PackagesContainer extends Component {

  static propTypes = {
    settings: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const self = this;
    self.state = {
      packages: []
    };
    self.populatePackages = self.populatePackages.bind(self);
  }

  componentWillMount() {
    const self = this;
    self.theStore = self.context.store;
  }

  componentDidMount() {
    const self = this;
    self.populatePackages();
  }

  populatePackages() {
    const self = this;
    fetchPythonPackages(self.props.settings, function(packages) {
      self.setState({
        packages: packages
      });
    })
  }

  render() {
    const self = this;
    return (
      <div>
        Package conatiner with settings.
        <div className="ui relaxed list">
          {
            self.state.packages.map((pythonPackage, i) => {
              return(
                <div className="ui item" key={pythonPackage}>{pythonPackage}</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

PackagesContainer.contextTypes = {
  store: React.PropTypes.object,
};

// connect to Redux store
const mapStateToProps = function(state) {
  return {};
};

PackagesContainer = connect(mapStateToProps)(PackagesContainer);
export default PackagesContainer;
