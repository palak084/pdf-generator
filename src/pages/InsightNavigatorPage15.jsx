import React from "react";

const InsightNavigatorPage15 = () => {
  return (
    <div className="page15-container">
      <style>
        {`
          .page15-container {
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

      {/* Table with Q11 - Q16 */}
      <table>
        <tbody>
          <tr>
            <td>
              <b>11. In a handwriting race…</b><br />
              A. I finish quickly and accurately<br />
              B. I finish quickly but there are few spelling mistakes in copying<br />
              C. I need extra time<br />
              D. I could never finish in time
            </td>
            <td>
              <b>11. जब लेखन की प्रतियोगिता होती है…</b><br />
              A. मैं जल्दी और सही तरीके से काम पूरा करता हूं।<br />
              B. मैं जल्दी काम पूरा करता हूं, लेकिन लिखते समय कुछ वर्तनी (spelling) की गलतियां हो सकती हैं।<br />
              C. मुझे ज्यादा समय चाहिए।<br />
              D. मैं कभी समय पर काम पूरा नहीं कर पाता।
            </td>
          </tr>

          <tr>
            <td>
              <b>12. To calculate the price of items after applying a certain percentage discount…</b><br />
              A. I can orally do it<br />
              B. I need paper and pen<br />
              C. It takes a lot of time to calculate<br />
              D. I find it difficult need a gadget to calculate
            </td>
            <td>
              <b>12. किसी निश्चित प्रतिशत छूट लागू करने के बाद वस्तुओं की कीमत की गणना करने के लिए…</b><br />
              A. मैं मौखिक रूप से यह कर सकता हूं।<br />
              B. मुझे कागज और पेन चाहिए।<br />
              C. इसमें गणना करने में काफी समय लगता है।<br />
              D. मुझे मुश्किल लगता है, इसे कैलकुलेटर करने के लिए मुझे किसी गैजेट की जरूरत होती है।
            </td>
          </tr>

          <tr>
            <td>
              <b>13. When working on creative projects, like crafts or designing things?</b><br />
              A. I enjoy and try to create something unique<br />
              B. I plan on something different but can’t completely do it<br />
              C. I think about something easy to do<br />
              D. I borrow the idea from somewhere do it
            </td>
            <td>
              <b>13. जब क्रिएटिव प्रोजेक्ट्स बनाते हैं, जैसे क्राफ्ट या कोई चीज डिजाइन करना, तो आप क्या करते हैं?</b><br />
              A. मुझे यह पसंद है और मैं कुछ अनोखा बनाने की कोशिश करता हूं।<br />
              B. मैं कुछ अलग करने की सोचता हूं, लेकिन उसे पूरे तरीके से नहीं कर पाता।<br />
              C. मैं कुछ आसान करने की सोचता हूं जो आसानी से किया जा सके।<br />
              D. मैं कहीं और से आइडिया लेकर उसे करता हूं।
            </td>
          </tr>

          <tr>
            <td>
              <b>14. During debates and group discussion…</b><br />
              A. I do extensive research and preparation<br />
              B. I look up for basic concepts and present<br />
              C. I share what I know<br />
              D. I do not participate debates and discussions
            </td>
            <td>
              <b>14. जब बहस (डिबेट) और समूह चर्चा होती है…</b><br />
              A. मैं विस्तारपूर्वक अध्ययन और तैयारी करता हूं।<br />
              B. मैं बुनियादी बातें देखकर प्रस्तुत करता हूं।<br />
              C. मैं जो जानता हूं, उसे साझा करता हूं।<br />
              D. मैं बहस और चर्चाओं में भाग नहीं लेता।
            </td>
          </tr>

          <tr>
            <td>
              <b>15. Repairing a broken toy or gadget…</b><br />
              A. I always figure out and fix it myself<br />
              B. Mostly I manage to fix it<br />
              C. Sometimes I need help in fixing it<br />
              D. I can’t figure out myself as I am not good with gadgets
            </td>
            <td>
              <b>15. एक टूटा हुआ खिलौना या गैजेट को मरम्मत करना…</b><br />
              A. मैं हमेशा इसे खुद समझकर ठीक कर लेता हूं।<br />
              B. अधिकांशतः मैं इसे ठीक कर लेता हूं।<br />
              C. कभी-कभी मुझे ठीक करने में मदद की जरूरत होती है।<br />
              D. मैं खुद इसे ठीक नहीं कर पाता हूं क्योंकि मैं उपकरणों के साथ अच्छा नहीं हूं।
            </td>
          </tr>

          <tr>
            <td>
              <b>16. When working on a group project…</b><br />
              A. I contribute ideas and help solve any problems that come up<br />
              B. I contribute but sometimes struggle with problem-solving<br />
              C. I rely on others to sort out the problems<br />
              D. I find it hard to contribute and solve problems in the group
            </td>
            <td>
              <b>16. जब समूह प्रोजेक्ट पर काम करते हैं, तो…</b><br />
              A. मैं अपने विचार देता हूं और सामने आने वाली किसी भी समस्या को हल करने में मदद करता हूं।<br />
              B. मैं योगदान तो करता हूं, लेकिन कभी-कभी समस्याओं को सुलझाने में मुझे मुश्किल होती है।<br />
              C. मैं समस्याओं को हल करने के लिए दूसरों पर निर्भर रहता हूं।<br />
              D. मुझे समूह में योगदान देने और समस्याओं को हल करने में मुश्किल होती है।
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

export default InsightNavigatorPage15;
