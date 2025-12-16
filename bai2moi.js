const form = document.getElementById("loginForm");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const messageDiv = document.getElementById("message");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); 

            if (username.value.trim() === "" || password.value.trim() === "") {
                messageDiv.textContent = "Vui lòng nhập đầy đủ username và password!";
                messageDiv.style.color = "red";   
                messageDiv.classList.add("error-message");  
            } else {
                messageDiv.textContent = "Successful!";
                messageDiv.style.color = "black";
                  
            }
        });