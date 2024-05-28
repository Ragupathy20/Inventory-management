import React, { useState } from "react";
import { AccordionCard } from "../components/AccordionCard";

export const AccordionList = () => {
  const data = [
    {
      number: 1,
      title: " Accordion Item",
      descrip:
        "<strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSStransitions. You can modify any of this with custom CSS or  overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      number: 2,
      title: " Accordion Item",
      descrip:
        "<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      number: 3,
      title: " Accordion Item",
      descrip:
        "<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
  ];
  // let [accordList, setAccordList] = useState(data);
  return (
    <div>
      <AccordionCard list={data} />
    </div>
  );
};
