Impact MP
===

A multiplayer plugin and example Socket.io server for the Impact library.

This plugin uses the "dumb" server approach and does not run Impact itself on the server. It simply provides a means to pass data back and forth between clients using Socket.io's "rooms" feature.

Requirements
---

[Impact](http://impactjs.com/ "Impact - HTML5 Canvas &amp; JavaScript Game Engine")

[node.js](http://nodejs.org/ "node.js")

[Socket.io](http://socket.io/ "Socket.IO: the cross-browser WebSocket for realtime apps.")

[node-uuid](https://github.com/broofa/node-uuid "Simple, fast generation of RFC4122 UUIDS.")

Deployment
---

**To run the game server, do the following:**

Load the required packages listed in package.json.

`npm install -d` - this will install the dependencies located in the packages.json file.

Start up the site server at port 8181.

`node server/server.js` - will start the game server at [http://localhost: 8181](http://localhost: 8181)

Start up your Impact game as you normally would, but in two browser windows.

**To stop the node server press CTRL+C or ⌘ + C**

Notes
---

- The plugin expects the existence of an EntityPlayer class. See the repo for an example.

- The player entities are created dynamically and SHOULD NOT be added via Weltmeister.

- Enemies and other objects can be added via Weltmeister.

- The plugin does not include the ability to make unique URLs for each game. We suggest a server-side technology like [node.js](http://nodejs.org/ "node.js") to handle that.



