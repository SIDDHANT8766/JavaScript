const users = [
  {
    name: "Yash Patil",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    bio: "Silent chaos in a loud world. Not for everyone."
  },
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Living life one adventure at a time."
  },
  {
    name: "Priya Verma",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
    bio: "Books, coffee, and endless dreams."
  },
  {
    name: "Ananya Joshi",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600",
    bio: "Collecting memories instead of things."
  },
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600",
    bio: "Turning ideas into reality through code."
  },
  {
    name: "Neha Deshmukh",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    bio: "Creating my own sunshine every day."
  },
  {
    name: "Aditya Kulkarni",
    pic: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600",
    bio: "Explorer by heart, engineer by profession."
  }
];

function ShowUser(Arr)
{
    Arr.forEach(function(user)
    {

                // Card
        let card = document.createElement("div");
        card.className = "card";

        // Image
        let img = document.createElement("img");
        img.className = "bg-img";
        img.src = user.pic;

        // Blurred Layer
        let blur = document.createElement("div");
        blur.className = "blurred-layer";

        // Content
        let content = document.createElement("div");
        content.className = "content";

        // Heading
        let h3 = document.createElement("h3");
        h3.textContent = user.name;

        // Paragraph
        let p = document.createElement("p");
        p.textContent = user.bio;

        // Append Elements
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blur);
        card.appendChild(content);

        // Append card to the container
        //document.body.appendChild(card);  
        document.querySelector(".cards-container").appendChild(card);          
    });
};

ShowUser(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){

    let NewUser = users.filter((userfiltered) =>{
        return userfiltered.name.startsWith(inp.value);
    })

    //document.querySelector(".card").innerHTML = "";
    document.querySelector(".cards-container").innerHTML = ""; 

   ShowUser(NewUser);

});             