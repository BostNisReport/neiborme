import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

const propTypes = {
  amount: PropTypes.number,
  date: PropTypes.string,
  details: PropTypes.string,
  firstName: PropTypes.string,
  imgPath: PropTypes.string,
  title: PropTypes.string,
};

export default class RequestSmall extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail() {
    window.location.href = `mailto:lisamar@neighborme.co?subject=${this.props.title}`;
  }

  render() {
    return (
      <div className={cx(['panel', 'panel-default', this.props.className])}>
        <div className="panel-body panel-body-request-small">
          <div
              className="request-small-header clearfix"
          >
            <div className="pull-left request-small-image">
              <a href={`/users/${this.props.userId}`}>
                <img
                    className="browse-user-image image-small pull-left"
                    src={this.props.imgPath}
                    height={60}
                    width={60}
                />
              </a>
            </div>
            <div>
              <span className="request-small-title">{this.props.title}</span>
              <p>{this.props.details}</p>
              <p>{this.props.location}</p>
            </div>
          </div>
          <div className="clearfix request-small-footer">
            <span className="pull-left text-success">${this.props.amount}</span>
            <button
                className="btn btn-primary btn-md pull-right"
                onClick={this.sendEmail}
            >
              Offer Help
            </button>
          </div>
          <span className="text-gray">{this.props.date}</span>
        </div>
      </div>
    );
  }
}

RequestSmall.propTypes = propTypes;
