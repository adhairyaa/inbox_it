import React from "react";
import "./EmailCard.css";
function EmailCard(emailData) {
  const emailInfo = emailData.emailData;
  return (
    <div className="email-card">
      EmailCard
      <div className="email-profile">
        {emailInfo.from.email.charAt(0).toUpperCase()}
      </div>
      <div className="email-from">
        {emailInfo.from.name}
        {emailInfo.from.email}
      </div>
      <div className="email-subject">subject : {emailInfo.subject}</div>
      <div className="email-description">{emailInfo.short_description}</div>
      <div className="email-time">{emailInfo.date}.</div>
    </div>
  );
}

export default EmailCard;
