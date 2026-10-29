
/* VIBELY DEMO APP
   This is a frontend prototype: demo members, stories and chat are local.
   It does not connect to a real server or create a live multi-user room.
*/
"use strict";

// Creates image URLs using Unsplash's image service.
const image = (id, width = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

// Sample people for the demo.
// Amina and Imani use a photo of a Black woman.
const people = [
  {
    id: "amina",
    name: "Amina W.",
    city: "Nairobi, Kenya",
    avatar: image("photo-1531123897727-8f129e1688ce", 180),
    bio: "Soft-life enthusiast, football loyalist, and collector of tiny beautiful moments.",
    interests: ["Football", "Afrobeats", "Photography"],
    currently: "Finding the best match-day atmosphere and new music.",
    tag: "The good-energy friend"
  },
  {
    id: "daniel",
    name: "Daniel K.",
    city: "London, UK",
    avatar: image("photo-1500648767791-00dcc994a43e", 180),
    bio: "A lifelong football fan who enjoys good banter and meeting people outside his bubble.",
    interests: ["Football", "Gaming", "Podcasts"],
    currently: "Getting ready for the big game with snacks.",
    tag: "The match-day analyst"
  },
  {
    id: "zara",
    name: "Zara A.",
    city: "Lagos, Nigeria",
    avatar: image("photo-1524504388940-b1c1722653e1", 180),
    bio: "Music is my love language. I make playlists for people I haven't met yet.",
    interests: ["Afrobeats", "Dance", "Movies"],
    currently: "Building a playlist for the next late-night session.",
    tag: "The playlist plug"
  },
  {
    id: "leo",
    name: "Leo M.",
    city: "São Paulo, Brazil",
    avatar: image("photo-1506794778202-cad84cf45f1d", 180),
    bio: "Curious by default. Here for sports, language swaps and unexpected friendships.",
    interests: ["Football", "Culture", "Travel"],
    currently: "Teaching friends Portuguese football chants.",
    tag: "The culture connector"
  },
  {
    id: "mei",
    name: "Mei L.",
    city: "Singapore",
    avatar: image("photo-1517841905240-472988babdf9", 180),
    bio: "Film lover, amateur illustrator and professional overthinker of movie endings.",
    interests: ["Movies", "Art", "Anime"],
    currently: "Rewatching a comfort film and sketching scenes.",
    tag: "The movie thinker"
  },
  {
    id: "noah",
    name: "Noah J.",
    city: "Toronto, Canada",
    avatar: image("photo-1507003211169-0a1dd7228f2d", 180),
    bio: "Gaming after work, indie music at all hours, and always up for a friendly challenge.",
    interests: ["Gaming", "Music", "Tech"],
    currently: "Looking for a co-op game crew with good vibes.",
    tag: "The co-op teammate"
  },
  {
    id: "imani",
    name: "Imani R.",
    city: "Accra, Ghana",
    avatar: image("photo-1531123897727-8f129e1688ce", 180),
    bio: "Creative soul documenting everyday life. I believe strangers can become a community.",
    interests: ["Photography", "Music", "Culture"],
    currently: "Capturing street style and discovering new artists.",
    tag: "The creative eye"
  },
  {
    id: "mateo",
    name: "Mateo C.",
    city: "Madrid, Spain",
    avatar: image("photo-1504257432389-52343af06ae3", 180),
    bio: "Football, cinema, and long conversations about why a story works.",
    interests: ["Football", "Movies", "Books"],
    currently: "Hosting a watch party for a classic film.",
    tag: "The story nerd"
  }
];

// Sample watch rooms.
const events = [
  {
    id: "football",
    title: "Global Football Lounge",
    category: "Football",
    description: "Big-game energy, friendly rivalry, live reactions and fans from every corner.",
    time: "Tonight · 8:00 PM EAT",
    members: 1284,
    people: ["amina", "daniel", "leo", "imani"],
    image: image("photo-1522778119026-d647f0596c20", 1000),
    label: "MATCH DAY",
    storyIds: ["s1", "s3"]
  },
  {
    id: "afrobeats",
    title: "Afrobeats After Hours",
    category: "Music",
    description: "Trade tracks, catch the vibe and discover what the world is dancing to.",
    time: "Today · 9:30 PM EAT",
    members: 642,
    people: ["zara", "amina", "imani", "noah"],
    image: image("photo-1459749411175-04bf5292ceea", 1000),
    label: "MUSIC & VIBES",
    storyIds: ["s2", "s4"]
  },
  {
    id: "movie",
    title: "Movie Night Club",
    category: "Movies",
    description: "Watch together, share theories, and debate the ending without ruining the fun.",
    time: "Tomorrow · 7:00 PM EAT",
    members: 319,
    people: ["mei", "mateo", "zara", "daniel"],
    image: image("photo-1489599849927-2ee91cede3ba", 1000),
    label: "CINEMA CLUB",
    storyIds: ["s5", "s6"]
  },
  {
    id: "gaming",
    title: "Global Gaming Squad",
    category: "Gaming",
    description: "Find a teammate, share your setup and turn a random lobby into your crew.",
    time: "Open room · All day",
    members: 287,
    people: ["noah", "daniel", "leo"],
    image: image("photo-1542751371-adc38448a05e", 1000),
    label: "SQUAD UP",
    storyIds: ["s4"]
  },
  {
    id: "culture",
    title: "Culture Swap Café",
    category: "Culture",
    description: "Swap slang, traditions, food stories and the little things that make home feel like home.",
    time: "Saturday · 6:00 PM EAT",
    members: 193,
    people: ["leo", "imani", "amina", "zara"],
    image: image("photo-1529156069898-49953e39b3ac", 1000),
    label: "MEET THE WORLD",
    storyIds: ["s2", "s6"]
  },
  {
    id: "indie",
    title: "Indie Music Discovery",
    category: "Music",
    description: "Bring one song you love. Leave with five new favourites and a few new friends.",
    time: "Friday · 8:30 PM EAT",
    members: 156,
    people: ["noah", "zara", "mei", "imani"],
    image: image("photo-1516280440614-37939bbacd81", 1000),
    label: "FRESH FINDS",
    storyIds: ["s2", "s4"]
  }
];

// Sample stories shared by demo members.
let stories = [
  {
    id: "s1",
    personId: "amina",
    caption: "Match day fit is ready. Who's watching with me? ⚽",
    image: image("photo-1522778119026-d647f0596c20", 800),
    roomIds: ["football"],
    time: "12 min ago"
  },
  {
    id: "s2",
    personId: "zara",
    caption: "This song has been on repeat all day. Send me your current favourite.",
    image: image("photo-1516280440614-37939bbacd81", 800),
    roomIds: ["afrobeats", "culture", "indie"],
    time: "28 min ago"
  },
  {
    id: "s3",
    personId: "daniel",
    caption: "The pre-match nerves are real. Need predictions, not spoilers 😅",
    image: image("photo-1521412644187-c49fa049e84d", 800),
    roomIds: ["football"],
    time: "35 min ago"
  },
  {
    id: "s4",
    personId: "noah",
    caption: "Found a new co-op game. Looking for people who laugh when we lose.",
    image: image("photo-1542751371-adc38448a05e", 800),
    roomIds: ["gaming", "indie", "afrobeats"],
    time: "1 hr ago"
  },
  {
    id: "s5",
    personId: "mei",
    caption: "A perfect movie night needs snacks and people who love a plot twist.",
    image: image("photo-1489599849927-2ee91cede3ba", 800),
    roomIds: ["movie"],
    time: "2 hrs ago"
  },
  {
    id: "s6",
    personId: "leo",
    caption: "Tell me one thing about your city that visitors always miss.",
    image: image("photo-1529156069898-49953e39b3ac", 800),
    roomIds: ["culture", "movie"],
    time: "3 hrs ago"
  }
];

// Default information for the person using the demo.
const defaultProfile = {
  name: "Your profile",
  city: "Nairobi, Kenya",
  bio: "Here to find good people, shared interests and moments worth remembering.",
  interests: ["Music", "Football", "Movies"],
  currently: "Finding good people and better stories",
  avatar: image("photo-1534528741775-53994a69daeb", 180)
};

// Load saved data from this browser.
let myProfile = readStore("vibely-profile", defaultProfile);
let connections = readStore("vibely-connections", []);
let customStories = readStore("vibely-stories", []);
let customRooms = readStore("vibely-custom-rooms", []);
let joinedRoomIds = readStore("vibely-joined-rooms", []);

let activeRoomId = null;
let activeProfileId = null;
let currentCategory = "All";
let toastTimer = null;

// Shortcuts for finding HTML elements.
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// Read data from localStorage. Use the fallback if no saved data exists.
function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

// Save data in the browser.
function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    showToast("Browser storage is full. Some changes may not be saved.");
  }
}

// Escape special characters before inserting user text into HTML.
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

// Find a demo person using their ID.
function personById(id) {
  return people.find(person => person.id === id) || null;
}

// Combine demo stories with stories created by the user.
function allStories() {
  return [...customStories, ...stories];
}
// Combine the original demo rooms with rooms created by the user.
function allRooms() {
  return [...customRooms, ...events];
}

// Find a room by ID, whether it is a demo room or a custom room.
function getRoomById(id) {
  return allRooms().find(room => room.id === id) || null;
}

// Find the person who created a story.
function getStoryPerson(story) {
  return story.personId === "me"
    ? myProfile
    : personById(story.personId) || myProfile;
}

// Display a temporary notification at the bottom of the page.
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// Show the selected page and update the active navigation item.
function showPage(page) {
  const target = $(`#page-${page}`);

  if (!target) return;

  $$(".page-view").forEach(view => {
    view.classList.toggle("active", view === target);
  });

  $$(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.pageLink === page);
  });

  const labels = {
    home: "Your world",
    rooms: "Watch rooms",
    discover: "Discover people",
    stories: "Stories & moments",
    connections: "My circle"
  };

  $("#current-section").textContent = labels[page] || "Your world";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Build a row of small profile pictures for a watch room.
function avatarStack(ids) {
  return `<span class="mini-stack">${ids.slice(0, 3).map(id => {
    const person = personById(id);

    return person
      ? `<img src="${person.avatar}" alt="${escapeHTML(person.name)}">`
      : "";
  }).join("")}${ids.length > 3 ? `<span>+${ids.length - 3}</span>` : ""}</span>`;
}

// Build a room card for both demo rooms and user-created rooms.
function roomCard(room) {
  const isOwner = room.ownerId === "me";
  const isPrivate = room.access === "private";
  const isJoined = joinedRoomIds.includes(room.id);

  return `
    <article class="room-card">
      <div class="room-cover">
        <img
          src="${room.image || image("photo-1522778119026-d647f0596c20", 1000)}"
          alt="${escapeHTML(room.title)}"
          loading="lazy"
        >

        <span class="room-category-pill">
          ${categoryIcon(room.category)}
          ${escapeHTML(room.category)}
        </span>

        <span class="room-status-pill">
          <i></i>
          ${isPrivate ? "INVITE ONLY · DEMO" : "OPEN TO JOIN"}
        </span>
      </div>

      <div class="room-card-content">
        <h3>${escapeHTML(room.title)}</h3>
        <p>${escapeHTML(room.description)}</p>

        <span class="room-access-badge">
          ${isPrivate ? "🔒 Private room" : "🌍 Public room"}
          ${isOwner ? " · Your room" : ""}
        </span>

        <div class="room-card-footer">
          <div class="room-attendance">
            ${avatarStack(room.people || [])}
            <span>${(room.members || 1).toLocaleString()} vibing</span>
          </div>

          <button
            class="join-room-button"
            data-join-room="${escapeHTML(room.id)}"
          >
            ${isJoined ? "Enter room ↗" : "Join room ↗"}
          </button>
        </div>
      </div>
    </article>`;
}

// Choose an icon based on the room's category.
function categoryIcon(category) {
  return ({
    Football: "⚽",
    Music: "♫",
    Movies: "▣",
    Gaming: "⌘",
    Culture: "✳"
  })[category] || "✦";
}

// Display demo rooms and custom rooms using the selected category filter.
function renderRooms() {
  const filtered = allRooms().filter(room => {
    const matchesCategory =
      currentCategory === "All" ||
      room.category === currentCategory;

    // Closed rooms are not shown in discovery.
    return matchesCategory && !room.closed;
  });

  $("#home-room-grid").innerHTML =
    filtered.slice(0, 3).map(roomCard).join("");

  $("#all-room-grid").innerHTML =
    filtered.map(roomCard).join("");

  syncFilterButtons();
}

// Keep all category buttons in sync.
function syncFilterButtons() {
  $$("[data-category]").forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.category === currentCategory
    );
  });
}

// Build one story tile for the home page.
function storyTile(story) {
  const person = getStoryPerson(story);

  return `
    <button class="story-tile" data-open-story="${story.id}" style="background:#30213d">
      <img src="${story.image || person.avatar}" alt="" loading="lazy">
      <span class="story-ring"><img src="${person.avatar}" alt=""></span>
      <strong>${escapeHTML(person.name)}</strong>
      <span>${escapeHTML(story.caption)}</span>
    </button>`;
}

// Display recent stories on the home page.
function renderHomeStories() {
  const recent = allStories().slice(0, 5);

  $("#home-stories").innerHTML = `
    <button class="story-tile create-story-tile" id="create-story-shortcut">
      <span class="create-story-icon">＋</span>
      <strong>Your moment</strong>
      <span>Share a little life</span>
    </button>
  ` + recent.map(storyTile).join("");
}

// Display every story on the stories page.
function renderStoryPage() {
  $("#all-stories-grid").innerHTML = allStories().map(story => {
    const person = getStoryPerson(story);

    return `
      <article class="story-page-card"
        data-open-story="${story.id}"
        tabindex="0"
        role="button"
        aria-label="View story by ${escapeHTML(person.name)}">
        <img src="${story.image || person.avatar}" alt="" loading="lazy">
        <div class="story-page-author">
          <img src="${person.avatar}" alt="">
          <span>${escapeHTML(person.name)}</span>
        </div>
        <div class="story-page-caption">
          <strong>${escapeHTML(story.caption)}</strong>
          <span>${escapeHTML(person.city)} · ${escapeHTML(story.time || "Just now")}</span>
        </div>
      </article>`;
  }).join("");
}

// Build a person card, including the connection button.
function personCard(person) {
  const connected = connections.includes(person.id);

  return `
    <article class="person-card">
      <div class="person-card-top">
        <div class="person-avatar-wrap">
          <img class="person-avatar"
            src="${person.avatar}"
            alt="${escapeHTML(person.name)}"
            loading="lazy">
          <span class="person-online"></span>
        </div>
        <div class="person-title">
          <h3>${escapeHTML(person.name)}</h3>
          <p>⌖ ${escapeHTML(person.city)}</p>
        </div>
      </div>

      <p class="person-bio">${escapeHTML(person.bio)}</p>

      <div class="person-tags">
        ${person.interests.slice(0, 3).map(tag =>
          `<span class="person-tag">${escapeHTML(tag)}</span>`
        ).join("")}
      </div>

      <div class="person-card-actions">
        <button class="person-open" data-open-profile="${person.id}">
          View profile
        </button>
        <button class="person-connect ${connected ? "connected" : ""}"
          data-connect="${person.id}">
          ${connected ? "✓ In your circle" : "＋ Add to circle"}
        </button>
      </div>
    </article>`;
}

// Render people on the home, discover, and connections pages.
function renderPeople() {
  const query = (
    $("#people-search")?.value ||
    $("#global-search")?.value ||
    ""
  ).trim().toLowerCase();

  const filtered = people.filter(person =>
    `${person.name} ${person.city} ${person.bio} ${person.interests.join(" ")} ${person.currently}`
      .toLowerCase()
      .includes(query)
  );

  $("#home-people-grid").innerHTML =
    people.slice(0, 4).map(personCard).join("");

  $("#all-people-grid").innerHTML =
    filtered.map(personCard).join() ||
    `<div class="empty-state"><h3>No people found yet</h3><p>Try another interest or search term.</p></div>`;

  renderConnections();
}

// Display the people the user has added to their circle.
function renderConnections() {
  const connectedPeople = connections.map(personById).filter(Boolean);

  $("#connections-grid").innerHTML =
    connectedPeople.map(personCard).join("");

  $("#connections-empty").classList.toggle(
    "hidden",
    connectedPeople.length > 0
  );
}

// Update the user's profile photo and edit form.
function updateProfileDisplay() {
  $("#sidebar-name").textContent = myProfile.name;
  $("#sidebar-avatar").src = myProfile.avatar;
  $("#my-avatar").src = myProfile.avatar;

  $("#profile-name-input").value =
    myProfile.name === "Your profile" ? "" : myProfile.name;

  $("#profile-city-input").value = myProfile.city || "";
  $("#profile-bio-input").value = myProfile.bio || "";
  $("#profile-interests-input").value =
    (myProfile.interests || []).join(", ");
  $("#profile-currently-input").value = myProfile.currently || "";
}

// Open a profile modal for a demo member or the current user.
function openProfile(id) {
  activeProfileId = id;

  const person = id === "me" ? myProfile : personById(id);

  if (!person) return;

  $("#profile-modal-avatar").src = person.avatar;
  $("#profile-modal-name").textContent = person.name;
  $("#profile-modal-location").textContent =
    "⌖ " + (person.city || "Somewhere in the world");
  $("#profile-modal-bio").textContent =
    person.bio || "A new member of the Vibely community.";
  $("#profile-modal-currently").textContent =
    person.currently || "Exploring Vibely and meeting people.";
  $("#profile-modal-tag").textContent =
    id === "me" ? "YOUR PROFILE" : (person.tag || "VIBELY MEMBER");

  $("#profile-modal-interests").innerHTML =
    (person.interests || []).map(interest =>
      `<span class="interest-tag">${escapeHTML(interest)}</span>`
    ).join("");

  const connectButton = $("#profile-connect-button");

  connectButton.classList.toggle("hidden", id === "me");

  connectButton.textContent = connections.includes(id)
    ? "✓ In your circle"
    : "＋ Add to circle";

  $("#profile-message-button").textContent =
    id === "me" ? "Edit profile" : "Say hello";

  $("#profile-modal").classList.remove("hidden");
}

// Open a story in the full-screen story viewer.
function openStory(id) {
  const story = allStories().find(item => item.id === id);

  if (!story) return;

  const person = getStoryPerson(story);

  $("#story-modal-content").innerHTML = `
    <div class="story-modal-content">
      <img src="${story.image || person.avatar}" alt="">
      <div class="story-viewer-top">
        <img src="${person.avatar}" alt="">
        <div>
          <strong>${escapeHTML(person.name)}</strong>
          <span>${escapeHTML(person.city)} · ${escapeHTML(story.time || "Just now")}</span>
        </div>
      </div>
      <div class="story-viewer-bottom">
        <p>${escapeHTML(story.caption)}</p>
        <button id="story-reaction-button">♥ Send a little love</button>
      </div>
    </div>`;

  $("#story-modal").classList.remove("hidden");
}

// Open a demo room or a room created by the current user.
function openRoom(id) {
  const room = getRoomById(id);

  if (!room || room.closed) {
    showToast("This room is no longer available.");
    renderRooms();
    return;
  }

  activeRoomId = id;

  // Record that the current user joined this room.
  if (!joinedRoomIds.includes(id)) {
    joinedRoomIds.push(id);
    writeStore("vibely-joined-rooms", joinedRoomIds);
  }

  $("#modal-room-title").textContent = room.title;
  $("#modal-room-description").textContent = room.description;
  $("#modal-room-category").textContent =
    `${categoryIcon(room.category)} ${room.category}`;

  $("#modal-room-time").textContent =
    room.time || "◷ Open room · Created by you";

  $("#modal-room-count").textContent =
    `◎ ${(room.members || 1).toLocaleString()} members`;

  $("#modal-room-hero").style.backgroundImage =
    `url("${room.image || image("photo-1522778119026-d647f0596c20", 1000)}")`;

  const members = (room.people || [])
    .map(personById)
    .filter(Boolean);

  $("#modal-people-count").textContent = `(${members.length})`;

  $("#modal-room-members").innerHTML = members.length
    ? members.map(person => `
        <button class="room-member" data-open-profile="${person.id}">
          <img src="${person.avatar}" alt="">
          <span>
            <strong>${escapeHTML(person.name)}</strong>
            <small>${escapeHTML(person.city)}</small>
          </span>
        </button>
      `).join("")
    : `<p class="room-explainer">
         You're the first member of this room. Invite your people!
       </p>`;

  const roomStories = allStories().filter(story =>
    story.roomIds?.includes(id)
  );

  $("#modal-room-stories").innerHTML = roomStories.length
    ? roomStories.slice(0, 4).map(story => {
        const person = getStoryPerson(story);

        return `
          <button class="modal-story-item" data-open-story="${story.id}">
            <img src="${story.image || person.avatar}" alt="">
            <span>
              <strong>${escapeHTML(person.name)}</strong>
              <small>${escapeHTML(story.caption)}</small>
            </span>
          </button>`;
      }).join("")
    : `<p class="room-explainer">
         No moments shared in this room yet.
       </p>`;

  $("#modal-chat-messages").innerHTML = `
    <div class="chat-message">
      <span class="chat-avatar">V</span>
      <div>
        <strong>Vibely guide <small>just now</small></strong>
        <p>
          Welcome to ${escapeHTML(room.title)}!
          Say hi and tell everyone where you're tuning in from 👋
        </p>
      </div>
    </div>`;

  // Show the close-room control only when the current user owns the room.
  let ownerControls = $("#room-owner-controls");

  if (!ownerControls) {
    ownerControls = document.createElement("div");
    ownerControls.id = "room-owner-controls";
    ownerControls.className = "room-owner-controls";

    $("#modal-room-title").parentElement.appendChild(ownerControls);
  }

  ownerControls.innerHTML = room.ownerId === "me"
    ? `<button
         type="button"
         class="room-close-button"
         id="close-created-room"
         data-room-id="${escapeHTML(room.id)}"
       >Close my room</button>`
    : "";

  $("#invite-status").textContent = "";
  $("#room-modal").classList.remove("hidden");
}

// Add or remove a person from the user's circle.
function toggleConnection(id) {
  if (connections.includes(id)) {
    connections = connections.filter(personId => personId !== id);
    showToast("Removed from your circle.");
  } else {
    connections.push(id);
    showToast("Added to your circle. Good things start with a hello.");
  }

  writeStore("vibely-connections", connections);
  renderPeople();

  if (activeProfileId) {
    $("#profile-connect-button").textContent =
      connections.includes(activeProfileId)
        ? "✓ In your circle"
        : "＋ Add to circle";
  }
}

// Open the create-story form.
function openCreateStory() {
  $("#create-story-modal").classList.remove("hidden");
}

// Close all open modals.
function closeModals() {
  $$(".modal-backdrop").forEach(modal => {
    modal.classList.add("hidden");
  });
}

// Update the selected category and redraw rooms.
function filterByCategory(category) {
  currentCategory = category;
  renderRooms();
}

// Send a search query to the Discover People page.
function handleGlobalSearch() {
  const query = $("#global-search").value.trim();

  if (query) {
    showPage("discover");
    $("#people-search").value = query;
    renderPeople();
  }
}

// Render all sections and refresh the user's profile display.
function renderAll() {
  renderRooms();
  renderHomeStories();
  renderStoryPage();
  renderPeople();
  updateProfileDisplay();
}

/* ==========================================
   CLICK EVENTS
========================================== */

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page-link]");

  if (pageButton) {
    event.preventDefault();
    showPage(pageButton.dataset.pageLink);
    return;
  }

  const roomButton = event.target.closest("[data-join-room]");

  if (roomButton) {
    openRoom(roomButton.dataset.joinRoom);
    return;
  }

  const profileButton = event.target.closest("[data-open-profile]");

  if (profileButton) {
    openProfile(profileButton.dataset.openProfile);
    return;
  }

  const storyButton = event.target.closest("[data-open-story]");

  if (storyButton) {
    openStory(storyButton.dataset.openStory);
    return;
  }

  const connectButton = event.target.closest("[data-connect]");

  if (connectButton) {
    toggleConnection(connectButton.dataset.connect);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");

  if (categoryButton) {
    filterByCategory(categoryButton.dataset.category);
    return;
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModals();
    return;
  }

  if (event.target.closest("#create-story-shortcut, #create-story-page")) {
    openCreateStory();
    return;
  }

  if (event.target.closest("#edit-profile-shortcut")) {
    $("#edit-modal").classList.remove("hidden");
    return;
  }

  if (event.target.closest("#open-my-profile")) {
    openProfile("me");
    return;
  }

  if (event.target.closest("#story-reaction-button")) {
    showToast("A little love sent ♥");
    closeModals();
    return;
  }

  if (event.target.closest("#profile-connect-button") && activeProfileId) {
    toggleConnection(activeProfileId);
    return;
  }

  if (event.target.closest("#profile-message-button")) {
    if (activeProfileId === "me") {
      closeModals();
      $("#edit-modal").classList.remove("hidden");
    } else {
      closeModals();
      showToast("Say hello in a room you share. Real DMs aren't connected in this demo.");
    }

    return;
  }

  if (event.target.closest("#copy-room-invite")) {
    const eventRoom = events.find(item => item.id === activeRoomId);

    const invite =
      `${eventRoom?.title || "Vibely room"} — come share the moment on Vibely! ${window.location.href}`;

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(invite)
        .then(() => {
          $("#invite-status").textContent = "Invite copied!";
        })
        .catch(() => showToast(invite));
    } else {
      showToast(invite);
    }

    return;
  }

  if (event.target.classList.contains("modal-backdrop")) {
    closeModals();
  }
});

// Close modals with Escape. Allow Enter to open a focused story card.
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModals();
  }

  if (
    event.key === "Enter" &&
    event.target.matches(".story-page-card")
  ) {
    openStory(event.target.dataset.openStory);
  }
});

/* ==========================================
   FILTERS AND SEARCH
========================================== */

$("#home-filters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (button) {
    filterByCategory(button.dataset.category);
  }
});

$("#rooms-filters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (button) {
    filterByCategory(button.dataset.category);
  }
});

$("#people-search").addEventListener("input", renderPeople);

$("#global-search").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    handleGlobalSearch();
  }
});

$("#global-search").addEventListener("input", () => {
  if ($("#global-search").value.trim() === "") {
    $("#people-search").value = "";
    renderPeople();
  }
});

$("#notifications-button").addEventListener("click", () => {
  showToast("You're all caught up. More notifications will arrive when Vibely has a backend.");
});

/* ==========================================
   SAVE PROFILE CHANGES
========================================== */

$("#profile-form").addEventListener("submit", event => {
  event.preventDefault();

  myProfile = {
    ...myProfile,
    name: $("#profile-name-input").value.trim() || "Your profile",
    city: $("#profile-city-input").value.trim() || "Somewhere in the world",
    bio: $("#profile-bio-input").value.trim(),
    interests: $("#profile-interests-input").value
      .split(",")
      .map(item => item.trim())
      .filter(Boolean)
      .slice(0, 8),
    currently: $("#profile-currently-input").value.trim()
  };

  writeStore("vibely-profile", myProfile);
  updateProfileDisplay();
  closeModals();
  showToast("Your profile is saved in this browser.");
});

/* ==========================================
   CREATE A STORY
========================================== */

$("#story-form").addEventListener("submit", event => {
  event.preventDefault();

  const caption = $("#story-caption-input").value.trim();

  if (!caption) return;

  const file = $("#story-image-input").files[0];

  // Save the new story after the optional image has been read.
  const finishStory = imageUrl => {
    const newStory = {
      id: `custom-${Date.now()}`,
      personId: "me",
      caption,
      image: imageUrl || myProfile.avatar,
      roomIds: activeRoomId ? [activeRoomId] : [],
      time: "Just now",
      privacy: $("#story-privacy-input").value
    };

    customStories.unshift(newStory);
    writeStore("vibely-stories", customStories);

    renderHomeStories();
    renderStoryPage();

    $("#story-form").reset();
    closeModals();
    showToast("Your moment is posted in this demo.");
  };

  if (file) {
    if (!file.type.startsWith("image/")) {
      showToast("Please choose an image file.");
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      showToast("Choose an image under 3 MB for this demo.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => finishStory(reader.result);
    reader.onerror = () => showToast("Could not read that image. Try another one.");

    reader.readAsDataURL(file);
  } else {
    finishStory(null);
  }
});

/* ==========================================
   LOCAL DEMO ROOM CHAT
========================================== */

$("#room-chat-form").addEventListener("submit", event => {
  event.preventDefault();

  const input = $("#room-chat-input");
  const message = input.value.trim();

  if (!message) return;

  const row = document.createElement("div");
  row.className = "chat-message";

  const avatar = document.createElement("span");
  avatar.className = "chat-avatar";
  avatar.textContent = (myProfile.name || "Y").charAt(0).toUpperCase();

  const content = document.createElement("div");

  const name = document.createElement("strong");
  name.textContent = myProfile.name || "You";

  const time = document.createElement("small");
  time.textContent = " just now";
  name.appendChild(time);

  const paragraph = document.createElement("p");
  paragraph.textContent = message;

  content.append(name, paragraph);
  row.append(avatar, content);

  $("#modal-chat-messages").append(row);
  $("#modal-chat-messages").scrollTop =
    $("#modal-chat-messages").scrollHeight;

  input.value = "";
});

/* ==========================================
   CREATE, SAVE AND CLOSE ROOMS
========================================== */

// Open the create-room form.
$("#create-room-button").addEventListener("click", () => {
  $("#create-room-form").reset();
  $("#create-room-modal").classList.remove("hidden");
});

// Save a new room when the form is submitted.
$("#create-room-form").addEventListener("submit", event => {
  event.preventDefault();

  const title = $("#new-room-name").value.trim();
  const category = $("#new-room-category").value;
  const description = $("#new-room-description").value.trim();
  const access = $("#new-room-access").value;

  if (!title || !description) {
    showToast("Please enter a room name and description.");
    return;
  }

  const newRoom = {
    id: `custom-${Date.now()}`,
    title,
    category,
    description,
    access,
    ownerId: "me",
    members: 1,
    people: [],
    image: image("photo-1522778119026-d647f0596c20", 1000),
    label: "YOUR ROOM",
    time: "Open room · Created just now",
    storyIds: [],
    closed: false
  };

  // Put the newest room first and save it in this browser.
  customRooms.unshift(newRoom);
  writeStore("vibely-custom-rooms", customRooms);

  // Show the room on the dashboard and the full rooms page.
  currentCategory = "All";
  renderRooms();

  closeModals();
  showPage("rooms");

  showToast(
    access === "private"
      ? "Private demo room created and saved!"
      : "Your new room is ready!"
  );

  // Open the new room immediately.
  openRoom(newRoom.id);
});

// Close a room created by the current user.
// Closing hides the room from discovery but preserves its saved data.
document.addEventListener("click", event => {
  const closeButton = event.target.closest("#close-created-room");

  if (!closeButton) return;

  const roomId = closeButton.dataset.roomId;
  const room = customRooms.find(item => item.id === roomId);

  if (!room || room.ownerId !== "me") {
    showToast("You can only close rooms you created.");
    return;
  }

  const confirmed = window.confirm(
    `Close "${room.title}"? It will disappear from room discovery.`
  );

  if (!confirmed) return;

  room.closed = true;

  writeStore("vibely-custom-rooms", customRooms);

  closeModals();
  renderRooms();

  showToast("Your room has been closed.");
});


// Draw the interface when the page is ready.
document.addEventListener("DOMContentLoaded", renderAll);

// Also render immediately if the script loads after the HTML.
renderAll();


