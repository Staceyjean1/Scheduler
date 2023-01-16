import React from 'react';
import InterviewerList from './InterviewerList';

function Appointment(props) {
  return (
    <main className="appointment">
      <InterviewerList
        interviewers={props.interviewers}
        interviewer={props.interviewer}
        setInterviewer={props.setInterviewer}
      />
    </main>
  );
}


export default Appointment;


//     <main className="appointment">
//       <InterviewerList 
//         interviewers={props.interviewers}
//         interviewer={props.interviewer}
//         setInterviewer={props.setInterviewer}
//       />
//     </main>
//   );
// }

// export default Appointment;