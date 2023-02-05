import React from "react";
import { useSelector } from "react-redux";
import "./ActiveEmail.css";
function ActiveEmail() {
  const { isEmailActive, emailBody, activeEmailData, status } = useSelector(
    (state) => state.activeEmail
  );
  console.log(emailBody);
  return (
    <>
      {isEmailActive && (
        <div className="active-email">
          <div>
            <div className="active-email-info">
              <div className="active-email-profile email-profile">
                {activeEmailData.from.email.charAt(0).toUpperCase()}
              </div>
              <div className="active-email-subject">
                {activeEmailData.subject}
              </div>
              <div className="active-email-date">{activeEmailData.date}</div>
            </div>

            <button className="mark-favorite">mark as favourite</button>
          </div>
          <div className="active-email-body">{emailBody.body}</div>
        </div>
      )}
    </>
  );
}

export default ActiveEmail;
