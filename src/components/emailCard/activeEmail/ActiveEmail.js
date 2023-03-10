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
  const date = new Date(1582729505000),
    dformat =
      [date.getMonth() + 1, date.getDate(), date.getFullYear()].join("/") +
      " " +
      [date.getHours(), date.getMinutes()].join(":");

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
                <p className="active-email-name">{activeEmailData.subject}</p>
                <p>{dformat}</p>
              </div>
            </div>

            <button
              className="mark-favorite"
              onClick={() => dispatch(markAsFavorite(activeEmailData.id))}
              style={{
                backgroundColor: currentEmail[0].isFavorite
                  ? "#e54065"
                  : "grey",
              }}
            >
              {currentEmail[0].isFavorite ? (
                <p>remove favorite</p>
              ) : (
                <p>add favourite</p>
              )}
            </button>
          </div>
          <div className="active-email-body">
            {emailBody.body.toString().substring(8)}
          </div>
        </div>
      )}
    </>
  );
}

export default ActiveEmail;
