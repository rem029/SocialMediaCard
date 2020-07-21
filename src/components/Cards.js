import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

import "../components/Cards.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="card-main">
        <span>
          <div className="card-avatar">
            <img src={props.imgURL} alt={props.pName} />
          </div>

          <div className="card-pname">
            <a href="#">{props.pName}</a>
          </div>
          <div className="card-pjob">{props.pJob}</div>
          <div className="card-desc">{props.pDesc}</div>
          <div className="card-btn-pos">
            <button className="card-btn card-btn-update">
              <FaRegEdit />
            </button>
            <button className="card-btn card-btn-delete">
              <RiDeleteBinLine />
            </button>
          </div>
        </span>
      </div>
    </div>
  );
}
