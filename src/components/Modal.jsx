import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: 24,
        borderRadius: 8,
        minWidth: 400,
        maxWidth: "90vw",
        maxHeight: "90vh",
        overflowY: "auto",
        position: "relative"
      }}>
        <button style={{ position: "absolute", top: 8, right: 8 }} onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
