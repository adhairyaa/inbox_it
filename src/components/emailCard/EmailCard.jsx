import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmailCard.css";
import {
  getActiveEmailBody,
  openEmail,
  closeEmail,
} from "../../features/activeEmail/activeEmailSlice";
import { markAsRead } from "../../features/emails/emailSlice";
function EmailCard(emailData) {
  const emailInfo = emailData.emailData;
  const { isEmailActive, activeEmailData } = useSelector(
    (state) => state.activeEmail
  );
  const dispatch = useDispatch();

  const handleEmailCardClick = () => {
    isEmailActive === false
      ? dispatch(openEmail(emailInfo))
      : activeEmailData.id === emailInfo.id
      ? dispatch(closeEmail())
      : dispatch(openEmail(emailInfo));
    dispatch(getActiveEmailBody(emailInfo.id));
    dispatch(markAsRead(emailInfo.id));
  };
  const date = new Date(1582729505000),
    dformat =
      [date.getMonth() + 1, date.getDate(), date.getFullYear()].join("/") +
      " " +
      [date.getHours(), date.getMinutes()].join(":");
  return (
    <div
      className="email-card"
      onClick={() => handleEmailCardClick()}
      style={{ backgroundColor: emailInfo.isRead ? "#f2f2f2" : "white" }}
    >
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
        <div className="email-time">
          {dformat}{" "}
          {emailInfo.isFavorite && (
            <span style={{ color: "#e54065" }}> favorite</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailCard;
