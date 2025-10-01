import React from "react";

const InsightNavigatorPage16 = () => {
  return (
    <div className="page16-container">
      <style>
        {`
          .page16-container {
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

          table {
            width: 100%;
            border-collapse: collapse;
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

      <table>
        <tbody>
          <tr>
            <td>
              <b>17. When typing on a keyboard…</b><br />
              A. I type quickly and accurately with minimal errors.<br />
              B. I type quickly but make occasional errors.<br />
              C. I type slowly and often need to correct mistakes.<br />
              D. I find it challenging to type and frequently make errors.
            </td>
            <td>
              <b>17. कीबोर्ड पर टाइप करते समय…</b><br />
              A. मैं जल्दी और सही तरीके से और कम त्रुटियों के साथ टाइपिंग का काम करता हूं।<br />
              B. मैं तेजी से टाइप करता हूं, लेकिन कभी-कभी गलतियां हो जाती हैं।<br />
              C. मैं धीरे-धीरे टाइप करता हूं और अक्सर गलतियों को ठीक करने की आवश्यकता होती है।<br />
              D. मुझे टाइपिंग में कठिनाई होती है और मैं अक्सर गलतियां कर देता हूं।
            </td>
          </tr>

          <tr>
            <td>
              <b>18. When reading a detailed map…</b><br />
              A. I easily identify all landmarks and features.<br />
              B. I identify most but sometimes get confused.<br />
              C. I have difficulty and need extra time.<br />
              D. I find it very hard to understand the map.
            </td>
            <td>
              <b>18. जब किसी विस्तृत नक्शे को पढ़ते हैं…</b><br />
              A. मैं सभी स्थानों और विशेषताओं को आसानी से पहचान लेता हूं।<br />
              B. मैं अधिकांश को पहचान लेता हूं, लेकिन कभी-कभी भ्रमित हो जाता हूं।<br />
              C. मुझे कठिनाई होती है और ज्यादा समय की जरूरत होती है।<br />
              D. मुझे नक्शा समझने में बहुत मुश्किल लगता है।
            </td>
          </tr>

          <tr>
            <td>
              <b>19. When comparing two arguments in debates…</b><br />
              A. I clearly identify which argument is stronger by analyzing both.<br />
              B. I usually find the stronger argument but might miss some details.<br />
              C. I find it hard to compare and often need help to decide.<br />
              D. I struggle to determine which argument is stronger.
            </td>
            <td>
              <b>19. बहस-तर्कों (debates) के दो तर्कों की तुलना करते समय…</b><br />
              A. मैं दोनों को विश्लेषण करता हूं और स्पष्ट रूप से पता लगा लेता हूं कि कौन सा तर्क मजबूत है।<br />
              B. मैं आम तौर पर मजबूत तर्क को पहचान लेता हूं, लेकिन कुछ विवरण छूट सकते हैं।<br />
              C. मुझे तुलना करना मुश्किल लगता है और निर्णय लेने के लिए अक्सर मदद की आवश्यकता होती है।<br />
              D. मुझे यह तय करने में कठिनाई होती है कि कौन सा तर्क मजबूत है।
            </td>
          </tr>

          <tr>
            <td>
              <b>20. When playing a musical instrument…</b><br />
              A. I play smoothly with precise control and consistency.<br />
              B. I play well but occasionally make minor errors.<br />
              C. I find it challenging and need extra practice.<br />
              D. I struggle with accuracy and coordination.
            </td>
            <td>
              <b>20. जब कोई वाद्य यंत्र (musical instrument) बजाता हूं…</b><br />
              A. मैं सहजता और नियंत्रण के साथ, स्थिर प्रदर्शन करता हूं।<br />
              B. मैं अच्छा बजाता हूं, लेकिन कभी-कभी छोटी-छोटी गलतियां हो जाती हैं।<br />
              C. मुझे यह मुश्किल लगता है और अतिरिक्त अभ्यास की जरूरत होती है।<br />
              D. मुझे सटीकता और तालमेल विकसित करने में कठिनाई होती है।
            </td>
          </tr>

          <tr>
            <td>
              <b>21. In Physical training period, During obstacle races …</b><br />
              A. I complete the race in time with no error<br />
              B. I finish quickly but make some error<br />
              C. I Need extra time, but make no error.<br />
              D. I find it difficult to complete the race.
            </td>
            <td>
              <b>21. व्यायाम की अवधि, बाधा दौड़ के दौरान…</b><br />
              A. मैं समय पर दौड़ पूरी करता हूं और त्रुटि नहीं करता हूं।<br />
              B. मैं जल्दी पूरा करता हूं, लेकिन कुछ त्रुटियां कर देता हूं।<br />
              C. मुझे ज्यादा समय चाहिए, लेकिन कोई त्रुटि नहीं करता हूं।<br />
              D. मुझे दौड़ पूरी करना मुश्किल लगता है।
            </td>
          </tr>

          <tr>
            <td>
              <b>22. A team played four games and scored 15, 20, 25 and 30 points. Calculate the average score.</b><br />
              A. I can easily do it.<br />
              B. I need to think a lot orally.<br />
              C. I need paper pencil.<br />
              D. I will prefer to do it on a calculator.
            </td>
            <td>
              <b>22. एक टीम ने चार खेल खेले और 15, 20, 25 और 30 अंक प्राप्त किए, तो औसत (average) अंक की गणना करें।</b><br />
              A. मैं आसानी से कर सकता हूं।<br />
              B. मुझे मौखिक रूप से बहुत सोचने की आवश्यकता है।<br />
              C. मुझे कागज और पेंसिल की आवश्यकता होती है।<br />
              D. मैं इसे कैलकुलेटर पर करना पसंद करूंगा।
            </td>
          </tr>
        </tbody>
      </table>

      <div className="footer">
        <span>INSIGHT NAVIGATOR</span>
        <span>CAREER-9</span>
      </div>
    </div>
  );
};

export default InsightNavigatorPage16;
