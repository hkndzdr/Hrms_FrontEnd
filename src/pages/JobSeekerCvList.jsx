import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header, Image, Table, Button, Icon } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";
import LanguageService from "../services/languageService";

export default function JobSeekerCvList() {

  const [jobSeekerCvs, setJobSeekerCvs] = useState([]);
  
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getJobSeekersCv().then((result) => setJobSeekerCvs(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"violet"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Aday</Table.HeaderCell>
            <Table.HeaderCell>Yetenekler</Table.HeaderCell>
            <Table.HeaderCell>Diller</Table.HeaderCell>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>Linkedin</Table.HeaderCell>
            <Table.HeaderCell>Cv Detayı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekerCvs.map((jobSeekerCv) => (
            <Table.Row key={jobSeekerCv.id}>
              <Table.Cell>
                <Header as="h3" image>
                <Image src={jobSeekerCv.images.url} rounded size="huge"/>
                  <Header.Content>
                    {jobSeekerCv.jobSeeker.firstName + " " + jobSeekerCv.jobSeeker.lastName}
                    <Header.Subheader>
                      {jobSeekerCv.jobSeeker.dateOfBirth}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
              <p key={jobSeekerCv.jobSeekerSkills?.id}>{jobSeekerCv.jobSeekerSkills?.name}</p>
             
              </Table.Cell>

              <Table.Cell>
                 <p key={jobSeekerCv.languages?.id}>{jobSeekerCv.languages?.languageName + " Seviye: " + jobSeekerCv.languages?.languageLevel}</p>
                
              </Table.Cell>

              <Table.Cell>
                <a href={jobSeekerCv.jobSeekerSocialPlatforms?.platformLink} target={"_blank"}>
                  <Button secondary>
                    <Icon name="github" /> Github
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <a href={cv.linkedinLink} target={"_blank"} rel="noopener noreferrer">
                  <Button color="linkedin">
                    <Icon name="linkedin" /> Linked.in
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <Button color="violet" animated as={Link} to={`/candidateCvs/${cv.candidate.id}`}>
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