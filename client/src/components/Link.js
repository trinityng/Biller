import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { PlaidLink } from 'react-plaid-link';
import {
  plaidLogin,
  plaidTransactions,
  plaidTransactionsEach,
  plaidCategories,
  plaidNetWorth,
  plaidMonthlyExpenses,
} from '../api/plaid.api';
import { PLAID_PRODUCT, PLAID_DEV_ENV, PLAID_PUlLIC_KEY } from '../constants';
import axios from 'axios';

class Link extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleOnSuccess(public_token) {
    console.log(public_token);
    this.props.plaidLogin({
      email: this.props.email,
      token: this.props.token,
      public_token,
    });
  }

  handleOnExit() {}

  handleClick() {
    this.props.plaidMonthlyExpenses({
      email: this.props.user.email,
      token: this.props.user.token,
    });
  }

  render() {
    return (
      <div>
        <PlaidLink
          clientName="Plaid Quickstart"
          env={PLAID_DEV_ENV}
          product={PLAID_PRODUCT}
          publicKey={PLAID_PUlLIC_KEY}
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
          className="test"
        >
          Open Link and connect your bank!
        </PlaidLink>
        <div>
          <button onClick={this.handleClick}>Get Transactions</button>
        </div>
      </div>
    );
  }
}

// Store
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ plaidMonthlyExpenses }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Link));
