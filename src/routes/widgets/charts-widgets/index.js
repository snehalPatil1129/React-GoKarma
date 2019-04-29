/**
 * Charts Widgets Page
 */
import React, { Component } from 'react';

// Graphs And Charts
import VisitorAreaChartWidget from '../../../components/Widgets/VisitorAreaChart';
import SalesAreaChartWidget from '../../../components/Widgets/SalesAreaChart';
import OrdersAreaChartWidget from '../../../components/Widgets/OrdersAreaChart';

import DailySales from '../../../components/Widgets/DailySales';
import CampaignPerformance from '../../../components/Widgets/CampaignPerformance';
import TrafficChannel from '../../../components/Widgets/TrafficChannel';

import OverallTrafficStatusWidget from '../../../components/Widgets/OverallTrafficStatus';
import TotalSalesWidget from '../../../components/Widgets/TotalSales';
import NetProfitWidget from '../../../components/Widgets/NetProfit';
import TaxStatsWidget from '../../../components/Widgets/TaxStats';
import ExpensesWidget from '../../../components/Widgets/Expenses';

import EmailStatisticsVersion2Widget from '../../../components/Widgets/EmailStatisticsVersion2';
import TotalEarnsChartWidget from '../../../components/Widgets/TotalEarnsChart';

import BandWidthAreaChartWidget from '../../../components/Widgets/BandWidthAreaChart';
import BandWidthUsageBarChartWidget from '../../../components/Widgets/BandWidthUsageBarChart';

import TotalEarnsWithAreaChartWidget from '../../../components/Widgets/TotalEarnsWithAreaChart';

import ProductStatsWidget from '../../../components/Widgets/ProductStats';
import EmailStaticsWidget from '../../../components/Widgets/EmailStatics';

import RevenueWidget from '../../../components/Widgets/Revenue';
import OnlineVisitorsWidget from '../../../components/Widgets/OnlineVisitors';
import TrafficSourcesWidget from '../../../components/Widgets/TrafficSources';
import BandwidthUsageWidget from '../../../components/Widgets/BandwidthUsage';

import SiteVisitorChartWidget from '../../../components/Widgets/SiteVisitorsChart';

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
    totalEarns
} from '../../dashboard/dashboard-v1/data';

// widgets data
import {
    visitorsData,
    salesData,
    ordersData,
    emailStatisticsData,
    dataUsed,
    productStats,
    emailStatisticsV2Data,
    totalRevenue,
    onlineVisitorsData,
    trafficSources,
    totalEarnsV2,
    dailySales,
    trafficChannel,
    siteVisitors
} from '../data';
import {
    trafficStatus,
    totalSales,
    netProfit,
    expenses,
    taxStats
} from '../../dashboard/dashboard-v1/data';

export default class ChartsWidgets extends Component {
    render() {
        return (
            <div className="charts-widgets-wrapper">
                <PageTitleBar title={<IntlMessages id="sidebar.charts" />} match={this.props.match} />
                <div className="row">
                    <div className="col-sm-6 col-md-4 w-xs-half-block">
                        <VisitorAreaChartWidget
                            data={visitorsData}
                        />
                        <RctCollapsibleCard
                            customClasses="overflow-hidden"
                            heading={<IntlMessages id="widgets.dailySales" />}
                            badge={{
                                name: <IntlMessages id="widgets.today" />,
                                class: 'danger'
                            }}
                            collapsible
                            reloadable
                            closeable
                            fullBlock
                        >
                            <DailySales
                                label={dailySales.label}
                                chartdata={dailySales.chartdata}
                                labels={dailySales.labels}
                            />
                        </RctCollapsibleCard>
                    </div>
                    <div className="col-sm-6 col-md-4 w-xs-half-block">
                        <SalesAreaChartWidget
                            data={salesData}
                        />
                        <RctCollapsibleCard
                            heading={<IntlMessages id="widgets.trafficChannel" />}
                            customClasses="overflow-hidden"
                            badge={{
                                name: <IntlMessages id="widgets.today" />,
                                class: 'danger'
                            }}
                            collapsible
                            reloadable
                            closeable
                            fullBlock
                        >
                            <TrafficChannel
                                label={trafficChannel.label}
                                chartdata={trafficChannel.chartdata}
                                labels={trafficChannel.labels}
                            />
                        </RctCollapsibleCard>
                    </div>
                    <div className="col-sm-12 col-md-4 w-xs-full">
                        <OrdersAreaChartWidget
                            data={ordersData}
                        />
                        <RctCollapsibleCard
                            heading={<IntlMessages id="widgets.campaignPerformance" />}
                            collapsible
                            reloadable
                            closeable
                        >
                            <CampaignPerformance />
                        </RctCollapsibleCard>
                    </div>
                </div>
                <div className="row row-eq-height">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-6 col-lg-6 w-xs-helf-block b-50 w-8-full"
                        customClasses="trafic-bar-chart"
                        heading={<IntlMessages id="widgets.overallTrafficStatus" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <OverallTrafficStatusWidget
                            chartData={trafficStatus}
                        />
                    </RctCollapsibleCard>
                    <div className="col-sm-12 col-md-6 col-lg-6 w-xs-helf-block b-50 w-8-full">
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <TotalSalesWidget
                                    label={totalSales.label}
                                    chartdata={totalSales.chartdata}
                                    labels={totalSales.labels}
                                />
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <NetProfitWidget
                                    label={netProfit.label}
                                    chartdata={netProfit.chartdata}
                                    labels={netProfit.labels}
                                />
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <TaxStatsWidget
                                    label={taxStats.label}
                                    chartdata={taxStats.chartdata}
                                    labels={taxStats.labels}
                                />
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <ExpensesWidget
                                    label={expenses.label}
                                    chartdata={expenses.chartdata}
                                    labels={expenses.labels}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-5 col-lg-5 col-xl-4 w-8-full"
                        heading={<IntlMessages id="widgets.emailsStatistics" />}
                        customClasses="gradient-primary"
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <EmailStatisticsVersion2Widget data={emailStatisticsData} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-7 col-lg-7 col-xl-8 w-8-full"
                        heading={<IntlMessages id="widgets.totalEarns" />}
                        collapsible
                        fullBlock
                        reloadable
                        closeable
                    >
                        <TotalEarnsChartWidget data={totalEarnsV2} />
                    </RctCollapsibleCard>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <BandWidthAreaChartWidget />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <BandWidthUsageBarChartWidget data={dataUsed} />
                    </div>
                </div>
                <RctCollapsibleCard
                    heading={<IntlMessages id="widgets.totalEarns" />}
                    collapsible
                    reloadable
                    closeable
                >
                    <TotalEarnsWithAreaChartWidget chartData={totalEarns} />
                </RctCollapsibleCard>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-md-7 col-xl-8 w-xs-half-block w-8-full"
                        heading={<IntlMessages id="widgets.productStats" />}
                        collapsible
                        reloadable
                        closeable
                    >
                        <ProductStatsWidget data={productStats} />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        customClasses="gradient-primary"
                        colClasses="col-md-5 col-xl-4 w-xs-half-block w-8-full"
                        heading={<IntlMessages id="widgets.emailsStatistics" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <EmailStaticsWidget
                            openChartData={emailStatisticsV2Data.chartData.open}
                            bounceChartData={emailStatisticsV2Data.chartData.bounce}
                            unsubscribeData={emailStatisticsV2Data.chartData.unsubscribe}
                        />
                    </RctCollapsibleCard>
                </div>
                <div className="dash-cards-lg">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <RevenueWidget data={totalRevenue} />
                        </div>
                        <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <OnlineVisitorsWidget data={onlineVisitorsData} />
                        </div>
                        <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <TrafficSourcesWidget data={trafficSources} />
                        </div>
                        <div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
                            <BandwidthUsageWidget />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-6 w-xs-full"
                        heading={<IntlMessages id="widgets.siteVisitors" />}
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                    >
                        <SiteVisitorChartWidget data={siteVisitors} />
                    </RctCollapsibleCard>
                </div>
            </div>
        );
    }
}
