import React, { useState } from "react";

export default function Panel({ children, title, collapsible }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <section>
      <div className="panel-header">
        <h3>{title}</h3>
        {collapsible && (
          <button onClick={toggleCollapse}>
            {collapsed ? "Show" : "Hide"}
          </button>
        )}
      </div>
      {!collapsed && <div className="panel-content">{children}</div>}
    </section>
  );
}
