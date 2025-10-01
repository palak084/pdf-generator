import React from "react";

const InsightNavigatorPage18 = () => {
  return (
    <div className="page18-container">
      <style>
        {`
          .page18-container {
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
              <b>28. When interpreting a visual puzzle or pattern…</b><br />
              A. I quickly recognize and solve the pattern.<br />
              B. I recognize the pattern but take some time to solve it.<br />
              C. I find it challenging and need extra time.<br />
              D. I struggle to see the pattern and often can’t solve it.
            </td>
            <td>
              <b>28. जब आप किसी दृश्यात्मक पहेली या पैटर्न को समझते हैं…</b><br />
              A. मैं जल्दी ही पूरा पैटर्न देख लेता हूं और उसे हल कर लेता हूं।<br />
              B. मैं पैटर्न को पहचान लेता हूं, लेकिन उसे हल करने में कुछ समय लगता है।<br />
              C. मुझे यह मुश्किल लगता है और ज्यादा समय की जरूरत होती है।<br />
              D. मुझे पैटर्न को समझने में मुश्किल होती है और मैं अक्सर इसे हल नहीं कर पाता हूं।
            </td>
          </tr>

          <tr>
            <td>
              <b>29. When questioning information that seems wrong or unclear…</b><br />
              A. I investigate and verify the information thoroughly.<br />
              B. I ask questions and try to clarify most points.<br />
              C. I need help to understand unclear information.<br />
              D. I often accept unclear information without questioning.
            </td>
            <td>
              <b>29. जब कोई जानकारी गलत या अस्पष्ट लगती है, तो आप उस पर सवाल उठाते हैं?</b><br />
              A. मैं उस जानकारी की अच्छी तरह से जांच-पड़ताल और पुष्टि करता हूं।<br />
              B. मैं सवाल पूछता हूं और ज्यादातर बिंदुओं को साफ करने की कोशिश करता हूं।<br />
              C. मुझे अस्पष्ट जानकारी को समझने के लिए मदद की जरूरत होती है।<br />
              D. मैं अक्सर बिना सवाल किए अस्पष्ट जानकारी को मान लेता हूं।
            </td>
          </tr>

          <tr>
            <td>
              <b>30. When learning or practicing martial arts or a new dance routine…</b><br />
              A. I execute movements smoothly with precise control and coordination.<br />
              B. I perform well but occasionally need extra practice for precision.<br />
              C. I find it challenging and often need help to improve.<br />
              D. I struggle with basic movements and frequently need assistance.
            </td>
            <td>
              <b>30. जब आप मार्शल आर्ट्स या कोई नई डांस स्टेप सीखते हैं या अभ्यास करते हैं…</b><br />
              A. मैं सही नियंत्रण और तालमेल के साथ, बिना अटकाव गतिविधियां करता हूं।<br />
              B. मैं अच्छा प्रदर्शन करता हूं, लेकिन सटीकता के लिए कभी-कभी ज्यादा अभ्यास की जरूरत होती है।<br />
              C. मुझे यह मुश्किल लगता है और सुधार करने के लिए अक्सर मदद की जरूरत होती है।<br />
              D. मुझे बुनियादी गतिविधियों में भी मुश्किल होती है और मुझे अक्सर मदद की जरूरत होती है।
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

export default InsightNavigatorPage18;
