/**
 * User Widgets Page
 */
import React, { Component } from 'react';

// Listing
import SupportRequest from '../../../components/Widgets/SupportRequest';
import ActiveUser from '../../../components/Widgets/ActiveUser';
import PersonalSchedule from '../../../components/Widgets/PersonalSchedule';

import ToDoListWidget from '../../../components/Widgets/ToDoList';
import NewCustomersWidget from '../../../components/Widgets/NewCustomers';
import Notifications from '../../../components/Widgets/Notifications';

import CommentsWidget from '../../../components/Widgets/Comments';
import TopSellingWidget from '../../../components/Widgets/TopSelling';

import RecentOrdersWidget from '../../../components/Widgets/RecentOrders';

import StockExchange from '../../../components/Widgets/StockExchange';
import TwitterFeeds from '../../../components/Widgets/TwitterFeeds';
import OurLocations from '../../../components/Widgets/OurLocations';

import UserProfile from '../../../components/Widgets/UserProfile';
import QuoteOFTheDay from '../../../components/Widgets/QuoteOfTheDay';
import WeatherWidgetV2 from '../../../components/Widgets/WeatherV2';

import SocialCompaninesWidget from '../../../components/Widgets/SocialCompanies';


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
    todoData,
    newCustomers,
    messages,
    notificationTypes,
    notifications
} from '../../dashboard/dashboard-v1/data';

// widgets data
import {
    recentOrders,
    comments,
    socialCompanines,
    topSellingProducts
} from '../data';

export default class UserWidgets extends Component {
    render() {
        return (
            <div className="user-widgets-wrapper">
                <PageTitleBar title={<IntlMessages id="sidebar.user" />} match={this.props.match} />
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        heading={<IntlMessages id="widgets.supportRequest" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                        customClasses="overflow-hidden"
                    >
                        <SupportRequest />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        fullBlock
                        customClasses="overflow-hidden"
                    >
                        <ActiveUser />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-full"
                        fullBlock
                        customClasses="overflow-hidden bg-light-yellow"
                    >
                        <PersonalSchedule />
                    </RctCollapsibleCard>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        customClasses="to-do-list"
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        heading={<IntlMessages id="widgets.toDoList" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <ToDoListWidget data={todoData} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        heading={<IntlMessages id="widgets.newCustomers" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <NewCustomersWidget data={newCustomers} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-4 col-lg-4 w-8-full"
                        fullBlock
                    >
                        <Notifications
                            messages={messages}
                            notificationTypes={notificationTypes}
                            notifications={notifications}
                        />
                    </RctCollapsibleCard>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-7 col-lg-8 w-xs-full"
                        heading={<IntlMessages id="widgets.commments" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                        contentCustomClasses="comment-section"
                    >
                        <CommentsWidget data={comments} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-5 col-lg-4 w-xs-full"
                        heading={<IntlMessages id="widgets.topSellings" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <TopSellingWidget data={topSellingProducts} />
                    </RctCollapsibleCard>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-6 w-xs-full"
                        heading={<IntlMessages id="widgets.RecentOrders" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <RecentOrdersWidget data={recentOrders} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-6 w-xs-full"
                        heading={<IntlMessages id="widgets.socialCompanines" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <SocialCompaninesWidget data={socialCompanines} />
                    </RctCollapsibleCard>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        heading={<IntlMessages id="widgets.stockExchange" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                        customClasses="overflow-hidden"
                    >
                        <StockExchange />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        fullBlock
                    >
                        <TwitterFeeds />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        heading={<IntlMessages id="widgets.ourLocations" />}
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-full"
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <OurLocations />
                    </RctCollapsibleCard>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        fullBlock
                    >
                        <UserProfile />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
                        heading={<IntlMessages id="widgets.quoteOfTheDay" />}
                        customClasses="review-slider overflow-hidden bg-primary text-white"
                    >
                        <QuoteOFTheDay />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-6 col-md-4 col-lg-4 w-8-full"
                        fullBlock
                    >
                        <WeatherWidgetV2 />
                    </RctCollapsibleCard>
                </div>
            </div>
        );
    }
}
