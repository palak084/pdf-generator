import React, { useRef } from "react";
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
  // Create refs dynamically for each page
  const pageRefs = sortedPages.map(() => useRef());

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();

    for (let i = 0; i < pageRefs.length; i++) {
      const ref = pageRefs[i];
      const canvas = await html2canvas(ref.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
    }

    pdf.save("InsightNavigator.pdf");
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
      {/* Hidden pages for rendering */}
      <div style={{ position: "absolute", left: "-9999px" }}>
        {sortedPages.map((PageComponent, index) => (
          <div key={index} ref={pageRefs[index]}>
            <PageComponent />
          </div>
        ))}
      </div>

      {/* Download Button */}
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
