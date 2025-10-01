import React from "react";

const InsightNavigatorPage10 = () => {
  return (
    <div className="page10-container">
      <style>
        {`
          .page10-container {
            width: 794px;        /* A4 width */
            height: 1123px;      /* A4 height */
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

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }

          td {
            border: 1px solid #333;
            padding: 8px;
            vertical-align: top;
            text-align: left;
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
      <div className="page-number">9</div>

      {/* Table */}
      <table>
        <tbody>
          <tr>
            <td>
              Q30. I enjoy organizing my homework and keeping track of my grades.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q30. मुझे समय पर अपना होमवर्क पूरा करना और अपने अंक (grades) पर नज़र रखना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q31. I like building blocks and making sure all the pieces fit perfectly.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q31. मुझे बिल्डिंग ब्लॉक्स पसंद हैं और यह सुनिश्चित करना कि सभी हिस्से पूरे तरह से फिट हो जाएं।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q32. I often spot small details in pictures and easily find differences in puzzles.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q32. अक्सर तस्वीरों में छोटे-छोटे बातें देख लेता हूँ और पहेलियों में फर्क आसानी से पता लगा लेता हूँ।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q33. I love creating pattern drawings and learning about different art forms.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q33. मुझे तरह-तरह की कला में नये आरेख और पैटर्न बनाना व सीखना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q34. I like talking about different cultures and how people live around the world.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q34. मुझे अलग-अलग संस्कृतियों और दुनिया भर में लोग कैसे रहते हैं, इस बारे में बात करना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q35. I enjoy being the team leader in group projects and helping my classmates understand things.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q35. मुझे समूह प्रोजेक्ट्स में लीडर बनना और अपने क्लासमेट्स को चीज़ें समझने में मदद करना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q36. I like following step-by-step instructions for any task or activity.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q36. मुझे किसी भी काम या गतिविधि के लिए दिए गए, एक-एक करके निर्देशों का पालन करना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q37. I enjoy participating in sports.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q37. मुझे खेलों में भाग लेना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q38. I think carefully about what might happen before I decide what to do.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q38. मैं किसी निर्णय से पहले यह विचार करता हूँ कि क्या हो सकता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q39. I enjoy creating posters and logos for school events and clubs.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q39. मुझे स्कूल के इवेंट और क्लब्स के लिए पोस्टर और लोगो बनाना अच्छा लगता है।<br/>
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

export default InsightNavigatorPage10;
