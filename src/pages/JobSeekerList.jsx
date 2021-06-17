// import React, {useState, useEffect} from "react";
// import { Table, Header, Icon, Button } from "semantic-ui-react";
// import JobSeekerService from "../services/jobSeekerService";

// export default function JobSeekerList() {
//   const [jobSeekers, setJobSeekers] = useState([]);

//   useEffect(()=>{
//       let jobSeekerService = new JobSeekerService()
//       jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
//   })

//   return (
//     <div>
//       <Header as="h3">
//         <Icon name="affiliatetheme"/>
//         <Header.Content>Aday Listesi</Header.Content>
//       </Header>
//       <Table color="yellow" key="yellow">
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>Adı</Table.HeaderCell>
//             <Table.HeaderCell>Soyadı</Table.HeaderCell>
//             <Table.HeaderCell>Email Adresi</Table.HeaderCell>
//             <Table.HeaderCell>Tc Kimlik No</Table.HeaderCell>
//             <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>

//         <Table.Body>
//           {jobSeekers.map(jobSeeker => (
//             <Table.Row key={jobSeeker.id}>
//               <Table.Cell>{jobSeeker.firstName}</Table.Cell>
//               <Table.Cell>{jobSeeker.lastName}</Table.Cell>
//               <Table.Cell>{jobSeeker.email}</Table.Cell>
//               <Table.Cell>{jobSeeker.nationality}</Table.Cell>
//               <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";
import { NavLink } from "react-router-dom";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setJobSeekers(result.data.data));
  });

  return (
    <div>
      <Header as="h3">
        <Icon name="caret square down" />
        <Header.Content>Aday Listesi</Header.Content>
      </Header>
      <Table color="grey" key="grey">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Email Adresi</Table.HeaderCell>
            <Table.HeaderCell>Tc Kimlik No</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>CV Görüntüle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.nationality}</Table.Cell>
              <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
              <Table.Cell>
                <Button
                  animated
                  as={NavLink}
                  to={`/candidateCvs/${jobSeeker.id}`}
                  color="violet"
                >
                  <Button.Content visible>Show</Button.Content>
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
