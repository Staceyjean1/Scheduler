import React from "react";

export default function Error(props) {

  return (
    <main className="appointmentcard appointmentcard--error">
    <section className="appointmenterror-message">
      <h1 className="text--semi-bold">Error</h1>
      <h3 className="text--light">Could not delete appointment</h3>
    </section>
    <img
      className="appointmenterror-close"
      src="images/close.png"
      alt="Close"
      onClick={props.onClose}
    />
  </main>
  )
}