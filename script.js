<<<<<<< HEAD
// Selectors
const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatHeader = document.getElementById("chatHeader");
const emojiBtn = document.getElementById("emojiBtn");
const emojiPicker = document.getElementById("emojiPicker");

// Event Listeners
sendBtn.addEventListener("click", sendMessage);
emojiBtn.addEventListener("click", toggleEmojiPicker);

// Message-Response Mappings
const messageResponses = {
  hello: "Hi there! How's your day going?",
  hi: "Hey! What's up?",
  hey: "Hello! How can I help?",
  "how are you": "I'm doing great, thanks for asking! What about you?",
  "what's up": "Not much, just here to chat with you!",
  bye: "Goodbye! Take care!",
  thanks: "You're welcome! 😊",
  "what are you doing": "Just hanging out, waiting to chat with you!",
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts! 😂",
};

// Default responses for unmatched messages
const defaultResponses = [
  "Interesting! Tell me more.",
  "I didn't quite catch that. Could you rephrase?",
  "Sounds great!",
  "Let's talk more about that!",
  "Can you explain further?",
];

// Add Message to Chat
function addMessage(content, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = content;
  chatArea.appendChild(message);
  chatArea.scrollTop = chatArea.scrollHeight; // Scroll to bottom
}

// Send Message
function sendMessage() {
  const text = userInput.value.trim().toLowerCase();
  if (text !== "") {
    addMessage(userInput.value, "user"); // Add user's message
    userInput.value = ""; // Clear input

    // Respond to the message
    setTimeout(() => {
      const response =
        messageResponses[text] ||
        defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      addMessage(response, "ai");
    }, 1000);
  }
}

// Start Chat with a Friend
function startChat(contactName) {
  chatHeader.textContent = contactName;
  chatArea.innerHTML = ""; // Clear chat area for new contact
}

// Toggle Emoji Picker
function toggleEmojiPicker() {
  emojiPicker.classList.toggle("hidden");
}

// Emoji Picker Interaction
emojiPicker.addEventListener("click", (event) => {
  const emoji = event.target.textContent;
  if (emoji) {
    userInput.value += emoji;
    emojiPicker.classList.add("hidden"); // Close picker after selecting an emoji
  }
});

// Load Emojis into Picker
function loadEmojis() {
  const emojiList = [
    "😀", "😂", "😍", "😎", "🤔", "😢", "❤️", "👍", "🎉", "🔥",
    "🐱", "🌟", "🍕", "⚽", "🚗", "🎵", "🏆", "💡", "✅", "🎂",
  ];
  emojiList.forEach((emoji) => {
    const button = document.createElement("button");
    button.textContent = emoji;
    button.style.fontSize = "20px";
    button.style.margin = "5px";
    button.style.border = "none";
    button.style.background = "transparent";
    emojiPicker.appendChild(button);
  });
}

loadEmojis();
=======
// Selectors
const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatHeader = document.getElementById("chatHeader");
const emojiBtn = document.getElementById("emojiBtn");
const emojiPicker = document.getElementById("emojiPicker");

// Event Listeners
sendBtn.addEventListener("click", sendMessage);
emojiBtn.addEventListener("click", toggleEmojiPicker);

// Message-Response Mappings
const messageResponses = {
  hello: "Hi there! How's your day going?",
  hi: "Hey! What's up?",
  hey: "Hello! How can I help?",
  "how are you": "I'm doing great, thanks for asking! What about you?",
  "what's up": "Not much, just here to chat with you!",
  bye: "Goodbye! Take care!",
  thanks: "You're welcome! 😊",
  "what are you doing": "Just hanging out, waiting to chat with you!",
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts! 😂",
};

// Default responses for unmatched messages
const defaultResponses = [
  "Interesting! Tell me more.",
  "I didn't quite catch that. Could you rephrase?",
  "Sounds great!",
  "Let's talk more about that!",
  "Can you explain further?",
];

// Add Message to Chat
function addMessage(content, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = content;
  chatArea.appendChild(message);
  chatArea.scrollTop = chatArea.scrollHeight; // Scroll to bottom
}

// Send Message
function sendMessage() {
  const text = userInput.value.trim().toLowerCase();
  if (text !== "") {
    addMessage(userInput.value, "user"); // Add user's message
    userInput.value = ""; // Clear input

    // Respond to the message
    setTimeout(() => {
      const response =
        messageResponses[text] ||
        defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      addMessage(response, "ai");
    }, 1000);
  }
}

// Start Chat with a Friend
function startChat(contactName) {
  chatHeader.textContent = contactName;
  chatArea.innerHTML = ""; // Clear chat area for new contact
}

// Toggle Emoji Picker
function toggleEmojiPicker() {
  emojiPicker.classList.toggle("hidden");
}

// Emoji Picker Interaction
emojiPicker.addEventListener("click", (event) => {
  const emoji = event.target.textContent;
  if (emoji) {
    userInput.value += emoji;
    emojiPicker.classList.add("hidden"); // Close picker after selecting an emoji
  }
});

// Load Emojis into Picker
function loadEmojis() {
  const emojiList = [
    "😀", "😂", "😍", "😎", "🤔", "😢", "❤️", "👍", "🎉", "🔥",
    "🐱", "🌟", "🍕", "⚽", "🚗", "🎵", "🏆", "💡", "✅", "🎂",
  ];
  emojiList.forEach((emoji) => {
    const button = document.createElement("button");
    button.textContent = emoji;
    button.style.fontSize = "20px";
    button.style.margin = "5px";
    button.style.border = "none";
    button.style.background = "transparent";
    emojiPicker.appendChild(button);
  });
}

loadEmojis();
>>>>>>> 542d42221955a65d046a045d481c2eb1fa6fb372
