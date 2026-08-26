let form = document.querySelector("form") 
let name = document.querySelector("#name") 
let role = document.querySelector("#role") 
let bio = document.querySelector("#bio") 
let photo = document.querySelector("#photo") 

const usermanager = {
    user : [],

    init : function () {  
        form.addEventListener("submit", this.submitForm.bind(this))
    },

    submitForm: function(e){
        e.preventDefault();
        this.adduser();   
    },

    adduser : function () {
        this.user.push({
            name : name.value,
            role : role.value,
            bio : bio.value,
            photo : photo.value
        });

        form.reset();
        this.renderUI();
        },
    renderUI : function(){

        document.querySelector(".users").innerHTML = "";   // remember it

        this.user.forEach(function(user){

                            // Create Card
                const card = document.createElement("div");
                card.className = "bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 duration-300";

                // Create Image
                const img = document.createElement("img");
                img.src = user.photo;
                img.className = "w-28 h-28 rounded-full mx-auto object-cover border-4 border-purple-300";

                // Create Name
                const name = document.createElement("h2");
                name.className = "text-2xl font-bold mt-5";
                name.textContent = user.name;

                // Create Role
                const role = document.createElement("h3");
                role.className = "text-purple-600 font-semibold";
                role.textContent = user.role;

                // Create Bio
                const bio = document.createElement("p");
                bio.className = "text-gray-600 mt-4";
                bio.textContent = user.bio;

                // Append elements to card
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(role);
                card.appendChild(bio);

                // Append card to container
                document.querySelector(".users").appendChild(card);
        })
    },
    removeuser : function () {},
}

usermanager.init();