import React from "react";
import logo from "./media/kcc.jpg"; 
import image from "./media/image.png";

const InsightNavigatorCover = () => {
  return (
    <div className="booklet-container">
      <style>
        {`
          .booklet-container {
            width: 794px;          /* A4 width */
            height: 1123px;        /* A4 height */
            border: 2px solid #008080;
            position: relative;
            margin: 0 auto;
            text-align: center;
            font-family: "Georgia", serif;
            background: #fff;
            box-sizing: border-box;
            padding: 50px 40px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* keep flow top to bottom */
            align-items: center;
          }

          /* Decorative corners */
          .corner {
            position: absolute;
            font-size: 22px;
            color: #008080;
            font-weight: bold;
          }
          .top-left { top: 10px; left: 10px; }
          .top-right { top: 10px; right: 10px; }
          .bottom-left { bottom: 10px; left: 10px; }
          .bottom-right { bottom: 10px; right: 10px; }

          /* Logo styling */
          .header-logo {
            width: 280px;   /* Larger like reference */
            margin-top: 40px;
            margin-bottom: 10px;
          }

          .website {
            color: #333;
            font-size: 16px;
            margin-bottom: 20px;
          }

          /* Blue title bar */
          .title-bar {
            background: #009688;
            color: white;
            font-size: 26px;
            font-weight: bold;
            padding: 14px 0;
            width: 1000px;
            max-width: 650px;   /* wide like reference */
            margin: 10px auto;
            border-radius: 4px;
            letter-spacing: 1px;
          }

          .subtitle {
            font-size: 20px;
            font-weight: bold;
            margin: 10px 0 30px 0;
          }

          /* Navigator image section */
          .navigator-card {
            text-align: center;
            margin-top: 10px;
          }

          .navigator-img {
            width: 380px;   /* Much bigger to match reference */
            height: auto;
            border-radius: 6px;
            margin-bottom: 12px;
          }

          .author {
            margin-top: 8px;
            font-size: 16px;
            font-style: italic;
            color: #333;
          }
        `}
      </style>

      {/* Decorative corners */}
      <div className="corner top-left">❧</div>
      <div className="corner top-right">❧</div>
      <div className="corner bottom-left">❧</div>
      <div className="corner bottom-right">❧</div>

      {/* Header */}
      <img src={logo} alt="Logo" className="header-logo" />
      <p className="website">Career-9.com</p>

      {/* Blue Title Bar */}
      <div className="title-bar">INSIGHT NAVIGATOR</div>

      {/* Subtitle */}
      <p className="subtitle">TEST BOOKLET</p>

      {/* Navigator Image + Author */}
      <div className="navigator-card">
        <img src={image} alt="Navigator 360" className="navigator-img" />
        <p className="author">Dr. Mira Desai</p>
      </div>
    </div>
  );
};

export default InsightNavigatorCover;
