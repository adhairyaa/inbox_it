import React, { useEffect } from "react";
import "./EmailListing.css";
import { useSelector, useDispatch } from "react-redux";
import EmailCard from "../../components/emailCard/EmailCard";
import { getEmails } from "../../features/emails/emailSlice";
import Filter from "../../components/emailCard/filter/Filter";
function EmailListing() {
  const { emails, status } = useSelector((state) => state.emails);
  const { filterType } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmails());
  }, [dispatch]);
  let filteredEmailList = emails;
  const filterEmailList = (filter) => {
    if (filter === "FAVORITE") {
      filteredEmailList = emails.filter((email) => email.isFavorite === true);
    } else if (filter === "IS_READ") {
      filteredEmailList = emails.filter((email) => email.isRead === true);
    } else if (filter === "IS_UNREAD") {
      filteredEmailList = emails.filter((email) => email.isRead === false);
    } else if (filter === "SHOW_ALL") {
      filteredEmailList = emails;
    }
  };
  filterEmailList(filterType);
  return (
    <div className="email-listing-page">
      <Filter />
      <div className="email-cards">
        {status === "fulfilled" ? (
          filteredEmailList.map((email) => <EmailCard emailData={email} />)
        ) : (
          <div>loading....</div>
        )}
      </div>
    </div>
  );
}

export default EmailListing;
