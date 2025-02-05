import { withAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import "./Page2.css"

function Page2({ signOut , user}){

    return(
        <div className="page-container">
            <h1>Hello { user.username }</h1>
            <button onClick={ signOut }>Sign out</button>
        </div>
    );
}

export default withAuthenticator(Page2);