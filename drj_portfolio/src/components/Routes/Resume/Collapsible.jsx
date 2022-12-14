import { useState } from "react";
export default function Collabsible({ children, employer, role, startDate, endDate }) {
  const [toggle, setToggle] = useState(false)
  return (
    <section>
    <div className={toggle ? "jobInfo expanded": "jobInfo"}>
      <div className="jobHeader" onClick={()=>setToggle(!toggle)}>
        <h3>{employer}</h3>
        <h4>{role}</h4>
        <p className="timeServed">
          {startDate}&nbsp;&mdash;&nbsp;{endDate}
        </p>
      </div>
      <ul className="hidden">
        {children}
      </ul>
    </div>
    </section>
  );
}
