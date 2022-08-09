// Authentication screen Interface Structure/ Estrutura da interface da tela de autenticacao
import './styles.scss'; 

export function SignIn(){
    
    return (
        <div className="container">
            <h1>Access your account</h1>
        <span>
            Using a social Authentication, for example, Google Authentication <br/>
            makes the user life easier a
        </span>
        <button type="button" className="button">
            Access with Google
        </button>
        </div>
    );
}