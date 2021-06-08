import React from 'react'
import LeftPanel from './LeftPanel'
import Navi from './Navi'
import { Grid, GridColumn } from "semantic-ui-react";
import Detail from './Detail';


export default function Dashboard() {
    return (
        <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <LeftPanel/>
            </Grid.Column>
            <Grid.Column width={11}>
                <Detail/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
}
