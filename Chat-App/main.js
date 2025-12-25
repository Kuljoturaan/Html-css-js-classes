// const scriptURL = "https://script.google.com/macros/s/AKfycbzjcNNTDTGiPZHeMhUrpP4o3blwY2Bs0tLyWs3m42vvsYVxYzdK4vJ5PtepGiNpmJaB-Q/exec"
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault()
//     console.log("Form submitted!")

//     const data = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         message: document.getElementById("message").value
//     }
//     console.log("Data:", data)

// })
// fetch(scriptURL, {
//       method: "POST",
//       body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(response => {
//       alert("Form submitted successfully!");
//       document.getElementById("contactForm").reset();
//     })
//     .catch(error => {
//       console.error("Error!", error);
//       alert("Something went wrong!");
//     });