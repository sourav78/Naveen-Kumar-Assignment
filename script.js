
fetch("./images.json")
    .then(response => response.json())
    .then(doctors => {

        doctors.forEach(doctor => {
            const doctor_cont = document.createElement("div")
            doctor_cont.setAttribute("class", "doctors")

            const img_cont = document.createElement("div")
            img_cont.setAttribute("class", "img-cont")
            const details = document.createElement("div")
            details.setAttribute("class", "details")

            const img = document.createElement("img")
            img.setAttribute("src", doctor.image)

            const name = document.createElement("h3")
            name.innerText = doctor.name
            const designation = document.createElement("p")
            designation.innerText = doctor.designation

            img_cont.appendChild(img)

            details.appendChild(name)
            details.appendChild(designation)

            doctor_cont.appendChild(img_cont)
            doctor_cont.appendChild(details)
            document.querySelector(".doctors-cont").append(doctor_cont)
        });
    }
)