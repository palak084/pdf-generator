import React from "react";

const InsightNavigatorPage5 = () => {
  return (
    <div className="page4-container">
      <style>
        {`
          .page4-container {
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
            font-size: 14px;
            margin-bottom: 20px;
            text-align: justify;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
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
      <div className="page-number">4</div>

      {/* Section Title */}
      <h2 className="section-title">SECTION-C</h2>

      {/* Instructions */}
      <p className="instructions">
        <b>Instructions:</b> Below is a list of 15 broad fields of study commonly pursued in India. 
        Your task is to select the top 5 areas that resonate most deeply with your interests and aspirations.
      </p>
      <p className="instructions">
        <b>निर्देश:</b> नीचे भारत में आमतौर पर पढ़े जाने वाले 15 व्यापक अध्ययन क्षेत्रों की सूची दी गई है। 
        आपका कार्य उन 5 क्षेत्रों का चयन करना है जो आपके रुचियों और आकांक्षाओं से सबसे अधिक मेल खाते हैं।
      </p>

      {/* Table Content */}
      <table>
        <tbody>
          <tr>
            <td className="num-col">1</td>
            <td>
              <b>Agriculture:</b> Agriculture includes the methods and techniques used in farming to produce food and raw materials.
            </td>
            <td>
              <b>कृषि:</b> कृषि में वे तरीके और तकनीक शामिल हैं, जो खेती में खाद्य पदार्थ और अन्य कच्चा माल उत्पादन करने के लिए उपयोग की जाती हैं।
            </td>
          </tr>

          <tr>
            <td className="num-col">2</td>
            <td>
              <b>Art:</b> Art studies how people express their creativity through painting, music, and storytelling.
            </td>
            <td>
              <b>कला:</b> कला में यह अध्ययन किया जाता है कि लोग अपनी रचनात्मकता को चित्रकला, संगीत और कहानी कहने के माध्यम से कैसे व्यक्त करते हैं।
            </td>
          </tr>

          <tr>
            <td className="num-col">3</td>
            <td>
              <b>Cultural Studies:</b> Cultural studies help in understanding how culture shapes society, identity, and daily life through traditions, beliefs, and practices.
            </td>
            <td>
              <b>सांस्कृतिक अध्ययन:</b> सांस्कृतिक अध्ययन से यह समझने में मदद मिलती है कि परंपराओं, विश्वासों, और प्रथाओं के माध्यम से संस्कृति समाज, पहचान और दैनिक जीवन को कैसे आकार देती है।
            </td>
          </tr>

          <tr>
            <td className="num-col">4</td>
            <td>
              <b>English:</b> The study of the English language teaches grammar rules, vocabulary expansion, and the analysis of literature and texts.
            </td>
            <td>
              <b>अंग्रेज़ी:</b> अंग्रेज़ी भाषा का अध्ययन व्याकरण के नियम, शब्दावली का विस्तार, और साहित्य और पाठों का विश्लेषण सिखाता है।
            </td>
          </tr>

          <tr>
            <td className="num-col">5</td>
            <td>
              <b>Home and Consumer Science:</b> This subject teaches useful skills and knowledge for taking care of the home and family. 
              It provides information on managing daily tasks, choosing a healthy diet, and keeping the family happy and healthy.
            </td>
            <td>
              <b>गृह एवं उपभोक्ता विज्ञान:</b> इस अध्ययन क्षेत्र में परिवार और घरेलू कार्यों की देखभाल करने के उपयोगी कौशल और ज्ञान सिखाए जाते हैं। 
              इसमें दैनिक कार्यों को संभालना, स्वस्थ आहार चुनना और परिवार को खुश और स्वस्थ रखना शामिल है।
            </td>
          </tr>

          <tr>
            <td className="num-col">6</td>
            <td>
              <b>Finance:</b> The study of finance teaches money management, saving, investing, and planning expenses.
            </td>
            <td>
              <b>वित्त:</b> वित्त का अध्ययन पैसे का प्रबंधन, बचत, निवेश, और खर्चों की योजना बनाना सिखाता है।
            </td>
          </tr>

          <tr>
            <td className="num-col">7</td>
            <td>
              <b>Health:</b> Health education includes information about nutrition, exercise, hygiene, and mental well-being.
            </td>
            <td>
              <b>स्वास्थ्य:</b> स्वास्थ्य शिक्षा में पोषण, व्यायाम, स्वच्छता और मानसिक स्वास्थ्य से जुड़ी जानकारी शामिल होती है।
            </td>
          </tr>

          <tr>
            <td className="num-col">8</td>
            <td>
              <b>Languages:</b> Language education involves learning to read, write, speak, and understand different languages.
            </td>
            <td>
              <b>भाषाएँ:</b> भाषाओं की शिक्षा में पढ़ना, लिखना, बोलना और विभिन्न भाषाओं को समझना शामिल होता है।
            </td>
          </tr>

          <tr>
            <td className="num-col">9</td>
            <td>
              <b>Management:</b> The study of management teaches how to plan projects, lead teams, make decisions, and solve problems in various organizations.
            </td>
            <td>
              <b>प्रबंधन:</b> प्रबंधन का अध्ययन यह सिखाता है कि कैसे परियोजनाओं की योजना बनाई जाए, टीम का नेतृत्व किया जाए, निर्णय लिए जाएँ और विभिन्न संगठनों की समस्याओं को हल किया जाए।
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

export default InsightNavigatorPage5;
