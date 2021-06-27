const commands = {
  "about": "Shows information about the bot.",
  "ping": "Returns the bots ping.",
  "play": "Start a game.",
  "user": "Get information about a user.",
  "toggleprivate": "Toggle wheter other users can see your stats."
}

const template = document.querySelector('.tableTemplate');
const commandsTable = document.querySelector('.commandsTable')

for (command in commands) {
  const content = template.content.cloneNode(true);
  content.querySelector('.name').innerText = command;
  content.querySelector('.description').innerText = commands[command];

  commandsTable.appendChild(content);
}