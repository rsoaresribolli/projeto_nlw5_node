import { Socket } from "socket.io";
import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService"
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessagesService";


interface IParams {
    text: string;
    email: string;
}

io.on("connect", (socket) => {
    const connectionsService = new ConnectionsService();
    const usersService = new UsersService();
    const messagesService = new MessagesService();

    socket.on("client_first_access", async (params) => {
        const socket_id = socket.id;
        const { text, email } = params as IParams;

        var user = await usersService.findByEmail(email);

        if (!user) {
            user = await usersService.create(email);
        }

        var user_id = user.id;
        const connection = await connectionsService.findByUserId(user_id);

        if (!connection) {
            await connectionsService.create({
                socket_id,
                user_id
            });
        } else {
            connection.socket_id = socket.id;
            await connectionsService.create(connection);
        }

        await messagesService.create({
            text,
            user_id
        })
    })
})