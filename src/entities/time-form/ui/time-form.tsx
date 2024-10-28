import { Button, Select, DatePicker, Form } from "antd";

import s from "./time-form.module.scss";

export const TimeForm = () => {
  const data = [
    { value: "Angular" },
    { value: "C++" },
    { value: "C#" },
    { value: "C" },
    { value: "Dart" },
    { value: "Django" },
    { value: "Flutter" },
    { value: "Go" },
    { value: "Html && Css" },
    { value: "JavaScript" },
    { value: "Java" },
    { value: "Kotlin" },
    { value: "Python" },
    { value: "Php" },
    { value: "React" },
    { value: "Rust" },
    { value: "Ruby" },
    { value: "Spring" },
    { value: "Swift" },
    { value: "TypeScript" },
    { value: "Vue" },
  ];
  const time = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 },
  ];

  return (
    <>
      <Form className={s.form}>
        <label style={{ fontWeight: "400" }}>
          choose a programming language
        </label>
        <Select
          options={data}
          defaultValue="JavaScript"
          className={s.select}
        ></Select>
        <label style={{ fontWeight: "400" }}>
          the date and the time you spent on programming:
        </label>
        <Select options={time} defaultValue="0" className={s.select}></Select>
        <DatePicker
          className={s.datePicker}
          showTime={{ format: "HH" }}
          format="YYYY-MM-DD"
        />
        <Button type="primary" color="primary" className={s.formBtn}>
          Sumbit
        </Button>
      </Form>
    </>
  );
};
