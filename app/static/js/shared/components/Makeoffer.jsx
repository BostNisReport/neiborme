import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { capitalize } from '../../shared/utils/StringUtils';

const propTypes = {
  amount: PropTypes.number,
  date: PropTypes.string,
  details: PropTypes.string,
  firstName: PropTypes.string,
  imgPath: PropTypes.string,
  title: PropTypes.string,
};

export default class Makeoffer extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail() {
    window.location.href = `mailto:lisamar@neighborme.co?subject=${this.props.title}`;
  }

  saveField(event) {
   /* const key = camelCase(event.target.name);
    const value = event.target.value;
    RequestsActions.saveField({key, value});
  */
  }
/*
  render() {
    var offerHelpContainer;
    if (!this.props.hideOfferHelp) {
      offerHelpContainer = (
        <div className="text-center button-container">
          <a href={`/dashboard/offerhelp/${this.props.requestId}`} className="btn btn-lg btn-blk">
            Offer Help
          </a>
        </div>
      );
    }
*/
  render() {
    var offerHelpContainer;
    if (!this.props.hideOfferHelp) {
      offerHelpContainer = (
        <div className="text-center button-container">
          <button
            className="btn btn-lg btn-blk"
            onClick={this.saveField}
            type="submit"
          >
            Offer Help
          </button>
        </div>
      );
    }

    return (
        <div className={cx(['panel', 'panel-default', this.props.className])}>
          <div className="panel-body panel-body-browse">
            <div className="row">
              <div className="col-xs-2 text-center">
                <a href={`/users/${this.props.userId}`}>
                  <img
                    className="browse-user-image"
                    src={this.props.imgPath}
                    height={110}
                    width={110}
                  />
                </a>
                <a href={`/users/${this.props.userId}`}>
                  <h4>{this.props.firstName}</h4>
                </a>
              </div>
              <div className="col-xs-8">
                <div className="text-center"><span>Posted {this.props.date}</span></div>
                <div className="div-padding">
                  <h3 className="pull-left text-success">{this.props.title}</h3>  
                  <h3 className="pull-right text-success">${this.props.amount}</h3>
                </div>
                <div><p>{this.props.details}</p></div>
                <div className="browse-location">{this.props.location}</div>
              </div>
            </div>
            <hr width="100%" size="3" noshade></hr>

                <div>
                  <textarea
                    className="form-control textarea-offer-detail"
                    name="details"
                    rows="5"
                    value={this.props.myoffer}
                  >
                  </textarea>
               
                  <a href={`/users/${this.props.helpuser_Id}`}>
                    <img
                      className="browse-user-image"
                      src={this.props.imgPath}
                      height={55}
                      width={55}
                    />
                  </a>
                </div>


            <form action="/dashboard/offers">
              <div className="form-group row">
                <div className="col-md-12">
                  <label className="lbl-req">MESSAGE TO {this.props.firstName}</label>
                  <textarea
                    className="form-control textarea-req-detail"
                    name="details"
                    rows="5"
                  >
                  {this.props.details}
                  </textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <div>{offerHelpContainer}</div>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

Makeoffer.propTypes = propTypes;