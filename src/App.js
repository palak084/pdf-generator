import React, { useRef } from "react";
import InsightNavigatorCover from "./InsightNavigatorCover";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const coverRef = useRef();

  const downloadPDF = () => {
    const input = coverRef.current;

    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("InsightNavigatorCover.pdf");
    });
  };

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
      {/* Hidden Cover (not visible to user) */}
      <div ref={coverRef} style={{ position: "absolute", left: "-9999px" }}>
        <InsightNavigatorCover />
      </div>

      {/* Button to download PDF */}
      <button
        onClick={downloadPDF}
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
    </div>
  );
}

export default App;
