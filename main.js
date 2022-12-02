var users = [
    {
        name: "Lelah Nichols",
        picture: "images/profile1.jpg",
        city: "Troy, MI",
        badges: ["clothes", "stem"]
    },
    {
        name: "Jesus Weiss",
        picture: "images/profile2.jpg",
        city: "Fort Worth, TX",
        badges: ["headset", "gadget", "speed", "winter"]
    },
    {
        name: "Annie Rice",
        picture: "images/profile3.jpg",
        city: "Austin, TX",
        badges: ["road", "mountain", "trip", "earth", "nature"]
    },
    {
        name: "Robert Brower",
        picture: "images/profile4.jpg",
        city: "Cincinnati, OH",
        badges: ["Maintenance", "gears", "frames", "repair"]
    },
    {
        name: "Amy Campbell",
        picture: "images/profile5.jpg",
        city: "Warrior, AL",
        badges: ["music", "disks"]
    },
    {
        name: "Anthony S. Morin",
        picture: "images/profile6.jpg",
        city: "Lyndhurst, NJ",
        badges: ["vintage", "electric"]
    }
]

var usersElement = document.getElementById("users")

function AddUser(user) {
    // add user-item html from user object
    var userItem = document.createElement("div")
    userItem.className = "user-item"
    let innerHtml = `
        <div class="user-left">
            <div class="profile-picture-container">
                <img class="profile-picture" src="${user.picture}" alt="profile picture">
            </div>
        </div>

        <div class="user-right">
            <div class="user-name">${user.name}</div>
            <div class="user-location">${user.city}</div>
            <div class="user-badges">
    `

    // add badges
    user.badges.forEach(badge => {
        innerHtml += `<div class="user-badge">${badge}</div>`;
    });

    innerHtml += `</div></div>`

    userItem.innerHTML = innerHtml

    usersElement.appendChild(userItem)
}

function ClearUsers() {
    usersElement.innerHTML = ""
}

function OnSearch(event) {
    var search = event.target.value
    var filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    
    console.log(filteredUsers)
    console.log(search)
    
    ClearUsers()

    filteredUsers.forEach(user => AddUser(user))
}

users.forEach(user => {
    AddUser(user)
})
