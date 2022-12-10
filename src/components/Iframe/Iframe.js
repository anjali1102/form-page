import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./Iframe.css";

const Iframe = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe ref={setContentRef} {...props} className="iframe">
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export { Iframe };
