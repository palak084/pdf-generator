import React from "react";

const InsightNavigatorPage8 = () => {
  return (
    <div className="page8-container">
      <style>
        {`
          .page8-container {
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
          }

          th, td {
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
      <div className="page-number">7</div>

      {/* Table */}
      <table>
        <tbody>
          <tr>
            <td>
              Q9. I like to perform in social gatherings or annual functions.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q9. मुझे लोगों में भरे आयोजनों या स्कूल के बड़े कार्यक्रमों में अपनी कला दिखाना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q10. I enjoy speaking in front of audiences.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q10. मुझे दर्शकों के सामने बोलने में आनंद आता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q11. I like to be a leader than a follower.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q11. मैं एक अनुसरणकर्ता बनने की बजाय एक नेता बनना पसंद करता हूँ।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q12. I prefer creating time table and maintaining routines.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q12. मुझे समय सारणी (time table) बनाना और नियमित रूप से काम को एक ही तरीके से करना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q13. I would enjoy gardening in field more than just studying about plants.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q13. मुझे पौधों के बारे में सिर्फ पढ़ने से ज्यादा खेतों में बागवानी करना अच्छा लगेगा।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q14. I like testing different ways to make a paper airplane instead of just reading about how they work.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q14. मुझे यह पढ़ने के बजाय कि कागज के हवाई जहाज कैसे उड़ते हैं, उन्हें बनाने के अलग-अलग तरीके आज़माना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q15. I like to participate in drawing competition rather than science fair.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q15. मैं विज्ञान मेले की बजाय चित्रकला प्रतियोगिता में भाग लेना पसंद करता हूँ।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q16. I find it easy to ask others for help.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q16. मुझे दूसरों से मदद माँगना आसान लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q17. I can easily convince people.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q17. मैं लोगों को आसानी से मना सकता हूँ।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q18. I use diaries for managing tasks and schedules efficiently.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q18. मैं अपने कार्य समय और सही तरीके से मैनेज करने के लिए अपनी डायरी का इस्तेमाल करता हूँ।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q19. I would rather help cook dinner than just plan the menu.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q19. मुझे घर का खाना बनाने में मदद करना, खाना बनाने का मेनू बनाने से ज्यादा पसंद है।<br/>
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

export default InsightNavigatorPage8;
