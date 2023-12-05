import React from "react";
import "./list.css";
import { FaAngleRight } from "react-icons/fa";

const ListCard = ({ options, page, handleSelect, service }) =>
  page === 1 ? (
    <div>
      <ul className="list">
        {options.map((option) => (
          <li
            key={option.id}
            onClick={() => handleSelect(option)}
            className="custom-list-item"
          >
            <img src={option.url} alt={option.name} />
            {option.name}
            <FaAngleRight className="arrow" />
          </li>
        ))}
      </ul>
      <p className="consult">
        Not sure about consultation type? Please,call &nbsp;
        <span className="blue-text"> 0203 7959063</span>
      </p>
    </div>
  ) : (
    <p className="paragraph">You selected: {service.name}</p>
  );

export default ListCard;
