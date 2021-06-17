import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";
import { NavLink } from "react-router-dom";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdvert()
      .then((result) => setJobAdverts(result.data.data));
  });

  return (
    <div>
      <Header as="h3">
        <Icon name="caret square down" />
        <Header.Content>İş İlanı Listesi</Header.Content>
      </Header>
      <Table color="grey" key="grey">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan Adı</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İlan Yayın Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Minimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Maksimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>İlan Durumu</Table.HeaderCell>
            <Table.HeaderCell>İlan Detayı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary} ₺</Table.Cell>
              <Table.Cell>{jobAdvert.maxSalary} ₺</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.workplace.type}</Table.Cell>
              <Table.Cell>{jobAdvert.workSchedule.type}</Table.Cell>
              <Table.Cell>
                {jobAdvert.active ? "Aktif" : "Pasif"}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Button
                  animated
                  as={NavLink}
                  to={`/jobAdverts/${jobAdvert.id}`}
                  color="grey"
                  content="Show"
                  icon="right arrow"
                >
                  <Button.Content visible>Göster</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
