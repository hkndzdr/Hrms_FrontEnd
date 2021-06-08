import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import EmployerList from '../pages/EmployerList';
import JobAdvertList from '../pages/JobAdvertList';
import JobPositionList from '../pages/JobPositionList';
import JobSeekerList from '../pages/JobSeekerList';
import StaffList from '../pages/StaffList';

export default function Detail() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <GridColumn size={10}>
            <StaffList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <EmployerList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <JobSeekerList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <JobPositionList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <JobAdvertList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
        </div>
    )
}
