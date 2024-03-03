const controller = {}

controller.signUp = (user_data) => {

    ////repasswork khác password
    if (user_data.password.length < 6) {
        alert("Your password must be at least 6 characters");
    }
    else if (user_data.password !== user_data.repassword) {
        alert('Passwords do not match. Please try again.');
    }
    else if (user_data.name !== "" &&
        user_data.email !== "" &&
        user_data.password !== "" &&
        user_data.confirmPassword !== "" &&
        user_data.password === user_data.repassword) {
        return user_data; // Trả về data sạch
    }
}

