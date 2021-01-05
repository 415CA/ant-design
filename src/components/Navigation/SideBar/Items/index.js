import { Link } from 'react-router-dom';
import * as ROUTES from '../../../../constants/Routes';
import SignOut from '../../../../pages/SignOut';

const SideBarItems = {
  admin: [
    <Link to={ROUTES.LANDING}>Landing</Link>,
    <Link to={ROUTES.HOME}>Home</Link>,
    <Link to={ROUTES.ACCOUNT}>Account</Link>,
    <Link to={ROUTES.ADMIN}>Admin</Link>,
    <SignOut />,
  ],
  authorized: [
    <Link to={ROUTES.LANDING}>Landing</Link>,
    <Link to={ROUTES.HOME}>Home</Link>,
    <Link to={ROUTES.ACCOUNT}>Account</Link>,
    <SignOut />,
  ],
  nonAuthorized: [
    <Link to={ROUTES.LANDING}>Landing</Link>,
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>,
  ],
};

export default SideBarItems;
