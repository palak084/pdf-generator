import React from "react";

const InsightNavigatorPage14 = () => {
  return (
    <div className="page14-container">
      <style>
        {`
          .page14-container {
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

      {/* Table with Q6 - Q10 */}
      <table>
        <tbody>
          <tr>
            <td>
              <b>6. When there is a conflict with a friend…</b><br />
              A. I resolve it calmly and find a fair solution.<br />
              B. I try to resolve it but sometimes need help.<br />
              C. I often need an elder or other friend’s help to resolve it.<br />
              D. I avoid it or let it continue without resolving it.
            </td>
            <td>
              <b>6. जब किसी दोस्त से झगड़ा होता है, तो…</b><br />
              A. मैं इसे शांतिपूर्वक और सही हल ढूंढ कर सुलझाता हूं।<br />
              B. मैं इसे सुलझाने की कोशिश करता हूं, लेकिन कभी-कभी मुझे मदद की जरूरत होती है।<br />
              C. इसे सुलझाने के लिए मुझे अक्सर किसी बड़े या अन्य दोस्त की मदद की जरूरत होती है।<br />
              D. मैं झगड़े को टालता हूं या उसे बिना सुलझाए ही चलने देता हूं।
            </td>
          </tr>

          <tr>
            <td>
              <b>7. During paper folding activities or chopping vegy at home…</b><br />
              A. I make precise folds and manage detailing well.<br />
              B. I finish with minor errors or less precision.<br />
              C. I complete it but with less accuracy and more time.<br />
              D. I struggle and it often lacks detail.
            </td>
            <td>
              <b>7. कागज मोड़ने की गतिविधियों या घर पर सब्जियां काटने के दौरान…</b><br />
              A. मैं सटीक मोड़ बनाता हूं और विवरण को अच्छी तरह से संभालता हूं।<br />
              B. मैं छोटे-मोटे गलतीयों के साथ गतिविधि को समय पर पूरा करता हूं।<br />
              C. मैं इसे पूरा तो कर लेता हूं, लेकिन कम सटीकता और अधिक समय के साथ।<br />
              D. मुझे मुश्किल होती है और इसमें अक्सर गतिविधियों का विवरण कम होता है।
            </td>
          </tr>

          <tr>
            <td>
              <b>8. When looking at a complex diagram or chart…</b><br />
              A. I quickly understand all details and their relationships.<br />
              B. I understand most details but may miss a few.<br />
              C. I find it challenging and need help to interpret it.<br />
              D. I struggle to understand and often get confused.
            </td>
            <td>
              <b>8. जब मैं कोई जटिल (complex) चार्ट या आरेख देखता हूं, तो…</b><br />
              A. मैं जल्दी सभी विवरण और उनके आपसी संबंधों को समझ लेता हूं।<br />
              B. मैं अधिकांश को समझ लेता हूं, लेकिन कुछ छूट जाते हैं।<br />
              C. मुझे इसे मुश्किल लगता है और इसे समझने में मदद की जरूरत होती है।<br />
              D. मुझे इसे समझने में परेशानी होती है और मैं अक्सर भ्रमित हो जाता हूं।
            </td>
          </tr>

          <tr>
            <td>
              <b>9. When playing strategy games like chess or other video games…</b><br />
              A. I develop winning strategies and make successful decisions.<br />
              B. I do well but sometimes make less effective decisions.<br />
              C. I find it challenging and often adjust my strategies.<br />
              D. I struggle to create effective strategies and make slow progress.
            </td>
            <td>
              <b>9. जब शतरंज या अन्य वीडियो गेम जैसे रणनीतिक खेल खेलते हैं…</b><br />
              A. मैं जीतने की रणनीतियां बनाता हूं और सफलतापूर्वक फैसले लेता हूं।<br />
              B. मैं अच्छा करता हूं, लेकिन कभी-कभी कम प्रभावी फैसले लेता हूं।<br />
              C. मुझे यह मुश्किल लगता है और मैं अक्सर अपनी रणनीतियों को बदलता रहता हूं।<br />
              D. मुझे असरदार रणनीतियां बनाने में मुश्किल होती है और मेरी प्रगति धीमी रहती है।
            </td>
          </tr>

          <tr>
            <td>
              <b>10. When participating in a sport (e.g., basketball, kho-kho)…</b><br />
              A. I perform smoothly and excel in the sport.<br />
              B. I do well but have occasional coordination issues.<br />
              C. I find some movements challenging and need extra practice.<br />
              D. I struggle with coordination and basic movements.
            </td>
            <td>
              <b>10. जब किसी खेल (जैसे बास्केटबॉल, खो-खो) में भाग लेता हूं, तो…</b><br />
              A. मैं अच्छा प्रदर्शन करता हूं और खेल में श्रेष्ठ हूं।<br />
              B. मैं अच्छा करता हूं, लेकिन कभी-कभी तालमेल की समस्या आती है।<br />
              C. मुझे कुछ गतिविधियां करना मुश्किल लगता है और अतिरिक्त अभ्यास की जरूरत होती है।<br />
              D. मुझे समन्वय और बुनियादी गतिविधियों करना मुश्किल लगता है।
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

export default InsightNavigatorPage14;
