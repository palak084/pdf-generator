import React from "react";

const InsightNavigatorPage21 = () => {
  return (
    <div className="page21-container">
      <style>
        {`
          .page21-container {
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
              <b>15. I don’t use my fingers when I count.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>15. जब मैं गिनती करता हूँ, तो अंगुलियों का उपयोग नहीं करता।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>16. I can play a musical instrument.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>16. मैं एक संगीत वाद्य यंत्र बजा सकता हूँ।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>17. I can identify most sounds without seeing what causes them.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>17. मैं बिना देखे अधिकांश ध्वनियों की उत्पत्ति पहचान सकता हूँ।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>18. I have always dreamed of being a musician or singer.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>18. मैंने हमेशा एक संगीतकार या गायक बनने का सपना देखा है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>19. I often see clear images when I close my eyes.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>19. जब मैं अपनी आँखें बंद करता हूँ, तो मुझे अक्सर स्पष्ट चित्र दिखाई देते हैं।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>20. My favourite subject at school was / is art.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>20. स्कूल में मेरा पसंदीदा विषय कला था।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>21. I can read a map easily.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>21. मैं आसानी से नक्शा पढ़ सकता हूँ।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>22. I prefer to watch wildlife documentaries or books related to it.</b><br />
              a) Strongly Agree<br />
              b) Agree
            </td>
            <td>
              <b>22. मैं वन्यजीवन वृत्तचित्र या उससे संबंधित किताबें देखना पसंद करता हूँ।</b><br />
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

export default InsightNavigatorPage21;
