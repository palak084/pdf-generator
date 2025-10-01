import React from "react";

const InsightNavigatorPage13 = () => {
  return (
    <div className="page13-container">
      <style>
        {`
          .page13-container {
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

          .section-title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .instructions {
            font-size: 13px;
            margin-bottom: 20px;
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

      {/* Section Title */}
      <h2 className="section-title">SECTION-E</h2>

      {/* Instructions */}
      <p className="instructions">
        <b>Instructions:</b> Ability refers to the talent, skill, or capacity to perform tasks effectively.
        For the next 30 questions, please choose the statement that best reflects your abilities.
      </p>
      <p className="instructions">
        <b>निर्देश:</b> क्षमता (Ability) का अर्थ है किसी कार्य को प्रभावी ढंग से करने की प्रतिभा, कौशल या क्षमता।
        अगले 30 प्रश्नों में, कृपया उस कथन को चुनें जो आपकी क्षमताओं का सबसे अच्छा वर्णन करता हो।
      </p>

      {/* Table */}
      <table>
        <tbody>
          <tr>
            <td>
              <b>1. During exam...</b><br />
              A. I finish my paper on time with no error.<br />
              B. I finish quickly but possibly make some errors.<br />
              C. I need a little extra time.<br />
              D. I never finish my paper in time.
            </td>
            <td>
              <b>1. परीक्षा के दौरान...</b><br />
              A. मैं बिना किसी गलती के, समय पर अपना पेपर खत्म कर देता हूं।<br />
              B. मैं जल्दी खत्म कर देता हूं, लेकिन कुछ गलतियां हो सकती हैं।<br />
              C. मुझे थोड़ा और समय चाहिए।<br />
              D. मैं कभी भी समय पर अपना पेपर पूरा नहीं कर पाता।
            </td>
          </tr>

          <tr>
            <td>
              <b>2. To calculate daily math with two digit numbers (+,-,×,÷)...</b><br />
              A. I can do it in my mind accurately.<br />
              B. I use my fingers.<br />
              C. I do it with paper pencil.<br />
              D. I need help of a calculator.
            </td>
            <td>
              <b>2. दो अंकों की संख्याओं के साथ रोजाना गणित की गणना करने के लिए (+, -, ×, ÷)...</b><br />
              A. मैं इसे अपने दिमाग में सही तरीके से कर सकता हूं।<br />
              B. मैं अपनी उंगलियों का उपयोग करता हूं।<br />
              C. मैं इसे कागज और पेंसिल से करता हूं।<br />
              D. मुझे कैलकुलेटर की आवश्यकता पड़ती है।
            </td>
          </tr>

          <tr>
            <td>
              <b>3. Given a blank piece of paper...</b><br />
              A. I can very easily think of something to draw or create.<br />
              B. I would like to draw or create.<br />
              C. I would take a while to think and draw something.<br />
              D. I am not good with drawing.
            </td>
            <td>
              <b>3. एक खाली कागज का टुकड़ा मिलने पर...</b><br />
              A. मैं बहुत आसानी से कुछ सोच सकता हूं या बनाने के बारे में सोच सकता हूं।<br />
              B. मैं कुछ बनाना चाहूंगा।<br />
              C. मुझे सोचने और कुछ बनाने में थोड़ा समय लगेगा।<br />
              D. मुझे ड्राइंग अच्छे से नहीं आती।
            </td>
          </tr>

          <tr>
            <td>
              <b>4. When learning new language?</b><br />
              A. I can quickly learn new words.<br />
              B. I take some time to learn new words.<br />
              C. I simply mug up the new words.<br />
              D. It’s difficult to remember new words.
            </td>
            <td>
              <b>4. जब नई भाषा सीखते हैं?</b><br />
              A. मैं नए शब्द जल्दी सीख सकता हूं।<br />
              B. मैं नए शब्द सीखने में थोड़ा समय लेता हूं।<br />
              C. मैं नए शब्द रट लेता हूं।<br />
              D. नए शब्द याद करना कठिन होता है।
            </td>
          </tr>

          <tr>
            <td>
              <b>5. Setting up and configuring new devices, like printers, electric games, or smart phone gadgets...</b><br />
              A. I easily set up a new device.<br />
              B. With little help I can do it.<br />
              C. I follow manual step by step.<br />
              D. I don’t find it handy, always need help.
            </td>
            <td>
              <b>5. नए डिवाइस, जैसे प्रिंटर, इलेक्ट्रिक गेम्स या स्मार्ट फोन गैजेट्स सेट अप और कॉन्फ़िगर करना...</b><br />
              A. मैं नए डिवाइस आसानी से सेट कर सकता हूं।<br />
              B. थोड़ी-सी मदद से कर सकता हूं।<br />
              C. मैं मैनुअल को एक-एक करके पढ़कर करता हूं।<br />
              D. यह मेरे लिए आसान नहीं है, मुझे हमेशा मदद की जरूरत पड़ती है।
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

export default InsightNavigatorPage13;
