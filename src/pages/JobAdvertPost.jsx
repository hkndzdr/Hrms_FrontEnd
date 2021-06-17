import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkplaceService from "../services/workplaceService";
import WorkScheduleService from "../services/workScheduleService";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertCreate() {
  let jobAdvertService = new JobAdvertService();
  const JobAdvertAddSchema = Yup.object().shape({
    applicationDeadline: Yup.date().nullable().required("Son başvuru tarihi girmek zorunlu!"),
    detail: Yup.string().required("İçerik bilgisi girmek zorunlu!"),
    jobPositionId: Yup.string().required("İş pozisyonu seçmek zorunlu!"),
    workplaceId: Yup.string().required("Çalışma türü seçmek zorunlu!"),
    workScheduleId: Yup.string().required("Çalışma zamanı seçmek zorunlu!"),
    openPositionCount: Yup.string().required("Açık pozisyon adedi zorunlu!").min(1,"Minimum 1 person can be accepted to job!"),
    cityId: Yup.string().required("Çalışma ili seçmek zorunlu!"),
  });

  const formik = useFormik({
    initialValues: {
      detail: "",
      jobPositionId: "",
      workplaceId: "",
      workScheduleId: "",
      openPositionCount: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      applicationDeadline: "",
      employerId: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId = 3;
      values.jobPositionId = parseInt(values.jobPositionId);
      values.workplaceId = parseInt(values.workplaceId);
      values.workScheduleId = parseInt(values.workScheduleId);
      values.cityId = parseInt(values.cityId);
      values.minSalary = parseInt(values.minSalary);
      values.maxSalary = parseInt(values.maxSalary);
      values.openPositionCount = parseInt(values.openPositionCount);
      jobAdvertService.add(values).then((result) => console.log(result));
    },
  });

  const [workplaces, setWorkplaces] = useState([]);
  const [workSchedules, setWorkSchedules] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let workplaceService = new WorkplaceService();
    let workScheduleService = new WorkScheduleService();
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    workplaceService.getAll().then((result) => setWorkplaces(result.data.data));
    workScheduleService.getAll().then((result) => setWorkSchedules(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
  }, []);

  const workplaceOption = workplaces.map((workplace, index) => ({
    key: index,
    text: workplace.type,
    value: workplace.id,
  }));
  const workScheduleOption = workSchedules.map((workSchedule, index) => ({
    key: index,
    text: workSchedule.type,
    value: workSchedule.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card color="grey" fluid>
      <Card.Content header='İş İlanı Ekle' />
      <Card.Content>
      <Form color="grey" onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
        <Dropdown
          clearable
          item
          placeholder="İş Pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobPositionOption}
          />
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobPositionId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Türü"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workplaceId")
                  }
                  onBlur={formik.onBlur}
                  id="workplaceId"
                  value={formik.values.workplaceId}
                  options={workplaceOption}
                />
                {formik.errors.workplaceId && formik.touched.workplaceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workplaceId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Zamanı"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workScheduleId")
                  }
                  onBlur={formik.onBlur}
                  id="workScheduleId"
                  value={formik.values.workScheduleId}
                  options={workScheduleOption}
                />
                {formik.errors.workScheduleId && formik.touched.workScheduleId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workScheduleId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Minimum Ücret"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maksimum Ücret"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  id="openPositionCount"
                  name="openPositionCount"
                  error={Boolean(formik.errors.openPositionCount)}
                  onChange={formik.handleChange}
                  value={formik.values.quota}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Pozisyon Adedi"
                />
                {formik.errors.openPositionCount && formik.touched.openPositionCount && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositionCount}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.expirationDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "applicationDeadline")
                  }
                  value={formik.values.expirationDate}
                  onBlur={formik.handleBlur}
                  name="applicationDeadline"
                  type="datetime-local"
                  placeholder="Son Başvuru Tarihi"
                />
                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <TextArea
                  placeholder="İçerik"
                  style={{ minHeight: 150 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="detail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.detail && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.detail}
                  </div>
                )}
              </Form.Field>
              <Button
                animated
                content="Ekle"
                labelPosition="right"
                icon="add"
                color="google plus"
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>
  );
}