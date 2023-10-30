let section= document.createElement("section")

fetch("https://jsonplaceholder.typicode.com/users")
.then(result => result.json())
.then(final => final.map((user) => {
    console.log(user)

    userDiv=document.createElement("div")
    userDiv.setAttribute("class", "userDiv")

    userName=document.createElement("h2")
    userName.append(user.name)
    userDiv.append(userName)

    section.append(userDiv)
    // aq sheqmeni user more info div, romelic daemateba chveulebrivi userdivs da iqneba shignit da ara garet
   

    userDiv.addEventListener("click", ()=> {
        console.log("daeklika")
        // shvekmant elementi div romelsac sigrdze da sigane da backgound ekneba da setattribute 
        user_more_info_popup=document.getElementById("popup")
        user_more_info_popup.style = ""

        userUser=document.getElementById("popup-user")
        userUser.textContent = `User name: ${user.name}`
        user_more_info_popup.append(userUser)


        userPhone=document.getElementById("popup-phone")
        userPhone.textContent =  user.phone
        user_more_info_popup.append( userPhone)
    
        userUsername=document.getElementById("popup-username")
        userUsername.textContent =  user.username
        user_more_info_popup.append( userUsername)
        
        userCity=document.getElementById("popup-city")
        userCity.textContent =  user.address.city
        user_more_info_popup.append( userCity)
    
        userEmail=document.getElementById("popup-email")
        userEmail.textContent =  user.email
        user_more_info_popup.append( userEmail)
    
        user_more_info_popup.classList.remove("closed")

        // <button onclick="closePopUp()">Close</button>
        buttons = document.getElementsByClassName("close-popup-button")
        if(!buttons.length){
            close_popup_button = document.createElement("button")
            close_popup_button.setAttribute("class", "close-popup-button")
            close_popup_button.addEventListener("click", closePopUp)
            user_more_info_popup.append(close_popup_button)
        }else{
            buttons[0].style = ""
        }
    })}
        
))


document.body.append(section)

function closePopUp(){
    user_more_info_popup = document.getElementById("popup")
    close_popup_button = document.getElementsByClassName("close-popup-button")[0]
    
    user_more_info_popup.style.display = "none";
    close_popup_button.style.display = "none";
}
    




