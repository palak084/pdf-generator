import React from "react";
import PageStyle from "../components/PageStyle";

const InsightNavigatorPage2 = () => {
 
  return (
    <div className="page2-container">
      <PageStyle />

      {/* Page Number */}
      <div className="page-number">1</div>

      {/* General Instructions Title */}
      <h2 className="section-title">General Instructions:</h2>

      {/* English Instructions */}
      <ol className="instructions">
        <li>Write your name and class on your OMR sheets in the space mentioned.</li>
        <li>
          “DO NOT put any mark on the test booklet. Darken Appropriate circle with pencil in the OMR sheet. 
          Read the instructions given on the booklet silently.
        </li>
        <li>Clear any question or doubt.</li>
        <li>Turn the page and START.</li>
        <li>You may take a short break of 10-15 minutes after 30 mins, or completion of first three dimensions.</li>
        <li>When all the 6 dimensions are complete, hand over the assessment booklet and the OMR sheet to Supervisor.</li>
        <li>
          "Section A in OMR sheet is not applicable to you. Please start from section B.
        </li>
      </ol>

      {/* Hindi Title */}
      <h2 className="hindi-title">सामान्य निर्देश:</h2>

      {/* Hindi Instructions */}
      <ol className="hindi-instructions">
        <li>अपने नाम और कक्षा को OMR शीट पर दिए गए स्थान में लिखें।</li>
        <li>
          परीक्षा पुस्तिका (Test Booklet) पर कोई निशान न लगायें। OMR शीट पर उचित गोले को पेंसिल से सही 
          तरीके से भरें। पुस्तिका में दिए गए निर्देशों को शांतिपूर्वक पढ़ें।
        </li>
        <li>किसी भी प्रश्न या संदेह को तुरंत स्पष्ट कर लें।</li>
        <li>पृष्ठ पलटें और प्रारंभ करें।</li>
        <li>
          30 मिनट पूरे होने के बाद, या पहले तीन आयाम (Dimensions) पूरे करने के बाद, आप 10-15 मिनट का छोटा ब्रेक ले सकते हैं।
        </li>
        <li>
          सभी 6 आयाम पूरे करने के बाद, अपनी मूल्यांकन पुस्तिका (Assessment Booklet) और OMR शीट को 
          पर्यवेक्षक (Supervisor) को सौंप दें।
        </li>
        <li>OMR शीट का अनुभाग A आपके लिए लागू नहीं है। कृपया अनुभाग B से प्रारंभ करें।</li>
      </ol>

      {/* Footer */}
      <div className="footer">
        <span>INSIGHT NAVIGATOR</span>
        <span>CAREER-9</span>
      </div>
    </div>
  );
};

export default InsightNavigatorPage2;
