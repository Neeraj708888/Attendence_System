import React from "react";
import "./Card.css";
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Card = (props) => {
  // console.log(props)

  return (

    <CompactCard data = {props}/>
  );
};

// Compact Card Deficnition
function CompactCard(data) {
 const {barvalue,remaining,title,total,used} = data.data;

 const Icon = data.data.icon;

//  const value = 1;
//  console.log(barvalue);
//  console.log(barvalue);

//  console.log(icon?.["$$typeof"]);
//  console.log(remaining);
//  console.log(title);
//  console.log(total);
//  console.log(used);
  return (
    <>
    <div className="CompactCard">
      <div className="radial-bar">
        
        <CircularProgressbar
          value={barvalue}
          text={`${barvalue}%`}
          />
      </div>
      <div className="details">
       {/* {icon?.["$$typeof"]} */}
       <Icon/>
        <span>{title}</span>
        <span>Remaining:{remaining}</span>
        <span>Used:{used}</span>
        <span>Total:{total}</span>
      </div>
    </div>
    </>
  );
}

export default Card;
