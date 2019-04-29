/**
 * Notes Widget 
 */
/* eslint-disable */
import React from 'react';

// intl messages
import IntlMessages from '../../util/IntlMessages';

const Notes = () => (
  <div className="lazy-up">
    <a href="javascript:void(0);" className="square-30 bg-success card-top-action"><i className="ti-pin-alt"></i></a>
    <div className="card pt-30">
      <span className="text-pink d-block mb-5"><IntlMessages id="widgets.note" /></span>
      <p className="fs-14 mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has text ever since the 1500.</p>
      <div className="card-footer border-top-0 text-right p-0">
      </div>
    </div>
  </div>
);

export default Notes;
