/**
 * About Us Page
 */
import React, { Component } from "react";
import TestimonialSlider from "./components/testimonial-slider";
import Clientslider from "./components/client-slider";

// page title bar
import PageTitleBar from "../../components/PageTitleBar/PageTitleBar";

// rct card box
import { RctCard } from "../../components/RctCard";

export default class AboutUS extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <PageTitleBar title="About GoKarma" match={this.props.match} />
        <div className="about-detail">
          <RctCard>
            <div className="row no-gutters row-eq-height">
              <div className="col-sm-12 col-md-6 p-70">
                <div className="about-content align-items-center text-center">
                  {/* <span className="fw-bold d-block mb-20">
                    Don’t worry, you’re in safe hands.
                  </span> */}
                  <h2 className="title mb-50">
                    GoKarma provisions NGO's tap into their full potential to
                    actualize your cause
                  </h2>
                  <p className="fs-14 mb-0">
                    It helps NGOs/NPOs to be flexible in administration,
                    increase the reach for donors across globe, prompt decision
                    making, increase efficiency of the staff and timely action
                    order to facilitate the NGOs to be self-reliant.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="about-image">
                  <img
                    src={require("../../assets/img/about-1.png")}
                    alt="about gallery"
                    className="w-100"
                    width="743"
                    height="395"
                  />
                </div>
              </div>
            </div>
          </RctCard>
          {/* <RctCard>
            <div className="row no-gutters row-eq-height">
              <div className="col-sm-12 col-md-6 order-2 p-70">
                <div className="about-content align-items-center text-center">
                  <span className="fw-bold d-block mb-20">
                    Don’t worry, you’re in safe hands.
                  </span>
                  <h2 className="title mb-50">
                    We are committed to our customers’ success from start to
                    finish.
                  </h2>
                  <p className="fs-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since. Lorem Ipsum has been the
                    industrys standard dummy text ever since. Lorem Ipsum is
                    printing and typesetting simply dummy text.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 order-1">
                <div className="about-image">
                  <img
                    src={require("../../assets/img/about-2.png")}
                    alt="about gallery"
                    className="w-100"
                    width="743"
                    height="495"
                  />
                </div>
              </div>
            </div>
          </RctCard> */}
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <RctCard>
                <div className="card-image">
                  <img
                    src={require("../../assets/img/about-card-1.png")}
                    alt="about card"
                    className="img-fluid"
                    width="485"
                    height="323"
                  />
                </div>
                <div className="card-content text-center p-30">
                  <div className="section-title mb-40">
                    <h3>Build and connect for Long-term Association</h3>
                  </div>
                  <p>
                    Beliefs and Relationships concrete each one's existence,
                    GoKarma provisions you attempt to help NGO's tap into their
                    full potential to actualize your cause.Build and Nurture
                    Lifelong Relationships with Your Constituents by getting to
                    know them on a deeper, more meaningful level by gaining
                    greater visibility of their interactions, preferences, and
                    their network associations.This translates to better
                    engagement in your mission and also to raise more funds.
                  </p>
                </div>
              </RctCard>
            </div>
            <div className="col-sm-12 col-md-4">
              <RctCard>
                <div className="card-image">
                  <img
                    src={require("../../assets/img/about-card-2.png")}
                    alt="about card"
                    className="img-fluid"
                    width="485"
                    height="323"
                  />
                </div>
                <div className="card-content text-center p-30">
                  <div className="section-title mb-40">
                    <h3>Harness the power of social media for maximum reach</h3>
                  </div>
                  <p>
                    The internet, and social media in particular, are powerful
                    tool for raising awareness for social causes and charity
                    events. Nearly one in three (31.5%) people worldwide donated
                    to charity in 2016 and one in four (26%) volunteered. These
                    numbers are only expected to be much higher in the
                    forthcoming years. GoKarma integrates seamlessly with all
                    major social platforms like Facebook, Twitter and provides
                    feed in a unified place. It uses Artificial Intelligence to
                    identify trending topics and provide real time Sentiment
                    Analysis about a particular cause or an event.Using Social
                    Media, you can create a far reached and inspiring outlook,
                    giving each heartfelt act a meaning and inspiration to the
                    ones who want to.
                  </p>
                </div>
              </RctCard>
            </div>
            <div className="col-sm-12 col-md-4">
              <RctCard>
                <div className="card-image">
                  <img
                    src={require("../../assets/img/share.png")}
                    alt="about card"
                    className="img-fluid"
                    width="485"
                    height="323"
                  />
                </div>
                <div className="card-content text-center p-30">
                  <div className="section-title mb-40">
                    <h3>'The Last mile connect' with your beneficiaries</h3>
                  </div>
                  <p>
                    GoKarma helps Record in-depth information of the
                    beneficiaries and their social standings and relationships.
                    Track beneficiary progress and the quantify the impact
                    bought into their lives. Transparent and continual
                    engagement will provide every donor and volunteer looped
                    into contributing to the cause an insight of how they could
                    make a difference.
                  </p>
                </div>
              </RctCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
