import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div>
      <div>{`Author: ${user.name}`}</div>
      <div>
        {`
          Author lives at ${user.address.suite}
          on ${user.address.street} street
          in ${user.address.city}
        `}
      </div>
      <div>
        <a href={`mailto: ${user.email}`}>
          {`Email ${user.name}`}
        </a>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    user: PropTypes.object,
  }).isRequired,
};

export default User;