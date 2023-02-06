import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmailCard.css";
import {
  getActiveEmailBody,
  handleEmailClick,
} from "../../features/activeEmail/activeEmailSlice";
import { markAsRead } from "../../features/emails/emailSlice";
function EmailCard(emailData) {
  const emailInfo = emailData.emailData;
  const { isEmailActive, emailBody, activeEmailData } = useSelector(
    (state) => state.activeEmail
  );
  const dispatch = useDispatch();

  const handleEmailCardClick = () => {
    dispatch(handleEmailClick({ payload: emailInfo }));
    dispatch(getActiveEmailBody(emailInfo.id));
    dispatch(markAsRead(emailInfo.id));
  };
  return (
    <div className="email-card" onClick={() => handleEmailCardClick()}>
      <div className="email-profile">
        {emailInfo.from.email.charAt(0).toUpperCase()}
      </div>
      <div className="email-info">
        <div className="email-from">
          From : {emailInfo.from.name}
          {emailInfo.from.email}
        </div>
        <div className="email-subject">Subject : {emailInfo.subject}</div>
        <div className="email-description">{emailInfo.short_description}</div>
        <div className="email-time">{emailInfo.date}</div>
      </div>
    </div>
  );
}

export default EmailCard;
