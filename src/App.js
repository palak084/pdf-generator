import React, { useRef, useState } from "react";
import Modal from "./components/Modal";
import InsightNavigatorPage3 from "./pages/InsightNavigatorPage3";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Dynamically import all components inside ./pages
const pageModules = require.context("./pages", false, /\.jsx$/);

// Sort files to maintain Cover → Page22 order
const sortedPages = pageModules
  .keys()
  .sort((a, b) => {
    // Ensure Cover comes first, then pages numerically
    if (a.includes("Cover")) return -1;
    if (b.includes("Cover")) return 1;

    const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
    return numA - numB;
  })
  .map((key) => pageModules(key).default);

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const page3Ref = useRef(null);
  const handleOpenModal = async () => {
    setModalOpen(true);
    // Download PDF logic
    if (page3Ref.current) {
      const canvas = await html2canvas(page3Ref.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [794, 1123] });
      pdf.addImage(imgData, "PNG", 0, 0, 794, 1123);
      pdf.save("InsightNavigatorPage3.pdf");
    }
  };
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9f9f9",
      }}
    >
      {/* Download Button */}
      <button
        onClick={handleOpenModal}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          background: "#009688",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>

      {/* Modal for PDF preview */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div ref={page3Ref}>
          <InsightNavigatorPage3 />
        </div>
      </Modal>
    </div>
  );
}

export default App;
