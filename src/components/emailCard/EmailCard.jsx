import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmailCard.css";
import { handleEmailClick } from "../../features/activeEmail/activeEmailSlice";
function EmailCard(emailData) {
  const emailInfo = emailData.emailData;
  const { isEmailActive } = useSelector((state) => state.activeEmail);
  const dispatch = useDispatch();
  return (
    <div className="email-card" onClick={() => dispatch(handleEmailClick())}>
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
      {isEmailActive && (
        <div className="active-email">
          <div>
            <div className="active-email-info">
              <div className="active-email-profile email-profile">
                {emailInfo.from.email.charAt(0).toUpperCase()}
              </div>
              <div className="active-email-subject">{emailInfo.subject}</div>
              <div className="active-email-date">{emailInfo.date}</div>
            </div>

            <button className="mark-favorite">mark as favourite</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailCard;
