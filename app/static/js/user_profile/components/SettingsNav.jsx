import React, { Component, PropTypes } from 'react';

export default class SettingsNav extends Component {
  render() {
    return (
      <div className="settings-nav">
        <div className="container">
          <ul className="nav nav-pills nav-justified">
            <li role="presentation" className="active">
              <a href="/settings/profile">Profile</a>
            </li>
            <li role="presentation">
              <a href="#">History</a>
            </li>
            <li role="presentation">
              <a href="#">Payment</a>
            </li>
            <li role="presentation">
              <a href="#">Payout</a>
            </li>
            <li role="presentation">
              <a href="#">Promos</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
