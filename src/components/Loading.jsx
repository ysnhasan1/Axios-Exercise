import React from "react";

import "../Loading.css";

function Loading() {
  return (
    <div className="container-loader">

      {/* uiverse.io */}
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>

    </div>
  );
}

export default Loading;