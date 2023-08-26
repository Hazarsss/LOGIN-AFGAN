import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="card" id="cardMantapBanteng">
                <img id="imageBanteng" src="./img/Banteng.jpg" className="card-img-top" alt="Mantap Banteng" />
                <div className="card-body">
                    <h5 className="card-title">Mantap Banteng</h5>
                    <p className="card-text">Mari kita dukung capres dan cawapres kita Bpk. Suhardianto dan Bpk. Afgan halabana</p>
                    <button onClick={() => navigate('/')} className="btn btn-primary">Logout</button>
                </div>
            </div>
        </>
    )
}