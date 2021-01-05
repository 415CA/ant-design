import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import SignOutButton from '../../pages/SignOut';

const Topics = {
  authorized: [
    <Link to={ROUTES.LANDING}>Landing</Link>,
    <Link to={ROUTES.HOME}>Home</Link>,
    <Link to={ROUTES.ACCOUNT}>Account</Link>,
    <SignOutButton />,
  ],
  nonAuthorized: [
    <Link to={ROUTES.LANDING}>Landing</Link>,
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>,
  ],
  admin: [
    <Link to={ROUTES.LANDING}>Landing</Link>,
    <Link to={ROUTES.HOME}>Home</Link>,
    <Link to={ROUTES.ACCOUNT}>Account</Link>,
    <Link to={ROUTES.ADMIN}>Admin</Link>,
    <SignOutButton />,
  ],
};

export default Topics;
