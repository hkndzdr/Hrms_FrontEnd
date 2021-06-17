import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdvertService from "../services/jobAdvertService";
import { Header, Icon, Table, Button, Grid, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobAdvertDetails() {
  let { id } = useParams();

  const [jobAdvert, setJobAdvert] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getById(id).then((result) => setJobAdvert(result.data.data));
  }, [id]);

  return (
    <div>
      <Card fluid color={"grey"}>
        <Card.Content header="İlan Detayı" />
        <Card.Content>{jobAdvert.detail}</Card.Content>
      </Card>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Table celled color={"violet"} stackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İşveren Adı</Table.HeaderCell>
                  <Table.HeaderCell>İşveren Bilgileri</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="building" />
                        Şirket Adı
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.companyName}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="mail" />
                        Email
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.email}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="phone" />
                        Telefon No
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.phoneNumber}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="world" />
                        Website Adresi
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.websiteAdress}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="list ul" />
                        Detaylar
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      animated
                      color="grey"
                      as={Link}
                      to={`/employers/${jobAdvert.employer?.id}`}
                    >
                      <Button.Content visible>Göster</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={10}>
            <Table celled fixed singleLine color={"violet"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İş İlan Detayları</Table.HeaderCell>
                  <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>İş Pozisyonu</Table.Cell>
                  <Table.Cell>{jobAdvert.jobPosition?.name}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Şehir</Table.Cell>
                  <Table.Cell>{jobAdvert.city?.name}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Çalışma Türü</Table.Cell>
                  <Table.Cell>{jobAdvert.workplace?.type}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Çalışma Zamanı</Table.Cell>
                  <Table.Cell>{jobAdvert.workSchedule?.type}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Minimum Ücret</Table.Cell>
                  <Table.Cell>{jobAdvert.minSalary} ₺</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Maksimum Ücret</Table.Cell>
                  <Table.Cell>{jobAdvert.maxSalary} ₺</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Açık Posizyon Sayısı</Table.Cell>
                  <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Son Başvuru Tarihi</Table.Cell>
                  <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}