let arr = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        eventLocation: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        eventLocation: "San Francisco, CA",
        hideTitle:"hide"
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        eventLocation: "San Francisco, CA",
        hideTitle:"hide"
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        eventLocation: "San Francisco, CA",
        hideTitle:"hide"
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        eventLocation: "San Francisco, CA",
        hideTitle:"hide"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club ",
        eventLocation: "San Francisco, CA",
        hideTitle:"hide"
    },
];

let shows = document.querySelector(".shows");
let tickets = document.createElement("section");
tickets.classList.add("shows__tickets");
let showsTitle=document.createElement("h1");
showsTitle.classList.add("shows__title");
showsTitle.textContent="Shows";
shows.appendChild(showsTitle);

for (let i = 0; i < arr.length; i++) {
    let ticket = document.createElement("article");
    ticket.classList.add("shows__tickets-ticket");
    tickets.appendChild(ticket);

    let date = document.createElement("div");
    date.classList.add("shows__tickets-ticket-date");
    let dateTitle = document.createElement("span");
    dateTitle.classList.add("shows__tickets-ticket-date-title");
    dateTitle.classList.add(arr[i].hideTitle);
    dateTitle.textContent = "DATE";
    let dateContent = document.createElement("span");
    dateContent.classList.add("shows__tickets-ticket-date-content");
    date.appendChild(dateTitle);
    date.appendChild(dateContent);

    let venue = document.createElement("div");
    venue.classList.add("shows__tickets-ticket-venue");
    let venueTitle = document.createElement("span");
    venueTitle.classList.add("shows__tickets-ticket-venue-title");
    venueTitle.classList.add(arr[i].hideTitle);
    venueTitle.textContent = "VENUE";
    let venueContent = document.createElement("span");
    venueContent.classList.add("shows__tickets-ticket-venue-content");
    venue.appendChild(venueTitle);
    venue.appendChild(venueContent);

    let eventLocation = document.createElement("div");
    eventLocation.classList.add("shows__tickets-ticket-eventLocation");
    let eventLocationTitle = document.createElement("span");
    eventLocationTitle.classList.add("shows__tickets-ticket-eventLocation-title");
    eventLocationTitle.classList.add(arr[i].hideTitle);
    eventLocationTitle.textContent = "LOCATION";
    let eventLocationContent = document.createElement("span");
    eventLocationContent.classList.add("shows__tickets-ticket-eventLocation-content");
    eventLocation.appendChild(eventLocationTitle);
    eventLocation.appendChild(eventLocationContent);

    let button = document.createElement("button");
    button.classList.add("shows__tickets-ticket-button");
    button.textContent="BUY TICKETS";

    ticket.appendChild(date);
    ticket.appendChild(venue);
    ticket.appendChild(eventLocation);
    ticket.appendChild(button);
    dateContent.textContent = arr[i].date;
    venueContent.textContent = arr[i].venue;
    eventLocationContent.textContent = arr[i].eventLocation;
}

shows.appendChild(tickets);
