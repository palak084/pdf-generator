import React from "react";

const InsightNavigatorPage20 = () => {
  return (
    <div className="page20-container">
      <style>
        {`
          .page20-container {
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
              <b>7. I like to learn more about myself.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>7. मुझे अपने बारे में अधिक जानना पसंद है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>8. I always know how I am feeling.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>8. मैं हमेशा जानता हूँ कि मैं कैसा महसूस कर रहा हूँ।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>9. I keep a diary.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>9. मैं एक डायरी रखता/रखती हूँ।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>10. I find it easy to make up stories.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>10. मुझे कहानियाँ बनाना आसान लगता है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>11. I often talk to myself – out loud or in my head.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>11. मैं अक्सर अपने आपसे बात करता हूँ – कभी जोर से और कभी मन ही मन।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>12. I find pleasure in reading.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>12. मुझे पढ़ने में आनंद आता है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>13. I enjoy logic puzzles such as 'sudoku'.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>13. मुझे तर्क पहेलियाँ जैसे 'सुडोकू' पसंद हैं।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>14. People behaving irrationally annoy me.</b><br />
              a) Strongly Agree<br />
              b) Agree
            </td>
            <td>
              <b>14. लोग जब अव्यवस्थित व्यवहार करते हैं, मुझे परेशान करता है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत
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

export default InsightNavigatorPage20;
