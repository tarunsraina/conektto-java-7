//import { StreamChat } from 'stream-chat';

const StreamChat = require('stream-chat').StreamChat;

const serverClient = StreamChat.getInstance('vaedwhwqe5ur','ntmns639qjvr4gr4y6p38c6vv7wrrxnrjs3ud78ukftqdh3ej2bz7ejyzvsrg7c6');

const token = serverClient.createToken('john');

console.log("token="+token);

