import PropTypes from
'prop-types';

export default PropTypes.shape({
  creationTime: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  lastSignInTime: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});
