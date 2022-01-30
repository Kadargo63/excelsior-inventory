import React from 'react';

// import ReactionList from '../components/ReactionList';
// import ReactionForm from '../components/ReactionForm';

// import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';


const SingleItem = props => {

  const { id: itemId } = useParams();

  const { loading, data } = useQuery(QUERY_ITEM, {
    variables: { id: itemId }
  });

  const item = data?.item || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {item.name}
          </span>{' '}
          Item reserved {item.size}
        </p>
        <div className="card-body">
          <p>{item.quantity}</p>
        </div>
      </div>

      {/* {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
      {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
    </div>
  );
};

export default SingleItem;