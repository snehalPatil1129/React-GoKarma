/**
 * Dashboard V1
 */
import React from "react";

// page title bar
import PageTitleBar from "../../components/PageTitleBar/PageTitleBar";

const Dashboard = ({ match }) => (
  <div className="dashboard-v1">
    <PageTitleBar title="Dashboard" match={match} />
  </div>
);

export default Dashboard;
