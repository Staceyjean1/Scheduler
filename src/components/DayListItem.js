import React from "react";
import classnames from "classnames";
import "./DayListItem.scss";


const formatSpots = (spots) => {
  return spots === 1 ? "1 spot remaining" : spots === 0 ? "no spots remaining" : `${spots} spots remaining`;
}

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  )
}
  




//   const dayClass = classnames("day-list__item", {
//     "day-list__item--selected": props.selected,
//     "day-list__item--full": props.spots === 0
//   });

//   return (
//     <li className={dayClass} onClick={() => props.setDay(props.name)}>
//       <h2 className="text--regular">{props.name}</h2> 
//       <h3 className="text--light">{formatSpots(props.spots)}</h3>
//     </li>
//   )
// }