import React from "react";

const InsightNavigatorPage4 = () => {
  return (
    <div className="page3-container">
      <style>
        {`
          .page3-container {
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

          .section-title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .instructions {
            font-size: 14px;
            margin-bottom: 20px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }

          table, th, td {
            border: 1px solid #333;
          }

          th, td {
            padding: 8px;
            vertical-align: top;
            text-align: left;
          }

          .num-col {
            width: 30px;
            text-align: center;
            font-weight: bold;
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
      <div className="page-number">3</div>

      {/* Section Title */}
      <h2 className="section-title">SECTION-B (Continued)</h2>

      {/* Table Content */}
      <table>
        <tbody>
          <tr>
            <td className="num-col">8</td>
            <td>
              <b>Prestige/ Recognition:</b> Prestige and recognition refers to
              looking for a chance to be seen as important person. It is
              important to get a pat on back for the hard work you put in. It
              refers to being appreciated for the task done. For example, finding
              it important to take lead role in school activities and getting fame
              for your achievements.
            </td>
            <td>
              <b>प्रतिष्ठा/ मान्यता:</b> सम्मान और प्रतिष्ठा पाने का मतलब है कि आपको
              महत्वपूर्ण व्यक्ति के रूप में देखे जाने का मौका मिले। आपके द्वारा किए गए
              कठिन परिश्रम के लिए प्रशंसा मिलना महत्वपूर्ण है। उदाहरण के लिए स्कूल
              गतिविधियों में नेतृत्व करना और अपनी उपलब्धियों के लिए प्रसिद्ध होना।
            </td>
          </tr>

          <tr>
            <td className="num-col">9</td>
            <td>
              <b>Creativity:</b> Creativity refers to using own ideas and
              experimenting with new things. It refers to valuing out of box
              ideas and innovation in any given assignment.
            </td>
            <td>
              <b>रचनात्मकता (Creativity):</b> इसका मतलब है कि आप किसी कार्य में अपने
              विचारों का उपयोग करें और कुछ नया करने का प्रयास करें। इसका मतलब है कि
              आप दिए गए कार्य में सामान्य से हटकर विचारों और नवाचार को अधिक महत्व दें।
            </td>
          </tr>

          <tr>
            <td className="num-col">10</td>
            <td>
              <b>Working with Mind:</b> It’s a belief in brain power. Like they
              say "Pen is mightier than a sword." It refers to being able to
              analyze events around and use creative thinking for problem
              solving.
            </td>
            <td>
              <b>मस्तिष्क से कार्य करना:</b> यह दिमाग की शक्ति में विश्वास रखने जैसा है।
              उदाहरण के लिए "कलम तलवार से अधिक शक्तिशाली है"। इसका मतलब है कि आप अपने
              आसपास की घटनाओं का विश्लेषण कर सकें और समस्याओं को हल करने के लिए रचनात्मक
              सोच का इस्तेमाल कर सकें।
            </td>
          </tr>

          <tr>
            <td className="num-col">11</td>
            <td>
              <b>Physical Activity:</b> Physical activity simply refers to valuing
              things that are related to body activity like giving importance to
              sport, exercise and outdoor activities.
            </td>
            <td>
              <b>शारीरिक गतिविधियाँ:</b> शारीरिक गतिविधियों का मतलब है उन चीजों को
              महत्व देना जो शरीर की गतिविधियों से जुड़ी हों। जैसे खेल, व्यायाम और
              बाहरी गतिविधियों को अधिक महत्व देना।
            </td>
          </tr>

          <tr>
            <td className="num-col">12</td>
            <td>
              <b>Leadership:</b> Supervising/managing others and helping in
              development of a larger group. For example being captain of a sport
              team.
            </td>
            <td>
              <b>नेतृत्व:</b> दूसरों की देखरेख करना और एक बड़े समूह को विकसित करने में मदद
              करना। उदाहरण के लिए खेल की टीम का कप्तान बनना।
            </td>
          </tr>

          <tr>
            <td className="num-col">13</td>
            <td>
              <b>Routine Activity:</b> Believe that structure and discipline is
              important. It refers to enjoying routine and having clear plans. For
              example, arranging your study notes or closet in same order cause it
              works the best for you.
            </td>
            <td>
              <b>नियमित गतिविधियाँ:</b> इसका मतलब है कि नियम और अनुशासन बहुत ज़रूरी हैं।
              इसका मतलब है कि आप नियमित कार्य का आनंद लें और अपने अध्ययन सामग्री या
              कपड़ों को एक ही तरीके से व्यवस्थित करें क्योंकि यह आपके लिए सबसे अच्छा
              काम करता है।
            </td>
          </tr>

          <tr>
            <td className="num-col">14</td>
            <td>
              <b>Supervised Work:</b> Having supportive management that stands
              behind you, e.g. need for teacher or coach to help you progress.
            </td>
            <td>
              <b>नियंत्रित कार्य:</b> दूसरों की देखरेख करना ताकि वे आपके कार्य में मदद कर
              सकें। उदाहरण के लिए शिक्षक या कोच की मदद की आवश्यकता होना ताकि आपकी
              प्रगति हो सके।
            </td>
          </tr>

          <tr>
            <td className="num-col">15</td>
            <td>
              <b>Working Conditions:</b> Refers to having a safe position and
              nice place to work, you should be free to do your task, get reward
              for your work and not having fear of losing job.
            </td>
            <td>
              <b>कार्य परिस्थितियाँ:</b> इसका मतलब है एक सुरक्षित और अच्छा कार्य स्थल
              होना। आपको स्वतंत्र होना चाहिए अपना कार्य करने के लिए, अपने कार्य के लिए
              इनाम मिलना चाहिए और नौकरी खोने का डर नहीं होना चाहिए।
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

export default InsightNavigatorPage4;
