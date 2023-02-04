import React, { useEffect } from "react";
import "./EmailListing.css";
import { useSelector, useDispatch } from "react-redux";
import EmailCard from "../../components/emailCard/EmailCard";
import { getEmails } from "../../features/emails/emailSlice";
function EmailListing() {
  const { emails, status } = useSelector((state) => state.emails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmails());
  }, []);

  return (
    <div className="email-listing-page">
      <div className="email-cards">
        {status === "fulfilled" ? (
          emails.map((email) => <EmailCard emailData={email} />)
        ) : (
          <div>loading....</div>
        )}
      </div>
    </div>
  );
}

export default EmailListing;
