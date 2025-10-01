import React from "react";

const InsightNavigatorPage12 = () => {
  return (
    <div className="page12-container">
      <style>
        {`
          .page12-container {
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
            margin-top: 30px;
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

      {/* Table Content */}
      <table>
        <tbody>
          <tr>
            <td>
              <b>Q51.</b> I sing songs or play an instrument at school functions.
              <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q51.</b> मैं स्कूल के कार्यक्रमों में गाने गाता हूं या कोई वाद्य यंत्र बजाता हूं। 
              <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q52.</b> I enjoy working in group projects more than working alone.
              <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q52.</b> मुझे समूह परियोजनाओं में काम करना अकेले काम करने की तुलना में अधिक पसंद है। 
              <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q53.</b> I am able to convince other students to participate in any school activities and events.
              <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q53.</b> मैं दूसरे विद्यार्थियों को किसी भी स्कूल की गतिविधियों में भाग लेने के लिए मना लेता हूं। 
              <br />a) हां <br />b) नहीं
            </td>
          </tr>

          <tr>
            <td>
              <b>Q54.</b> I prefer to keep track of my homework and make sure it's completed on time.
              <br />a) Yes <br />b) No
            </td>
            <td>
              <b>Q54.</b> मुझे अपने होमवर्क का हिसाब रखना और यह पक्का करना अच्छा लगता है कि यह समय पर पूरा हो जाए। 
              <br />a) हां <br />b) नहीं
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

export default InsightNavigatorPage12;
