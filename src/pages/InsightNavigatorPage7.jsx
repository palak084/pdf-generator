import React from "react";

const InsightNavigatorPage7 = () => {
  return (
    <div className="page7-container">
      <style>
        {`
          .page7-container {
            width: 794px;       /* A4 width */
            height: 1123px;     /* A4 height */
            border: 2px solid #008080;
            margin: 0 auto;
            font-family: "Georgia", serif;
            background: #fff;
            padding: 40px 30px;
            box-sizing: border-box;
            position: relative;
          }

          .page-number {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 14px;
            color: #333;
          }

          .section-title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .instructions {
            font-size: 13px;
            line-height: 1.6;
            text-align: justify;
            margin-bottom: 20px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }

          th, td {
            border: 1px solid #333;
            padding: 8px;
            vertical-align: top;
            text-align: left;
          }

          th {
            background: #f4f4f4;
            text-align: center;
            font-weight: bold;
          }

          .footer {
            position: absolute;
            bottom: 20px;
            left: 30px;
            right: 30px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #008080;
            font-weight: bold;
          }
        `}
      </style>

      {/* Page Number */}
      <div className="page-number">6</div>

      {/* Section Title */}
      <div className="section-title">SECTION-D</div>

      {/* Instructions */}
      <div className="instructions">
        <b>Instructions:</b> Here are some statements about your interests. 
        Mark "Yes" if the statement applies to you, and "No" if it doesn’t. 
        There are no right or wrong answers—just choose what feels true for you. 
        While there’s no time limit for this exercise, try to answer each question quickly. 
        Consider what you prefer, even if you haven’t had the chance to do the activity yet.
      </div>

      <div className="instructions">
        <b>निर्देश:</b> नीचे आपकी रुचियों (Interests) से जुड़े कुछ कथन दिए गए हैं। यदि कोई कथन आप पर लागू होता है तो “हाँ” (Yes) का निशान लगाएँ, और यदि नहीं होता है तो “नहीं” (No) का। इसमें सही या गलत उत्तर नहीं होते—आपको बस वही चुनना है जो आपको सही लगे। इस अभ्यास के लिए समय सीमा नहीं है, लेकिन प्रत्येक प्रश्न का उत्तर देते समय कोशिश करें कि आप तुरंत अपनी पसंद को सोचें और तुरंत टिक करें, भले ही वह कार्य आपने कभी न किया हो, फिर भी जो आपको सही लगे, उसे चुनें।
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>English Version</th>
            <th>Hindi Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Q1. I prefer learning through practical experiments rather than just listening to lectures.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q1. मुझे व्याख्यान सुनकर (श्रवण) पढ़ने के बजाय, प्रयोग करके सीखना ज्यादा पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q2. I like to participate in debates or discussions to explore different viewpoints.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q2. मुझे अलग-अलग विचार जानने के लिए वाद-विवाद (debates) या चर्चाओं (discussions) में भाग लेना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q3. I like to participate in art or drama competition in school.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q3. मुझे स्कूल में कला (art) या नाटक (drama) की प्रतियोगिता में भाग लेना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q4. I enjoy social gatherings just to be with people.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q4. मुझे लोगों के साथ रहने के लिए सामाजिक समारोहों (social gatherings) में शामिल होना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q5. I like planning birthday parties and get-togethers with friends.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q5. मुझे दोस्तों के साथ जन्मदिन की पार्टी या गेट-टुगेदर समारोह की योजना बनाना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q6. I like keeping my school notes and textbooks neatly organized.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q6. मुझे अपने स्कूल की पुस्तकों और नोट्स को अच्छे से व्यवस्थित रखना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q7. I enjoy building and assembling blocks of different shapes and sizes.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q7. मुझे अलग-अलग आकार और आकार के ब्लॉक्स बनाना और जोड़ना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q8. I enjoy solving math word problems.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q8. गणित के सवाल, जिनमें कथाएं होती हैं, मुझे हल करना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <div className="footer">
        <span>INSIGHT NAVIGATOR</span>
        <span>CAREER-9</span>
      </div>
    </div>
  );
};

export default InsightNavigatorPage7;
