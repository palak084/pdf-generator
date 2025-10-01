
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
                    They give direction to your life and career, helping you decide who you are and how you interact with the world. 
                    Below are 15 values. Your task is to select the top 5 values that are most important to you.
                </p>

                <p className="hindi-instructions">
                    <strong>निर्देश:</strong> आपके मूल्य (Values) आपके व्यवहार और निर्णयों को मार्गदर्शन देने में बहुत 
                    महत्वपूर्ण होते हैं। ये आपकी लाइफ और करियर को दिशा देते हैं, ये यह निर्णय कराते हैं कि आप कौन हैं और दुनिया के 
                    साथ कैसे इंटरैक्ट करते हैं। नीचे 15 मूल्य दिए गए हैं। आपको इनमें से शीर्ष 5 मूल्य चुनने हैं जो आपके लिए सबसे ज्यादा 
                    महत्वपूर्ण हैं।
                </p>

                {/* Table */}
              <AssemenetPdfQuestionContainer/>
      </div>
	);
};

export default AssemenetPdfSectionContainer;
