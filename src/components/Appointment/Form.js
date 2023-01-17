import React, {useState} from "react";
import InterviewerList from "components/InterviewerList"
import Button from "components/Button.js";



export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const Cancel = () => {
    reset()
    props.onCancel();
  };
return (
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name={props.student}
        type="text"
        placeholder="Enter Student Name"
        onChange={(event) => setStudent(event.target.value)}
        value={student}
      />
    </form>
    <InterviewerList 
      interviewers={props.interviewers}
      value={interviewer}
      onChange={(event) => setInterviewer(event)}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={Cancel}>Cancel</Button>
      <Button confirm >Save</Button>
    </section>
  </section>
</main>)
}





