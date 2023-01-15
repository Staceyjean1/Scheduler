import React from 'react';
import 'components/InterviewerListItem.scss';


export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, setInterviewer } = props;
  let interviewerClass = "interviewers__item";

  if (selected) {
    interviewerClass += " interviewers__item--selected";
  }

  return (
    <li className={interviewerClass} onClick={() => setInterviewer(id)}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
