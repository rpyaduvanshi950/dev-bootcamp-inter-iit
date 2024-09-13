import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import login from '../../assets/login.png'
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe9lszAqMlXT65L4Hsmeg02HElhcBRov0",
    authDomain: "overtime-e9956.firebaseapp.com",
    projectId: "overtime-e9956",
    storageBucket: "overtime-e9956.appspot.com",
    messagingSenderId: "580408705748",
    appId: "1:580408705748:web:9d8b5e218f57ec6d25f141",
    measurementId: "G-YSMTRH059P"
  };

  
  // Initialize Firebase app
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      setError(null);
  
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Redirect to another page after successful login
          navigate("/dashboard");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    return (
      <div className="login-container" style={styles.container}>
        <div className="login-form" style={styles.form}>
          <h2>Login</h2>  
          <form onSubmit={handleLogin}>
            <div style={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <div style={styles.checkboxGroup}>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
              <a href="#" style={styles.forgotPassword}>Forgot password?</a>
            </div>
            <button type="submit" style={styles.button}>Log in</button>
          </form>
          <p>
            Or <a href="/register">register now!</a>
          </p>
        </div>
        <img src={login} alt="" />
      </div>
    );
  };
  
  // Basic styling for the form
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
    },
    form: {
      backgroundColor: "#fff",
      padding: "40px",
      
      // borderRadius: "10px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      height:'345px',
      width: "300px",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    checkboxGroup: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    forgotPassword: {
      color: "#007bff",
      textDecoration: "none",
    },
    button: {
      backgroundColor: "#6c63ff",
      color: "#fff",
      border: "none",
      padding: "10px",
      width: "100%",
      borderRadius: "5px",
      cursor: "pointer",
    },
    error: {
      color: "red",
      marginBottom: "10px",
    },
  };
  
  export default LoginForm;
  