// Import Firebase Auth dan Facebook Provider
import { getAuth, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Inisialisasi auth dan provider
const auth = getAuth();
const provider = new FacebookAuthProvider();

// Fungsi login
function loginWithFacebook() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Login sukses
      const user = result.user;
      console.log("Login berhasil!");
      console.log("User:", user.displayName, user.email);
      alert(`Selamat datang, ${user.displayName}`);
    })
    .catch((error) => {
      // Tangani error
      console.error("Login gagal:", error);
      alert("Login gagal: " + error.message);
    });
}

// Tambahkan event listener ke tombol login
document.getElementById("fb-login-btn").addEventListener("click", loginWithFacebook);
