import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmployerService from "../services/employerService";
import { Header, Table, Icon, Card, Button } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";
import { Link } from "react-router-dom";

export default function EmployerDetails() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({});
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService()
    let jobAdvertService = new JobAdvertService()
    employerService
      .getEmployerById(id)
      .then((result) => setEmployer(result.data.data))
    jobAdvertService
      .getAllByCompanyId(id)
      .then((result) => setJobs(result.data.data))
  },[id])

  return (
    <div>
      <Table singleLine color="grey">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İşveren</Table.HeaderCell>
            <Table.HeaderCell>Bilgiler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                <Header.Content>
                  <Icon name="building" />
                  Şirket Adı
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.companyName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                <Header.Content>
                  <Icon name="world" />
                  Website Adresi
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.websiteAdress}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                <Header.Content>
                  <Icon name="mail" />
                  Email
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                <Header.Content>
                  <Icon name="phone" />
                  Telefon
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Card fluid>
        <Card.Content header="Bu Şirkete Ait İş İlanları" />
        <Card.Content>
          <Table color={"grey"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                <Table.HeaderCell>Şehir</Table.HeaderCell>
                <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
                <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                <Table.HeaderCell>Detaylar</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {jobs.map(job => (
                <Table.Row key={job.id}>
                  <Table.Cell>{job.jobPosition?.name}A</Table.Cell>
                  <Table.Cell>{job.city?.name}</Table.Cell>
                  <Table.Cell>{job.openPositionCount}</Table.Cell>
                  <Table.Cell>{job.workplace?.type}</Table.Cell>
                  <Table.Cell>{job.workSchedule?.type}</Table.Cell>
                  <Table.Cell>
                    <Button animated color="grey" as={Link} to={`/jobAdverts/${job.id}`}>
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
        </Card.Content>
        <Card.Content extra>
          <Icon name="caret right" />
          {jobs?.length} Adet İş ilanı mevcut
        </Card.Content>
      </Card>
    </div>
  );
}