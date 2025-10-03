import React, { useRef, useState } from "react";
import Modal from "./components/Modal";
import InsightNavigatorPage3 from "./pages/InsightNavigatorPage3";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const page3Ref = useRef(null);

  // Open modal AND download PDF
  const handleOpenModalAndDownload = async () => {
    setModalOpen(true);

    // Wait a tick so modal content renders before capture
    setTimeout(async () => {
      if (page3Ref.current) {
        const input = page3Ref.current;

        // Capture content
        const canvas = await html2canvas(input, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        // PDF size (A4)
        const pdf = new jsPDF("p", "px", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Scale image to fit width
        const imgWidth = pageWidth - 40; // leave margin
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 20; // top margin

        // First page
        pdf.addImage(imgData, "PNG", 20, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Extra pages if needed
        while (heightLeft > 0) {
          position = heightLeft - imgHeight + 20;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 20, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("InsightNavigatorPage3.pdf");
      }
    }, 300); // slight delay so modal is mounted
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
      {/* Button to preview + download */}
      <button
        onClick={handleOpenModalAndDownload}
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
        Preview & Download PDF
      </button>

      {/* Modal for PDF preview */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div
          ref={page3Ref}
          style={{
            background: "white",
            padding: "20px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <InsightNavigatorPage3 />
        </div>
      </Modal>
    </div>
  );
}

export default App;
