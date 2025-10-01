import React from "react";

const InsightNavigatorPage3 = () => {
  return (
    <div className="page3-container">
      <style>
        {`
          .page3-container {
            width: 794px;   /* A4 width */
            height: 1123px; /* A4 height */
            border: 2px solid #008080;
            margin: 0 auto;
            background: #fff;
            font-family: "Georgia", serif;
            box-sizing: border-box;
            padding: 50px 40px 80px 40px;
            position: relative;
          }

          /* Page number top-right */
          .page-number {
            position: absolute;
            top: 20px;
            right: 40px;
            font-size: 14px;
            color: #333;
          }

          /* Section Title */
          .section-title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          /* Instructions */
          .instructions {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: justify;
          }

          .hindi-instructions {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: justify;
            font-family: "Noto Sans Devanagari", sans-serif;
          }

          /* Table styling */
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            font-size: 14px;
          }

          th, td {
            border: 1px solid #333;
            padding: 10px;
            vertical-align: top;
            text-align: left;
          }

          th {
            background: #f2f2f2;
            font-weight: bold;
            text-align: center;
          }

          .num-col {
            width: 40px;
            text-align: center;
            font-weight: bold;
          }

          .eng-col {
            width: 50%;
            padding: 10px;
          }

          .hin-col {
            width: 50%;
            padding: 10px;
            font-family: "Noto Sans Devanagari", sans-serif;
          }

          /* Footer */
          .footer {
            position: absolute;
            bottom: 25px;
            left: 40px;
            right: 40px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-weight: bold;
            color: #0066cc;
          }
        `}
      </style>

      {/* Page Number */}
      <div className="page-number">2</div>

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
      <table>
        <tbody>
          <tr>
            <td className="num-col">1</td>
            <td className="eng-col">
              <b>Good Salary:</b> Receiving sufficient money to live a comfortable lifestyle. Like for example your pocket money is sufficient to manage necessary expenses and allows some saving.
            </td>
            <td className="hin-col">
              <b>अच्छा वेतन:</b> आराम से जिंदगी जीने के लिए काफी पैसे प्राप्त करना। आपका पॉकेट मनी आपके जरूरी खर्चों को पूरा करने में सक्षम है और थोड़ा बहुत बचत करने में मदद कर जाती है।
            </td>
          </tr>
          <tr>
            <td className="num-col">2</td>
            <td className="eng-col">
              <b>Job Security:</b> Assurance that you won't lose your job come what may. This helps one plan future dreams and goals knowing there is a fixed income with minimum risk. For example job of a teacher.
            </td>
            <td className="hin-col">
              <b>नौकरी की सुरक्षा:</b> भरोसा कि आप नौकरी नहीं खोएंगे। यह भविष्य के सपनों और लक्ष्यों की योजना बनाने में मदद करता है क्योंकि एक निश्चित आय और न्यूनतम जोखिम है। उदाहरण: एक शिक्षक की नौकरी।
            </td>
          </tr>
          <tr>
            <td className="num-col">3</td>
            <td className="eng-col">
              <b>Variety-Diversion:</b> Job variety makes a job more interesting and engaging. It means you're not doing the same thing every day. It’s like managing extra-curricular and home chores while focusing on school activities and still enjoying it all.
            </td>
            <td className="hin-col">
              <b>विविधता-विक्षेप:</b> नौकरी में अलग-अलग कार्य करना उसे अधिक रोचक और आकर्षक बनाता है। इसका मतलब है कि आप हर दिन एक ही काम नहीं कर रहे हैं। यह ऐसे है जैसे आप स्कूल की गतिविधियों पर ध्यान केंद्रित करते हुए अतिरिक्त गतिविधियों और घरेलू कार्यों को भी संभालते हैं।
            </td>
          </tr>
          <tr>
            <td className="num-col">4</td>
            <td className="eng-col">
              <b>Working in Team/ Group:</b> Working with others, in groups or team, where it is a friendly and non-competitive environment. Here team or group goals are considered important than personal interest.
            </td>
            <td className="hin-col">
              <b>टीम में काम करना:</b> दूसरों के साथ, समूह या टीम में काम करना जहां वातावरण दोस्ताना और गैर-प्रतिस्पर्धी होता है। यहां टीम या समूह के लक्ष्यों को व्यक्तिगत हित से अधिक महत्वपूर्ण माना जाता है।
            </td>
          </tr>
          <tr>
            <td className="num-col">5</td>
            <td className="eng-col">
              <b>High achievement:</b> High achievement refers to setting and completing challenging goals. It includes setting long term goals with clear objectives, optimistically managing to reach the goal and always attempting for success. For example setting targets for competitive exams.
            </td>
            <td className="hin-col">
              <b>उच्च उपलब्धि:</b> इसमें चुनौतीपूर्ण लक्ष्यों को तय करना और उन्हें पूरा करना शामिल है। इसमें स्पष्ट उद्देश्यों के साथ दीर्घकालिक लक्ष्य तय करना, लक्ष्य तक पहुंचने के लिए आशावादी रूप से प्रबंधन करना और सफलता प्राप्त करने का प्रयास करना शामिल है। उदाहरण: प्रतियोगी परीक्षाओं के लिए लक्ष्य तय करना।
            </td>
          </tr>
          <tr>
            <td className="num-col">6</td>
            <td className="eng-col">
              <b>Independence/ Autonomy:</b> Independence refers to making decision on our own with little or no supervision. It is like being your own boss. It is also about being making own choices and being responsible for them.
            </td>
            <td className="hin-col">
              <b>आत्मनिर्भरता:</b> इसका अर्थ है कि हम अपनी मर्जी से निर्णय लें और कम या बिना निगरानी के। यह ऐसा है जैसे कि आप खुद अपने बॉस हों। इसमें अपने निर्णय लेना और उनके लिए जिम्मेदार होना भी शामिल है।
            </td>
          </tr>
          <tr>
            <td className="num-col">7</td>
            <td className="eng-col">
              <b>Working with Hands:</b> Working with hands refers to using practical skills to create things with your own hands rather than taking help from machines. For example, choosing to cook over ready to eat meals.
            </td>
            <td className="hin-col">
              <b>हाथों से काम करना:</b> इसका मतलब है अपने हाथों से कुछ बनाने के लिए व्यावहारिक कौशल का उपयोग करना बजाय मशीनों से मदद लेने के। उदाहरण: रेडी टू ईट भोजन के बजाय खुद से खाना पकाना चुनना।
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

export default InsightNavigatorPage3;
