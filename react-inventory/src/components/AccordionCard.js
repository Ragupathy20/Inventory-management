import React, { useState } from "react";

export const AccordionCard = (props) => {
  const [accordList, setAccordList] = useState(props.list);
  return (
    <div className="accordion" id="accordionExample">
      {accordList?.map((list) => (
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading${list.number}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${list.number}`}
              aria-expanded="false"
              aria-controls={`collapse${list.number}`}
            >
              {list.title} #{list.number}
            </button>
          </h2>
          <div
            id={`collapse${list.number}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${list.number}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{list.descrip}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
