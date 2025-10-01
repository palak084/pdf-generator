import React from "react";

const InsightNavigatorPage22 = () => {
  return (
    <div className="page22-container">
      <style>
        {`
          .page22-container {
            width: 794px;   /* A4 width */
            height: 1123px; /* A4 height */
            border: 2px solid #008080;
            margin: 0 auto;
            font-family: "Georgia", serif;
            background: #fff;
            box-sizing: border-box;
            padding: 30px 25px;
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

          td {
            padding: 6px 8px;
            vertical-align: top;
            text-align: left;
            width: 50%;
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
              <b>23. I love to go for trekking or hiking.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>23. मुझे ट्रैकिंग का पहाड़ यात्रा पर जाना पसंद है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>24. I enjoy collecting rocks, shells, leaves, or other things from nature.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>24. मुझे पत्थर, पत्तियों और अन्य चीजें इकट्ठा करना में मज़ा आता है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
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

export default InsightNavigatorPage22;
