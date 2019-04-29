/**
 * Miscellaneous Widgets Page
 */
import React, { Component } from 'react';

// Miscellaneous
import Space from '../../../components/Widgets/Space';
import FollowersWidget from '../../../components/Widgets/Followers';
import BookingInfo from '../../../components/Widgets/BookingInfo';
import NewOrderCountdown from '../../../components/Widgets/NewOrderCountdown';

import Reminders from '../../../components/Widgets/Reminders';
import ContactRequestWidget from '../../../components/Widgets/ContactRequest';
import Notes from '../../../components/Widgets/Notes';
import WeatherWidget from '../../../components/Widgets/Weather';

import SocialFeedsWidget from '../../../components/Widgets/SocialFeeds';

import NewEmailsWidget from '../../../components/Widgets/NewEmails';
import EmployeePayrollWidget from '../../../components/Widgets/EmployeePayroll';

import OrderStatusWidget from '../../../components/Widgets/OrderStatus';

import DiscoverPeoplesWidget from '../../../components/Widgets/DiscoverPeoples';
import ProductReportsWidget from '../../../components/Widgets/ProductReports';
import RecentActivity from '../../../components/Widgets/RecentActivity';

import ComposeEmailWidget from '../../../components/Widgets/ComposeEmail';
import CurrentTimeLocation from '../../../components/Widgets/CurrentTimeLocation';
import CurrentDateWidget from '../../../components/Widgets/CurrentDate';
import TodayOrdersStatsWidget from '../../../components/Widgets/TodayOrdersStats';

import BlogLayoutOne from '../../../components/Widgets/BlogLayoutOne';
import BlogLayoutTwo from '../../../components/Widgets/BlogLayoutTwo';
import BlogLayoutThree from '../../../components/Widgets/BlogLayoutThree';

import WeatherWidgetV2 from '../../../components/Widgets/WeatherV2';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// rct card box
import { RctCard, RctCardContent } from '../../../components/RctCard';

// rct collapsible card
import RctCollapsibleCard from '../../../components/RctCollapsibleCard/RctCollapsibleCard';

// data
import {
    ordersStatus,
    employeePayroll,
    newEmails
} from '../../dashboard/dashboard-v1/data';

import {
    spaceUsed,
    reminders,
    discoverPeoples,
    productsReports,
    recentActivities
} from '../data';


export default class MiscellaneousWidgets extends Component {
    render() {
        return (
            <div className="miscellaneous-widgets-wrapper">
                <PageTitleBar title={<IntlMessages id="sidebar.miscellaneous" />} match={this.props.match} />
                <div className="row">
                    <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                        <NewOrderCountdown />
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                        <Space data={spaceUsed} />
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                        <FollowersWidget />
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                        <BookingInfo />
                    </div>
                </div>
                <div className="dash-cards">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <Reminders />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <ContactRequestWidget />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <Notes />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <WeatherWidget />
                        </div>
                    </div>
                </div>
                <div className="social-card-wrapper">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
                            <SocialFeedsWidget
                                type="facebook"
                                friendsCount="89k"
                                icon="ti-facebook"
                                feedsCount="459"
                            />
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
                            <SocialFeedsWidget
                                type="twitter"
                                friendsCount="89k"
                                feedsCount="459"
                                icon="ti-twitter"
                            />
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
                            <SocialFeedsWidget
                                type="linkedin"
                                friendsCount="89k"
                                feedsCount="459"
                                icon="ti-linkedin"
                            />
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
                            <SocialFeedsWidget
                                type="google"
                                friendsCount="89k"
                                feedsCount="459"
                                icon="ti-google"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-7 col-xl-7 b-100 w-xs-full"
                        heading={<IntlMessages id="widgets.newEmails" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <NewEmailsWidget data={newEmails} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-5 col-xl-5 b-100 w-xs-full"
                        heading={<IntlMessages id="widgets.employeePayroll" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <EmployeePayrollWidget data={employeePayroll} />
                    </RctCollapsibleCard>
                </div>
                <RctCollapsibleCard
                    heading={<IntlMessages id="widgets.orderStatus" />}
                    collapsible
                    reloadable
                    closeable
                    fullBlock
                >
                    <OrderStatusWidget data={ordersStatus} />
                </RctCollapsibleCard>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-xs-half-block"
                        heading={<IntlMessages id="widgets.discoverPeople" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <DiscoverPeoplesWidget data={discoverPeoples} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-xs-half-block"
                        heading={<IntlMessages id="widgets.productReports" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <ProductReportsWidget data={productsReports} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
                        heading={<IntlMessages id="widgets.recentActivities" />}
                        collapsible
                        reloadable
                        closeable
                    >
                        <RecentActivity data={recentActivities} />
                    </RctCollapsibleCard>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-8 w-xs-full"
                        heading={<IntlMessages id="widgets.ComposeEmail" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <ComposeEmailWidget />
                    </RctCollapsibleCard>
                    <div className="col-sm-12 col-md-4 w-xs-full">
                        <CurrentTimeLocation />
                        <CurrentDateWidget />
                        <TodayOrdersStatsWidget />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                    >
                        <BlogLayoutOne />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 w-8-half-block">
                        <BlogLayoutTwo />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 w-8-full">
                        <BlogLayoutThree />
                    </div>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-6 w-xs-full"
                        fullBlock
                    >
                        <WeatherWidgetV2 city="Chandigarh" />
                    </RctCollapsibleCard>
                </div>
            </div>
        );
    }
}
