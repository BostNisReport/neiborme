import React, { Component } from 'react';
import SubNav from '../../navigation/components/SubNav.jsx';
import MyOffer from '../../shared/components/MyOffer.jsx';

export default class Offers extends Component {
  render() {
    return (
      <div>
        <SubNav activeIndex={2} />
        <div className="row row-gray">
          <div className="container">
            <div className="row row-houses-bg">
              <div className="text-center">
                <h2 className="text-gray visible-md-block visible-lg-block">Manage your offers to help a neighbor</h2>
                <h4 className="text-gray visible-xs-block visible-sm-block">Manage your offers to help a neighbor</h4>
              </div>
              {this.props.requests.map((request, i) => {
                return (
                  <div className="request">

                    <MyOffer
                        key={`request_${i}`}
                        className="visible-md-block visible-lg-block"
                        amount={request.amount}
                        date={request.date}
                        details={request.details}
                        firstName={request.firstName}
                        imgPath={request.imgPath}
                        location={request.city}
                        title={request.title}
                        userId={request.userId}
                        requestId={request.id}
                        offerstatus={request.offerstatus}
                        myoffer={request.myoffer}
                        lmessagetime={request.lmessagetime}
                    />
                  </div>
                );
              })}
              <div className="text-center space-top-8 space-8">
                <div className="text-center button-container">
                  <a href="/dashboard/browse" className="btn btn-primary btn-lg">
                    Lend a Hand
                  </a>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
