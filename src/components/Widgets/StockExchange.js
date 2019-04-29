/**
 * Stock Exchange Widget
 */
import React, { Component } from 'react';
import axios from 'axios';
import List, { ListItem } from 'material-ui/List';

// section loader
import RctSectionLoader from '../RctSectionLoader/RctSectionLoader';

// rct card footer
import { RctCardFooter } from '../RctCard';

import IntlMessages from '../../util/IntlMessages';

class StockExchange extends Component {

      state = {
            ratesData: null,
            loading: false
      }

      componentWillMount() {
            this.setState({ loading: true });
            this.getCurrencyRates();
      }

      // get currency rates
      getCurrencyRates() {
            // axios.get('http://api.fixer.io/latest?base=usd')
            //       .then((response) => {
            //             this.setState({ loading: false, ratesData: response.data })
            //       })
            //       .catch(error => {
            //             console.log(error);
            //             this.setState({ loading: false })
            //       })
      }

      render() {
            const { ratesData, loading } = this.state;
            if (loading) {
                  return <RctSectionLoader />
            }
            return (
                  <div className="stock-exchange">
                        {ratesData !== null &&
                              <List className="list-unstyled p-0">
                                    <ListItem>
                                          <span><img src={require('../../assets/flag-icons/icons8-canada.png')} className="img-fluid mr-10" /> CAD (Canadian Dollar)</span>
                                          <span><i className="ti-arrow-up text-success"></i> {ratesData.rates.CAD.toFixed(2)}</span>
                                    </ListItem>
                                    <ListItem>
                                          <span><img src={require('../../assets/flag-icons/icons8-germany.png')} className="img-fluid mr-10" /> EUR (Euro)</span>
                                          <span><i className="ti-arrow-down text-danger"></i> {ratesData.rates.EUR.toFixed(2)}</span>
                                    </ListItem>
                                    <ListItem>
                                          <span><img src={require('../../assets/flag-icons/icons8-south_korea.png')} className="img-fluid mr-10" /> KRW (Korea)</span>
                                          <span><i className="ti-arrow-down text-danger"></i> {ratesData.rates.NZD.toFixed(2)}</span>
                                    </ListItem>
                                    <ListItem>
                                          <span><img src={require('../../assets/flag-icons/icons8-india.png')} className="img-fluid mr-10" /> INR (Indian Rupees)</span>
                                          <span><i className="ti-arrow-up text-success"></i> {ratesData.rates.INR.toFixed(2)}</span>
                                    </ListItem>
                                    <ListItem>
                                          <span><img src={require('../../assets/flag-icons/icons8-singapore.png')} className="img-fluid mr-10" /> SGD (Singapore Dollar)</span>
                                          <span><i className="ti-arrow-down text-danger"></i> {ratesData.rates.SGD.toFixed(2)}</span>
                                    </ListItem>
                              </List>
                        }
                        <RctCardFooter customClasses="border-0 fs-12">
                              <i className="mr-5 zmdi zmdi-refresh"></i>
                              <IntlMessages id="widgets.updated10Minago" />
                        </RctCardFooter>
                  </div>
            );
      }
}

export default StockExchange;
