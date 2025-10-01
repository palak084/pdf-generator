import React, { useRef } from "react";
import InsightNavigatorCover from "./InsightNavigatorCover";
import InsightNavigatorPage2 from "./InsightNavigatorPage2"; // <-- create this component
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const coverRef = useRef();
  const page2Ref = useRef();

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();

    // ---- Page 1 (Cover) ----
    const coverCanvas = await html2canvas(coverRef.current, { scale: 2, useCORS: true });
    const coverImg = coverCanvas.toDataURL("image/png");
    const coverHeight = (coverCanvas.height * pdfWidth) / coverCanvas.width;
    pdf.addImage(coverImg, "PNG", 0, 0, pdfWidth, coverHeight);

    // ---- Page 2 ----
    pdf.addPage();
    const page2Canvas = await html2canvas(page2Ref.current, { scale: 2, useCORS: true });
    const page2Img = page2Canvas.toDataURL("image/png");
    const page2Height = (page2Canvas.height * pdfWidth) / page2Canvas.width;
    pdf.addImage(page2Img, "PNG", 0, 0, pdfWidth, page2Height);

    // ---- Save PDF ----
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
      {/* Hidden Pages (not visible to user) */}
      <div style={{ position: "absolute", left: "-9999px" }}>
        <div ref={coverRef}>
          <InsightNavigatorCover />
        </div>
        <div ref={page2Ref}>
          <InsightNavigatorPage2 />
        </div>
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
