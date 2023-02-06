import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ActiveEmail.css";
import { markAsFavorite } from "../../../features/emails/emailSlice";
function ActiveEmail() {
  const { isEmailActive, emailBody, activeEmailData, status } = useSelector(
    (state) => state.activeEmail
  );
  const { emails } = useSelector((state) => state.emails);

  const currentEmail = emails.filter(
    (email) => email.id === activeEmailData.id
  );

  const dispatch = useDispatch();

  return (
    <>
      {" "}
      {status === "fulfilled" && isEmailActive && (
        <div className="active-email">
          <div className="active-email-topbar">
            <div className="active-email-info">
              <div className="active-email-profile email-profile">
                {activeEmailData.from.email.charAt(0).toUpperCase()}
              </div>
              <div className="active-email-subject">
                <p>{activeEmailData.subject}</p>
                <p>{activeEmailData.date}</p>
              </div>
            </div>

            <button
              className="mark-favorite"
              onClick={() => dispatch(markAsFavorite(activeEmailData.id))}
              style={{
                backgroundColor: currentEmail[0].isFavorite
                  ? "#e54065"
                  : "#f2f2f2",
              }}
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
