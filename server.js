const express = require("express");
const { get } = require("http");
const { default: socket } = require("./src/socket");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.json());

const chats = new Map([]);

app.get("/chats/:id", (req, res) => {
  const { id: ChatID } = req.params;
  const obj = chats.has(ChatID)
    ? {
        users: [...chats.get(ChatID).get("users").values()],
        messages: [...chats.get(ChatID).get("messages").values()],
      }
    : { users: [], messages: [] };
  res.json(obj);
});

app.post("/chats", (req, res) => {
  const { ChatID, UserName } = req.body;
  if (!chats.has(ChatID)) {
    chats.set(
      ChatID,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  socket.on("CHAT:JOIN", ({ ChatID, UserName }) => {
    socket.join(ChatID);
    chats.get(ChatID).get("users").set(socket.id, UserName);
    const users = [...chats.get(ChatID).get("users").values()];
    socket.to(ChatID);
    socket.broadcast.emit("CHAT:SET_USERS", users);
  });

  socket.on("CHAT:NEW_MESSAGE", ({ ChatID, UserName, text }) => {
    const obj = {
      UserName,
      text,
    };
    chats.get(ChatID).get("messages").push(obj);
    socket.to(ChatID);
    socket.broadcast.emit("CHAT:NEW_MESSAGE", obj);
  });

  socket.on("disconnect", () => {
    chats.forEach((value, ChatID) => {
      if (value.get("users").delete(socket.id)) {
        const users = [...value.get("users").values()];
        socket.to(ChatID);
        socket.broadcast.emit("CHAT:SET_USERS", users);
      }
    });
  });

  console.log("user connected", socket.id);
});

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Сервер запущен!");
});
