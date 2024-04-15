import { useNavigate } from "react-router"

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className="error-page">
        <div className="error-message"
            style={
                {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                gap: "1rem",
                fontFamily: "sans-serif",
                textAlign: "center",
                color: "#ff001e",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "2rem",
                }
            }
        >
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you requested could not be found.</p>
            <p>Please check the URL and try again.</p>
            <button
                onClick={() => navigate("/")}
                style={{
                    padding: "0.5rem 1rem",
                    border:"none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    background:"#007bff",
                    color:"#fff",
                }}
            >
                Go Back 
            </button>
        </div>
    </div>
  )
}

export default ErrorPage