import React from "react";
import "../../assets/Styles/Sidebar.css";
import pro from "../../assets/Images/profile.jpg";

const Sidebar = () => {
  return (
    <div>
      <aside className="task">
        <div className="sidebar container">
          <div className="profile">
            <img src={pro} alt="" />
            <h5>Aleena Joe</h5>
            <p>aleenajoe@gmail.com</p>
          </div>
          <ul className="sidelist">
            <li>My Task</li>
            <li>Settings</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;