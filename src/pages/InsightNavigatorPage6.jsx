import React from "react";

const InsightNavigatorPage6 = () => {
  return (
    <div className="page6-container">
      <style>
        {`
          .page6-container {
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

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            margin-top: 30px;
          }

          table, th, td {
            border: 1px solid #333;
          }

          th, td {
            padding: 8px;
            vertical-align: top;
            text-align: left;
          }

          .num-col {
            width: 30px;
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
      <div className="page-number">5</div>

      {/* Table Content */}
      <table>
        <tbody>
          <tr>
            <td className="num-col">10</td>
            <td>
              <b>Mathematics:</b> Mathematics involves the study of calculations,
              geometry, algebra, and data analysis.
            </td>
            <td>
              <b>गणित:</b> गणित में गणनाएँ, ज्यामिति, बीजगणित और डेटा विश्लेषण का अध्ययन शामिल है।
            </td>
          </tr>

          <tr>
            <td className="num-col">11</td>
            <td>
              <b>Music:</b> Music teaches how to create, perform, and appreciate
              sounds and rhythms using various instruments and voice.
            </td>
            <td>
              <b>संगीत:</b> संगीत हमें अलग-अलग वाद्य यंत्रों (instruments) और आवाज़ का इस्तेमाल करके ध्वनि,
              ताल, लय और संगीत बनाना सिखाता है।
            </td>
          </tr>

          <tr>
            <td className="num-col">12</td>
            <td>
              <b>Science:</b> Science includes subjects like biology, chemistry,
              physics, and earth sciences to understand how the world works.
            </td>
            <td>
              <b>विज्ञान:</b> विज्ञान में जीव विज्ञान, रसायन विज्ञान, भौतिकी और पृथ्वी विज्ञान जैसे विषय शामिल हैं
              जो यह समझने का प्रयास करते हैं कि दुनिया कैसे काम करती है।
            </td>
          </tr>

          <tr>
            <td className="num-col">13</td>
            <td>
              <b>Vocational Studies:</b> This field prepares individuals for
              professions that involve practical skills like car repair, gardening,
              carpentry, baking, and cooking.
            </td>
            <td>
              <b>व्यावसायिक अध्ययन:</b> यह क्षेत्र लोगों को ऐसे कार्यों के लिए तैयार करता है, जिसमें हाथ से काम करना होता है। 
              जैसे, कार की मरम्मत, बागवानी, बढ़ईगिरी का काम, बेकिंग और खाना बनाना।
            </td>
          </tr>

          <tr>
            <td className="num-col">14</td>
            <td>
              <b>Social Sciences:</b> Social sciences teach how society functions,
              historical events, and the impact of economic and political systems.
            </td>
            <td>
              <b>सामाजिक विज्ञान:</b> सामाजिक विज्ञान यह सिखाता है कि समाज कैसे कार्य करता है, ऐतिहासिक घटनाएँ, 
              और आर्थिक व राजनीतिक प्रणालियों का प्रभाव समाज पर कैसा होता है।
            </td>
          </tr>

          <tr>
            <td className="num-col">15</td>
            <td>
              <b>Technology:</b> The study of technology includes subjects like
              engineering, computer science, and digital tools, helping explore how
              technology influences our world.
            </td>
            <td>
              <b>प्रौद्योगिकी:</b> प्रौद्योगिकी के अध्ययन में इंजीनियरिंग, कंप्यूटर विज्ञान और डिजिटल उपकरणों जैसे विषय शामिल हैं,
              जो यह समझने में मदद करते हैं कि प्रौद्योगिकी हमारी दुनिया पर कैसे असर डालती है।
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

export default InsightNavigatorPage6;
