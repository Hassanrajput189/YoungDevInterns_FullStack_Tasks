import React from 'react';

const Notifications: React.FC<{ message: string }> = (props) => {
  return (
    <div id="notifications">
      <div>
        <span>NOTIFICATIONS</span>
        <span>{props.message}</span>
      </div>
      <div>View all</div>
    </div>
  );
};

export default Notifications;
