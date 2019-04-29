/**
 * Daily Sales Widget
 */
import React from 'react';

// chart
import SalesChart from '../Charts/SalesChart';

// card component
import { RctCardFooter } from '../RctCard';

// constants
import ChartConfig from '../../constants/chart-config';

// intl messages
import IntlMessages from '../../util/IntlMessages';

const DailySales = ({ label, chartdata, labels }) => (
	<div>
		<div className="p-20">
			<div className="mb-20 d-flex">
				<i className="mr-15 ti-arrow-up text-success font-lg"></i>
				<div>
					<h2 className="mb-5">12,255 Today</h2>
					<p className="mb-0">10% increase from yesterday</p>
				</div>
			</div>
			<SalesChart
				label={label}
				chartdata={chartdata}
				labels={labels}
				borderColor={ChartConfig.color.success}
				pointBackgroundColor={ChartConfig.color.success}
				height={125}
				pointBorderColor={ChartConfig.color.white}
				borderWidth={4}
			/>
		</div>
		<RctCardFooter>
			<span className="fs-12 text-muted">
				<i className="mr-5 zmdi zmdi-refresh"></i>
				<IntlMessages id="widgets.updated10Minago" />
			</span>
		</RctCardFooter>
	</div>
);

export default DailySales;
