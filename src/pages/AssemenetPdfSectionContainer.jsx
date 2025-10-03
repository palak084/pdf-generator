import React from "react";
import AssemenetPdfQuestionContainer from "./AssemenetPdfQuestionContainer";

const AssemenetPdfSectionContainer = () => {
  return (
    <div className="section-container">
      {/* Section Title */}
      <h2 className="section-title">SECTION-B</h2>

      {/* Instructions */}
      <p className="instructions">
        <strong>Instructions:</strong> Your values play a crucial role in guiding your behaviour and decisions.
        Below are 15 values. Select top 5 values that are most important to you.
      </p>

      <p className="hindi-instructions">
        <strong>निर्देश:</strong> आपके मूल्य (Values) आपके व्यवहार और निर्णयों को मार्गदर्शन देने में महत्वपूर्ण हैं। नीचे 15 मूल्य दिए गए हैं। शीर्ष 5 मूल्य चुनें।
      </p>

      {/* Questions Table */}
      <AssemenetPdfQuestionContainer />
    </div>
  );
};

export default AssemenetPdfSectionContainer;
