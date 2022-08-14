// Authentication screen Interface Structure/ Estrutura da interface da tela de autenticacao
import { useState } from 'react';
import { GoogleLogo} from 'phosphor-react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import './styles.scss'; 
import { auth } from '../../services/firebase';

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => { 
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    
    return (
        <div className="container">
            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="User photo" /> }
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Access your account</h1>
        <span>
            Using a social Authentication, for example, Google Authentication <br/>
            makes the user life easier a
        </span>
        <button type="button" className="button" onClick={handleGoogleSignIn}> 
            <GoogleLogo/>
            Access with Google
        </button>
        </div>
    );
}