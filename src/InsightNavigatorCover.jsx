import React from "react";
import logo from "./media/kcc.jpg"; 
import image from "./media/image.png";

const InsightNavigatorCover = () => {
  return (
    <div className="booklet-container">
      <style>
        {`
          .booklet-container {
            width: 100%;
            min-height: 100vh;
            border: 2px solid #008080;
            position: relative;
            text-align: center;
            font-family: "Georgia", serif;
            background: #fff;
            box-sizing: border-box;
            padding: 40px 20px;
          }

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
            width: 260px;   /* Bigger like reference */
            height: auto;
            margin: 10px auto 6px auto;
            display: block;
          }

          .website {
            color: #333;
            font-size: 16px;
            margin-bottom: 30px;
            text-align: center;
          }

          /* Blue title bar */
          .title-bar {
            background: #009688;
            color: white;
            font-size: 24px;
            font-weight: bold;
            padding: 14px;
            margin: 0 auto 25px auto;
            width: 350px;
            max-width: 700px; /* wide like reference */
            border-radius: 4px;
            letter-spacing: 1px;
          }

          .subtitle {
            font-size: 20px;
            font-weight: bold;
            margin: 15px 0 25px 0;
            text-align: center;
          }

          .navigator-card {
            margin-top: 10px;
            text-align: center;
          }

          .navigator-img {
            width: 200px;   /* bigger image */
            height: 150px;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
            margin-bottom: 15px;
          }

          .author {
            margin-top: 10px;
            font-size: 15px;
            font-style: italic;
            color: #333;
            text-align: center;
          }
        `}
      </style>

      {/* Decorative corners */}
      <div className="corner top-left">❧</div>
      <div className="corner top-right">❧</div>
      <div className="corner bottom-right">❧</div>
      <div className="corner bottom-right">❧</div>

      {/* Header */}
      <div className="header">
        <img src={logo} alt="Logo" className="header-logo" />
        <p className="website">Career-9.com</p>
      </div>

      {/* Blue Title Bar */}
      <div className="title-bar">INSIGHT NAVIGATOR</div>

      {/* Subtitle */}
      <p className="subtitle">TEST BOOKLET</p>

      {/* Navigator Image + Author */}
      <div className="navigator-card">
        <img
          src={image}
          alt="Navigator 360"
          className="navigator-img"
        />
        <p className="author">Dr. Mira Desai</p>
      </div>

      {/* Decorative corners bottom */}
      <div className="corner bottom-left">❧</div>
      <div className="corner bottom-right">❧</div>
    </div>
  );
};

export default InsightNavigatorCover;
