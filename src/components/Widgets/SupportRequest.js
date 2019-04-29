/**
 * Support Request
 */
import React, { Component, Fragment } from 'react';
import { Badge, Table } from 'reactstrap';
import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

// card component
import { RctCardFooter } from '../RctCard';

//chart component
import DoughnutChart from '../Charts/DoughnutChart';

// intl messagess
import IntlMessages from '../../util/IntlMessages';

class SupportRequest extends Component {
    render() {
        return (
            <div className="support-widget-wrap">
                <div className="text-center py-10">
                    <DoughnutChart />
                </div>
                <List className="list-unstyled p-0">
                    <ListItem className="bg-light px-15 py-0 d-flex justify-content-between align-content-center">
                        <p className="mb-0 content-title"><IntlMessages id="widgets.totalRequest" /></p>
                        <Badge color="secondary" className="px-4">250</Badge>
                        <IconButton color="default">
                            <i className="ti-eye"></i>
                        </IconButton>
                    </ListItem>
                    <ListItem className="px-15 py-0 d-flex justify-content-between align-content-center">
                        <p className="mb-0 content-title"><IntlMessages id="widgets.new" /></p>
                        <Badge color="warning" className="px-4">25</Badge>
                        <IconButton color="default">
                            <i className="ti-eye"></i>
                        </IconButton>
                    </ListItem>
                    <ListItem className="bg-light px-15 py-0 d-flex justify-content-between align-content-center">
                        <p className="mb-0 content-title"><IntlMessages id="widgets.pending" /></p>
                        <Badge color="danger" className="px-4">125</Badge>
                        <IconButton color="default">
                            <i className="ti-eye"></i>
                        </IconButton>
                    </ListItem>
                </List>
                <RctCardFooter customClasses="d-flex justify-content-between border-0 align-items-center">
                    <p className="fs-12 mb-0">
                        <span><i className="mr-5 zmdi zmdi-refresh"></i></span>
                        <IntlMessages id="widgets.updated10Minago" />
                    </p>
                    <Button variant="raised" color="primary" className="btn-xs text-white">
                        <IntlMessages id="button.assignNow" />
                    </Button>
                </RctCardFooter>
            </div>
        );
    }
}

export default SupportRequest;
