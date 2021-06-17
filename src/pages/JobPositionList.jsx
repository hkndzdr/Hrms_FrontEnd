import React, {useState, useEffect} from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(()=>{
      let jobPositionService = new JobPositionService()
      jobPositionService.getJobPositions().then(result=>setJobPositions(result.data.data))
  })

  return (
    <div>
      <Header as="h3">
        <Icon name="caret square down"/>
        <Header.Content>İş Pozisyonu Listesi</Header.Content>
      </Header>
      <Table color="grey" key="grey">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map(jobPosition => (
            <Table.Row key={jobPosition.id}>
              <Table.Cell>{jobPosition.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}