import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { AzureInstance, AzureLoginView } from 'react-native-azure-ad-2';
import { connect } from 'react-redux';

import { authStoreToken } from '../../store/actions';

import { AZURE_APP_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID, AZURE_REDIRECT_URI } from '../../../config';

// CONSTANT
const CREDENTIAILS = {
  client_id: AZURE_APP_ID,
  client_secret: AZURE_CLIENT_SECRET,
  redirect_uri: AZURE_REDIRECT_URI,
  tenant: AZURE_TENANT_ID,
  scope: 'User.ReadBasic.All Mail.Read offline_access'
};

class AzureAuth extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.azureInstance = new AzureInstance(CREDENTIAILS);
    this._onLoginSuccess = this._onLoginSuccess.bind(this);
    this._onLoginCancel = this._onLoginCancel.bind(this);
  }

  _onLoginSuccess() {
    this.azureInstance
      .getUserInfo()
      .then(result => {
        console.log(result);
        this.props.onAuthSuccess(this.azureInstance.getToken());
        this.props.navigation.navigate('RestrictScreen');
      })
      .catch(err => {
        console.log(err);
      });
  }

  _onLoginCancel() {
    // Show cancel message
  }

  render() {
    return (
      <AzureLoginView
        azureInstance={this.azureInstance}
        loadingMessage="Requesting access token"
        onSuccess={this._onLoginSuccess}
        onCancel={this._onLoginCancel}
      />
    );
  }
}

AppRegistry.registerComponent('AzureAuth', () => AzureAuth);

const mapDispatchToProps = dispatch => {
  return {
    onAuthSuccess: token => dispatch(authStoreToken(token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AzureAuth);
