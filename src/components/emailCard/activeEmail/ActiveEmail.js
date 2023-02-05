import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ActiveEmail() {
  const { isEmailActive } = useSelector((state) => state.activeEmail);
  const dispatch = useDispatch();
  return (
    <div>
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

export default ActiveEmail;
