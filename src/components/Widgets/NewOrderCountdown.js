/**
 * New Order Countdown Widget
 */
import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import Button from 'material-ui/Button';

// components
import CountDown from '../CountDown/CountDown';

// intl messages
import IntlMessages from '../../util/IntlMessages';

export default class NewOrderCountdown extends Component {
    render() {
        return (
            <Card className="rct-block">
                <CardBody className="d-flex">
                    <div>
                        <span className="d-flex justify-content-center align-items-center rounded-circle bg-warning p-10 mr-15">
                            <i className="zmdi zmdi-notifications-active zmdi-hc-lg text-white"></i>
                        </span>
                    </div>
                    <div>
                        <p className="fs-14 fw-bold mb-0">New order from John</p>
                        <span className="fs-12 mb-5 d-block text-muted"><IntlMessages id="widgets.AcceptorrRejectWithin" /></span>
                        <h1 className="border py-5 px-15 d-inline-block"> <CountDown time={500000} /> </h1>
                        <div>
                            {/*<IconButton mini="true" variant="raised" className="btn-success btn-xs text-white mr-10">
                                <IntlMessages id="button.accept" />
                                <i className="zmdi zmdi-check"></i>
                            </IconButton>*/}
                            <Button variant="fab" mini className="btn-success text-white mr-10" aria-label="add">
                                <i className="zmdi zmdi-check"></i>
                            </Button>
                            <Button variant="fab" mini className="btn-danger text-white" aria-label="add">
                                <i className="zmdi zmdi-close"></i>
                            </Button>
                            {/*<IconButton mini="true" variant="raised" className="btn-danger btn-xs text-white">
                                <IntlMessages id="button.reject" />
                                <i className="zmdi zmdi-close"></i>
                            </IconButton>*/}
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }
}
