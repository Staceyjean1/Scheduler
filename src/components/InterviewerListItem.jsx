import React from 'react';
import 'components/InterviewerListItem.scss';

export default function InterviewerListItem(props) {
  let interviewerClass = "interviewers__item";

  if (props.selected) {
    interviewerClass += " interviewers__item--selected";
  }

  
return (
  <li className={interviewerClass} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
);
}

  // const { id, name, avatar, selected, setInterviewer } = props;
  // let interviewerClass = "interviewers__item";

  // if (selected) {
  //   interviewerClass += " interviewers__item--selected";
  // }

  // return (
  //   <li className={interviewerClass} onClick={setInterviewer}>
  //     <img
  //       className="interviewers__item-image"
  //       src={props.avatar}
  //       alt={props.name}
  //     />
  //     {props.selected && props.name}
  //   </li>
  // )
  // }