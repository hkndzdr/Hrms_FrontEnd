import React from "react";
import { Grid } from "semantic-ui-react";
import SideBar from "./SideBar";
import { Route } from "react-router";
import JobAdvertList from "../pages/JobAdvertList";
import StaffList from "../pages/StaffList";
import EmployerList from "../pages/EmployerList";
import JobPositionList from "../pages/JobPositionList";
import JobSeekerList from "../pages/JobSeekerList";
import JobAdvertPost from "../pages/JobAdvertPost"
import JobAdvertConfirm from "../pages/JobAdvertConfirm";
import JobAdvertDetails from "../pages/JobAdvertDetails";
import EmployerDetails from "../pages/EmployerDetails";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Route exact path="/jobAdverts" component={JobAdvertList} />
            <Route exact path="/staffs" component={StaffList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/employers/:id" component={EmployerDetails} />
            <Route exact path="/jobPositions" component={JobPositionList} />
            <Route exact path="/jobSeekers" component={JobSeekerList} />
            <Route exact path="/jobAdvertPost" component={JobAdvertPost} />
            <Route exact path="/jobAdvertConfirm" component={JobAdvertConfirm} />
            <Route exact path="/jobAdverts/:id" component={JobAdvertDetails} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}