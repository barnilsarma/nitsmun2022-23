import React from "react";
import "./apply.css";
import { TabTitle } from "../Utils/Genfn";
const apply = () => {
  TabTitle("Link Tree | NITS MUN");
  return (
    <>
      <div className="apply-container">
        <div className="img-apply">
          <center>
            <img src="./Images/nitsmun-logo.svg" alt="NITSMUN" />
          </center>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeU9fIV-yT7UdGORPqE3uPUV_miDt8XF_ySj3TbZ55cYSKwqg/viewform"
          rel="noreferrer"
          target="_blank"
        >
          Link for Early Bird Registrations for NITSMUN Junior MUN 2022!
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfdZRZcI0T4z9SrjLjZNk59s4wi-35lOVqeXJkE34mIbyqsbA/viewform?pli=1"
          rel="noreferrer"
          target="_blank"
        >
          Applications Open for EXECUTIVE BOARD!
        </a>
      </div>
    </>
  );
};
export default apply;
