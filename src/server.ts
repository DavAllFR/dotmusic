import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";

const server = fastify();

server.register(fastifyStatic, {
    root: path.join(__dirname, "views"),
});
server.register(fastifyStatic, {    
    root: path.join(__dirname, "assets"),
    prefix: "/assets/",
    decorateReply: false,
});

server.get("/", async (request, reply) => {
    return reply.sendFile("index.html");
});

server.listen({port:3000,host:"127.0.0.1"}, (err, address) => {
    if (err) throw err;
    console.log(`Server listening at ${address}`);
});