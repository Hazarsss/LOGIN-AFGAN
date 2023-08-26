import LoginPageForm from "../components/LoginPageForm"
import LoginPageHeader from "../components/LoginPageHeader"

export default function Login() {
    return (
        <div  className='row justify-content-center'>
            <div id="cardLogin" className="col-md-3">
                <div className="card text-center">
                    <LoginPageHeader />
                    <LoginPageForm />
                </div>
            </div>
        </div>
    )
}