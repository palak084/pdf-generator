import React from "react";

const InsightNavigatorPage11 = () => {
  return (
    <div className="page11-container">
      <style>
        {`
          .page11-container {
            width: 794px;   /* A4 width */
            height: 1123px; /* A4 height */
            border: 2px solid #008080;
            margin: 0 auto;
            font-family: "Georgia", serif;
            background: #fff;
            box-sizing: border-box;
            padding: 30px 20px;
            position: relative;
          }

          .section-title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .instructions {
            font-size: 13px;
            margin-bottom: 15px;
            text-align: justify;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            font-size: 13px;
          }

          table, th, td {
            border: 1px solid black;
          }

          th, td {
            padding: 6px 8px;
            vertical-align: top;
            text-align: left;
          }

          .footer {
            position: absolute;
            bottom: 10px;
            left: 20px;
            right: 20px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #008080;
            font-weight: bold;
          }
        `}
      </style>

      <h2 className="section-title">SECTION-D</h2>

      <table>
        <tbody>
          <tr>
            <td>
              <b>Q40.</b> I enjoy participating in awareness campaigns like,
              yoga day or cleanliness drive. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q40.</b> मुझे योग दिवस या स्वच्छता अभियान जैसे जागरूकता अभियानों में
              भाग लेना अच्छा लगता है। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q41.</b> I like to take a lead in classroom activities like
              group projects. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q41.</b> मुझे कक्षा की गतिविधियों जैसे कि समूह प्रोजेक्ट्स में नेतृत्व करना पसंद है। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q42.</b> I like to track my habits and organize my daily
              routines. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q42.</b> मुझे अपनी आदतों पर नजर रखना और अपनी दिनचर्या की योजना व व्यवस्था करना पसंद है। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q43.</b> I enjoy building small things for myself like pen
              stand, science project or art and craft. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q43.</b> मुझे अपने लिए छोटे-छोटे चीजें बनाना पसंद है, जैसे पेन स्टैंड, विज्ञान प्रोजेक्ट या कला और क्राफ्ट। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q44.</b> I enjoy researching information for school projects or
              personal interests. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q44.</b> मुझे स्कूल प्रोजेक्ट्स या व्यक्तिगत रुचियों के लिए जानकारी खोजने में आनंद आता है। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q45.</b> I like to imagine multiple ideas for a creativity
              project. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q45.</b> मुझे किसी रचनात्मक परियोजना (creativity project) के लिए
              कई तरह के विचार सोचना पसंद है। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q46.</b> I enjoy making new friends or meeting different
              people. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q46.</b> मैं नए दोस्त बनाने या विभिन्न लोगों से मिलने का आनंद लेता हूं। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q47.</b> I actively participate in political discussions and
              listen to political news. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q47.</b> मैं राजनीतिक चर्चाओं में शामिल रहना व सुनना और राजनीतिक खबरें सुनना पसंद करता हूं। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q48.</b> I always set up my study area and cupboard properly.{" "}
              <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q48.</b> मैं हमेशा अपनी पढ़ाई करने की जगह और अलमारी को ठीक से सजाता हूं। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q49.</b> I enjoy cleaning and organizing my room by myself.{" "}
              <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q49.</b> मुझे खुद से अपने कमरे को साफ-सफाई और व्यवस्था करना अच्छा लगता है। <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q50.</b> I can figure out reasons if my friend is not sharing
              something with me. <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q50.</b> मैं इस बात का पता लगा सकता हूं कि मेरा दोस्त मुझसे कुछ क्यों नहीं कह रहा है। <br />a) हां <br />b) नहीं
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

export default InsightNavigatorPage11;
