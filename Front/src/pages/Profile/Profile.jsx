import React from "react";
import User from "../../components/User.jsx";
import Account from "../../components/Account.jsx";
import AccountCardData from "../../data/AccountCardData.json";

/* User profile page */
function UserProfile() {
  return (
    <div className="profile-page">
      <main className="bg-dark">
        {/* Return user componant */}
        <User />
        {/* Return items from json file with map */}
        {AccountCardData.map((data) => (
          /* Return account component */
          <Account
            key={data.id}
            title={data.title}
            amount={data.amount}
            description={data.description}
          />
        ))}
      </main>
    </div>
  );
}

export default UserProfile;
