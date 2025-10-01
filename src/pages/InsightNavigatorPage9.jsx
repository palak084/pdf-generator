import React from "react";
import { data } from "../data";

const InsightNavigatorPage9 = () => {
  return (
    <div className="page9-container">
      <style>
        {`
          .page9-container {
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
      <div className="page-number">8</div>

      {/* Table */}
      <table>
        <tbody>
          <tr>
            <td>
              Q20. I like to take on challenging projects that require deep thinking.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q20. मुझे ऐसी चुनौतीपूर्ण परियोजनाएँ (projects) लेना पसंद हैं जिनके लिए गहन सोच-विचार की आवश्यकता होती है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q21. I like making greeting cards for my friends’ birthdays rather than just buying them.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q21. मुझे अपने दोस्तों के जन्मदिन पर ग्रीटिंग कार्ड बनाना पसंद है, बजाय सिर्फ उन्हें खरीदने के।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q22. I enjoy volunteering in community service projects or at school events.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q22. मुझे सामुदायिक सेवा परियोजनाओं या स्कूल कार्यक्रमों में स्वयंसेवा करना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q23. I like to start a new club or organize extracurricular activity at school.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q23. मुझे स्कूल में एक नया क्लब शुरू करना या पढ़ाई के अलावा होने वाली गतिविधियों का आयोजन करना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q24. I follow a set daily routine.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q24. मैं रोज़ाना एक तय दिनचर्या का पालन करता हूँ।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q25. I like helping to set up for school plays and making sure everyone knows their roles.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q25. मुझे स्कूल के नाटकों की तैयारी में मदद करना और यह पक्का करना अच्छा लगता है कि हर किसी को अपनी भूमिका पता हो।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q26. I like exploring new topics with fun educational apps.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q26. मुझे मजेदार शैक्षिक ऐप्स के साथ नए विषय खोजना पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q27. I love making fun videos and creating designs for my friends online.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q27. मुझे मजेदार वीडियो बनाना और अपने दोस्तों के लिए ऑनलाइन डिज़ाइन बनाना बहुत पसंद है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q28. I enjoy talking in front of my class and sharing my ideas during projects.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q28. मुझे अपनी कक्षा के सामने बोलना और प्रोजेक्ट्स के दौरान अपने विचार बाँटना अच्छा लगता है।<br/>
              a) हाँ<br/> b) नहीं
            </td>
          </tr>
          <tr>
            <td>
              Q29. I like helping my friends with their projects and coming up with new ideas.<br/>
              a) Yes<br/> b) No
            </td>
            <td>
              Q29. मुझे अपने दोस्तों की उनके प्रोजेक्ट्स में मदद करना और नए विचार देना अच्छा लगता है।<br/>
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

export default InsightNavigatorPage9;
