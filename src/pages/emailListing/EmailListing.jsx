import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmails } from "../../features/emails/emailSlice";
function EmailListing() {
  const { emails, status } = useSelector((state) => state.emails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmails());
  }, []);
  console.log(emails);
  return (
    <div className="email-listing-page">
      <div className="email-cards">aaa</div>
    </div>
  );
}

export default EmailListing;
