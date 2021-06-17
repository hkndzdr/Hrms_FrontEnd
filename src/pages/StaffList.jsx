import React, { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import StaffService from "../services/staffService";

export default function EmployeeList() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    let staffService = new StaffService();
    staffService
      .getStaffs()
      .then((result) => setStaffs(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Icon name="list alternate outline" />
        <Header.Content>Hrms Personel Listesi</Header.Content>
      </Header>
      <Table color="violet" key="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {staffs.map((staff) => (
            <Table.Row key={staff.id}>
              <Table.Cell>{staff.firstName}</Table.Cell>
              <Table.Cell>{staff.lastName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}