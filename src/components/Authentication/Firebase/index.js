import { AuthContext, AuthProvider, withFirebase } from './Context';
import Firebase, { authentication, firestore } from './Initialization';

export default Firebase;

export { AuthContext, AuthProvider, withFirebase, authentication, firestore };
