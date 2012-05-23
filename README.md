Impact MP
===

A multiplayer plugin and example [Socket.IO](http://socket.io/ "Socket.IO: the cross-browser WebSocket for realtime apps.") server for the [Impact](http://impactjs.com/ "Impact - HTML5 Canvas &amp; JavaScript Game Engine") library.

This plugin uses the "dumb" server approach and does not run Impact itself on the server. It simply provides a means to pass data back and forth between clients using [Socket.IO's](http://socket.io/ "Socket.IO: the cross-browser WebSocket for realtime apps.") "rooms" feature.

Requirements
---

[Impact](http://impactjs.com/ "Impact - HTML5 Canvas &amp; JavaScript Game Engine")

[node.js](http://nodejs.org/ "node.js")

[Socket.IO](http://socket.io/ "Socket.IO: the cross-browser WebSocket for realtime apps.")

[node-uuid](https://github.com/broofa/node-uuid "Simple, fast generation of RFC4122 UUIDS.")

[Underscore.js](http://underscorejs.org/ "Underscore.js")

A web browser supported by [Socket.IO](http://socket.io/ "Socket.IO: the cross-browser WebSocket for realtime apps.").

Deployment
---

**To run the game server, do the following:**

Load the required packages listed in package.json.

`npm install -d` - this will install the dependencies located in the packages.json file.

Start up the site server at port 8181.

`node server/server.js` - will start the game server at [http://localhost: 8181](http://localhost: 8181)

Start up your Impact game as you normally would, but in two browser windows. Since this demo does not include a means to generate the unique game URLs, you'll need to restart the server to start a new game.

**To stop the node server press CTRL+C or ⌘ + C**

Notes
---
- This demo only allows two players at a time, which is set by the maxPlayers variable on the server.

- Watch your console for errors and messages.

- The plugin expects the existence of an EntityPlayer and EntityEnemy class. Examples are provided, but the example classes do not contain any code that is required for the multiplayer functionality. Only the existence classes with those specific names is needed. See the repo for examples.

- The player entities are created dynamically and **SHOULD NOT** be added via Weltmeister.

- Enemies and other objects can be added via Weltmeister. The demo uses the spawning functionality to add an enemy.

- The plugin does not include the ability to make unique URLs for each game. We suggest a server-side technology like [node.js](http://nodejs.org/ "node.js") to handle that.



