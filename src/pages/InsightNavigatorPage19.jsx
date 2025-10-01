import React from "react";

const InsightNavigatorPage19 = () => {
  return (
    <div className="page19-container">
      <style>
        {`
          .page19-container {
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

          h2 {
            text-align: center;
            font-size: 22px;
            margin-bottom: 5px;
          }

          .instructions {
            font-size: 13px;
            margin-bottom: 15px;
            text-align: justify;
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

      <h2>SECTION-F</h2>

      <div className="instructions">
        <b>Instructions:</b> Read each statement related to different aspects of intelligence. 
        Choose the option that best describes your level of agreement: <br />
        <b>Strongly Agree, Agree, Disagree, Strongly Disagree</b>
        <br /><br />
        <b>निर्देश:</b> नीचे बुद्धिमत्ता (Intelligence) से जुड़े विभिन्न पहलुओं पर कुछ कथन दिए गए हैं। 
        आपको वह विकल्प चुनना है जो आपके विचारों से सबसे अधिक मेल खाता हो: <br />
        <b>पूरी तरह सहमत (Strongly Agree), सहमत (Agree), असहमत (Disagree), पूरी तरह असहमत (Strongly Disagree)</b>
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              <b>1. I play a sport or dance.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>1. मैं एक खेल खेलता हूँ या नृत्य करता हूँ।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>2. I can throw things well - darts, skimming pebbles, frisbees, etc.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>2. मैं विभिन्न चीजों को अच्छी तरह फेंक सकता हूँ - जैसे डार्ट्स, पत्थर को पानी पर उछालना, फ्रिस्बी आदि।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>3. I enjoy and am good at making things - I'm good with my hands.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>3. मैं चीजें बनाने का आनंद लेता हूँ, और इसमें कुशल हूँ - मैं अपने हाथों से काम करने में निपुण हूँ।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>4. I find it easy to talk to new people.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>4. मुझे नए लोगों से बात करना आसान लगता है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>5. It upsets me to see someone cry and not be able to help.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>5. किसी को रोते हुए देखकर और मदद न कर पाना मुझे दुखी करता है।</b><br />
              क) पूरी तरह सहमत<br />
              ख) सहमत<br />
              ग) असहमत<br />
              घ) पूरी तरह असहमत
            </td>
          </tr>

          <tr>
            <td>
              <b>6. I prefer team sports.</b><br />
              a) Strongly Agree<br />
              b) Agree<br />
              c) Disagree<br />
              d) Strongly Disagree
            </td>
            <td>
              <b>6. मैं टीम खेलों को प्राथमिकता देता हूँ।</b><br />
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

export default InsightNavigatorPage19;
