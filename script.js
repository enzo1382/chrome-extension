let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const deletebtn = document.getElementById("delete-btn")
const savebtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("mylead"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        // listItems += "<li><a href='#'' target='_blank'>" + myLeads[i] + "</a></li>"
        // let liEl = document.createElement("li")
        // liEl.textContent = myLeads[i]
        // ulEl.append(liEl)
        listItems += `
           <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
           </li>
           `
    }
    ulEl.innerHTML = listItems
}

inputbtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("mylead", JSON.stringify(myLeads))
    render(myLeads)

    // To verify that it works:
    console.log(localStorage.getItem("mylead"))
})
deletebtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)

})
const tabs = [
    { url: "https://www.linkedin.com/in/per-harald-borgen/" }
]
savebtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("tabs", JSON.stringify(tabs[0].url))
        render(myLeads)

    })
})
