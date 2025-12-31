import React, { useState } from "react";
import "../../assets/Styles/Sidebar.css";
import pro from "../../assets/Images/profile.jpg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <aside className={`task ${open ? "open" : ""}`}>
        <div className="sidebar">
          <div className="profile">
            <img src={pro} alt="User profile" />
            <h5>Aleena Joe</h5>
            <p>aleenajoe@gmail.com</p>
          </div>

          <ul className="sidelist">
            <li>My Task</li>
            <li>Settings</li>
          </ul>
        </div>
      </aside>


      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Sidebar;
