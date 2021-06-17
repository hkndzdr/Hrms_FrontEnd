import React, { useEffect, useState } from "react";
import JobAdvertService from "../services/jobAdvertService";
import {Table, Header, Icon, Button } from "semantic-ui-react";
import swal from 'sweetalert';

export default function JobAdvertConfirm() {
  

  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllPassiveJobs()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  const activate = (id) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.activate(id, true).then(swal({
        title: "Başarılı!",
        text: "İş ilanı onaylandı!",
        icon: "success",
        button: "Ok"
      }).then(function(){window.location.reload()}));
};

  const deleteJobAdvert = (jobAdvert) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .delete(jobAdvert)
      .then(swal({
        title: "Emin misiniz?",
        text: "İlanı silerseniz geri alamazsınız!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      })
      .then((willDelete) => {
           if (willDelete) { 
               swal("İş ilanı silindi!", { icon: "success" })
               .then(function(){window.location.reload()});
        }}));
  };

  return (
    <div>
      <Header as="h3">
        <Icon name="caret square down"></Icon>
        <Header.Content>İş İlanı Talepleri</Header.Content>
      </Header>
      <Table color="grey" key="violet">
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
             <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
             <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
             <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
             <Table.Cell>{jobAdvert.workplace.type}</Table.Cell>
             <Table.Cell>{jobAdvert.workSchedule.type}</Table.Cell>
             <Table.Cell>
               {jobAdvert.Active ? "Aktif" : "Pasif"}
              </Table.Cell>
              <Table.Cell>
                <Button size="tiny" positive onClick={(e) => activate(jobAdvert.id)}><Icon name="check" /> Onayla</Button>
                <Button size="tiny" negative onClick={(e) => deleteJobAdvert(jobAdvert.id)}><Icon name="trash alternate" /> Sil</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}