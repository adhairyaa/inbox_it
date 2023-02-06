import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ActiveEmail.css";
import { markAsFavorite } from "../../../features/emails/emailSlice";
function ActiveEmail() {
  const { isEmailActive, emailBody, activeEmailData, status } = useSelector(
    (state) => state.activeEmail
  );

  const dispatch = useDispatch();

  return (
    <>
      {" "}
      {status === "fulfilled" && isEmailActive && (
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

            <button
              className="mark-favorite"
              onClick={() => dispatch(markAsFavorite(activeEmailData.id))}
            >
              mark as favourite
            </button>
          </div>
          <div className="active-email-body">{emailBody.body}</div>
        </div>
      )}
    </>
  );
}

export default ActiveEmail;
