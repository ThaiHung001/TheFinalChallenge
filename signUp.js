import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth } from "./scripts/firebase.js";


let register_form = document.getElementById("register_form")
register_form.addEventListener("submit", function (event) {
  event.preventDefault()


  let name = register_form.username.value
  let email = register_form.email.value;
  let password = register_form.password.value;
  let repassword = register_form.confirm_password.value;


  const user_data = {
    name: name.trim(),
    email: email.trim(),
    password: password.trim(),
    repassword: repassword.trim()
  }

  const user_data_clean = controller.signUp(user_data);


  createUserWithEmailAndPassword(auth, user_data_clean.email, user_data_clean.password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user); // Xem user đã có hay chưa

      await sendEmailVerification(user); /// Hàm gửi email xác thực người dùng tới email cá nhân đăng ký tk

      // chạy hàm updateProfile ở đây.

      await signOut(auth);

      alert("Please verify your email");

      window.location.href = './login.html'
    })
    .catch((error) => {
      console.log(error); /// Biết nó in ra gì?
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorCode);
    })
});


