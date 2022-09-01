"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma = void 0;
const express_1 = __importDefault(require("express"));
const userControllers = __importStar(require("./../../db/controllers/user.controllers"));
const router = express_1.default.Router();
// USERS END POINTS
// Get user information
router.get('/v1/user/:userName', (req, resp) => {
    if (req.params.userName) {
        userControllers.getUserData(req.params.userName)
            .then((r) => {
            resp.status(200);
            resp.json(r.result);
        })
            .catch((r) => {
            resp.sendStatus(r.code);
        });
    }
    else {
        resp.sendStatus(400);
    }
});
// Create user
router.post('/v1/user', (req, resp) => {
    if (req.body.name && req.body.mail) {
        userControllers.createUser({
            name: req.body.name,
            mail: req.body.mail
        })
            .then((r) => {
            resp.sendStatus(r.code);
        })
            .catch((r) => {
            resp.sendStatus(r.code);
        });
    }
    else {
        resp.sendStatus(400);
    }
});
// Delete user
router.delete('/v1/user/:userName', (req, resp) => {
});
// Update existing user
router.put('/v1/user/:userName', (req, resp) => {
});
// MSGS END POINTS
// Get all messages from a user
router.get('/v1/msg/:userName', (req, resp) => {
});
// Delete existing message
router.delete('/v1/msg/messageId', (req, resp) => {
});
// TODO: Insert endpoint to save a reaction to an existing message
/*

router.put('/v1/msg/reaction/:messageId', (req: Request, resp: Response)=>{

})

*/
// ROOMS END POINTS
//Get all messages from a chatRoom
router.get('/v1/chatRoom/:chatRoomId', (req, resp) => {
});
// Create new chatRoom
router.post('/v1/chatRoom', (req, resp) => {
});
// Delete an existing chatroom
router.delete('/v1/chatRoom/:chatRoomId', (req, resp) => {
});
function suma(a, b) {
    return a + b;
}
exports.suma = suma;
exports.default = router;
