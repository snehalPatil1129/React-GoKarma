/**
 * Dashboard V1
 */
import React, { Component } from 'react';

// Componets
import DailySales from '../../../components/Widgets/DailySales';
import ToDoListWidget from '../../../components/Widgets/ToDoList';
import CampaignPerformance from '../../../components/Widgets/CampaignPerformance';

import Space from '../../../components/Widgets/Space';
import FollowersWidget from '../../../components/Widgets/Followers';
import BookingInfo from '../../../components/Widgets/BookingInfo';
import NewOrderCountdown from '../../../components/Widgets/NewOrderCountdown';

import SupportRequest from '../../../components/Widgets/SupportRequest';
import NewCustomersWidget from '../../../components/Widgets/NewCustomers';
import Notifications from '../../../components/Widgets/Notifications';

import UserProfile from '../../../components/Widgets/UserProfile';
import QuoteOFTheDay from '../../../components/Widgets/QuoteOfTheDay';
import WeatherWidgetV2 from '../../../components/Widgets/WeatherV2';

import NewEmailsWidget from '../../../components/Widgets/NewEmails';
import EmployeePayrollWidget from '../../../components/Widgets/EmployeePayroll';

import TrafficChannel from '../../../components/Widgets/TrafficChannel';
import ActiveUser from '../../../components/Widgets/ActiveUser';
import PersonalSchedule from '../../../components/Widgets/PersonalSchedule';

import StockExchange from '../../../components/Widgets/StockExchange';
import TwitterFeeds from '../../../components/Widgets/TwitterFeeds';
import OurLocations from '../../../components/Widgets/OurLocations';

import BlogLayoutOne from '../../../components/Widgets/BlogLayoutOne';
import BlogLayoutTwo from '../../../components/Widgets/BlogLayoutTwo';
import BlogLayoutThree from '../../../components/Widgets/BlogLayoutThree';

import ShareFriends from '../../../components/Widgets/ShareFriends';
import PromoCoupons from '../../../components/Widgets/PromoCoupons';
import Rating from '../../../components/Widgets/Rating';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// rct card box
import { RctCard, RctCardContent } from '../../../components/RctCard';

// rct collapsible card
import RctCollapsibleCard from '../../../components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// widgets data
import {
	todoData,
	newCustomers,
	messages,
	notificationTypes,
	notifications,
	ordersStatus,
	employeePayroll,
	newEmails,
	trafficStatus,
	totalSales,
	netProfit,
	expenses,
	totalEarns,
	taxStats
} from './data';

import {
	dailySales,
	trafficChannel,
	spaceUsed
} from '../../widgets/data';

const Dashboard = ({ match }) => (
	<div className="dashboard-v1">
		<PageTitleBar title={<IntlMessages id="sidebar.dashboard" />} match={match} />
		</div>
);

export default Dashboard;