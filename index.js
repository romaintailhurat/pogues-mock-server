'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

const greetings = 'Pogues mock server, see doc at https://github.com/InseeFr/Pogues/blob/master/doc/pogues-swagger.yaml';

server.connection({ port: 3000 });

let run = () => console.log('Server running at:', server.info.uri);

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply(greetings)
});

server.route({
  method: 'GET',
  path: '/pogues/questionnaires',
  handler: (request, reply) => reply.file('./pogues-questionnaires-list.json')
});

server.route({
  method: 'GET',
  path: '/pogues/questionnaire/{id}',
  handler: (request, reply) => reply.file('./pogues-sample-questionnaire.json')
});

server.start(run);
