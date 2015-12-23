'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

const PATHS = {
  home: '/',
  pogues: {
    questionnaires: '/pogues/questionnaires',
    questionnaire: '/pogues/questionnaire/{id}'
  },
  stromae: '/stromae/publisher'
};

server.connection({ port: 3000 });

let run = () => console.log('Server running at:', server.info.uri);

/* Routes */
server.route({
    method: 'GET',
    path: PATHS.home,
    handler: (request, reply) => reply.file('home.html')
});

server.route({
  method: 'GET',
  path: PATHS.pogues.questionnaires,
  handler: (request, reply) => reply.file('./pogues-questionnaires-list.json')
});

server.route({
  method: 'GET',
  path: PATHS.pogues.questionnaire,
  handler: (request, reply) => reply.file('./pogues-sample-questionnaire.json')
});

server.route({
  method: 'POST',
  path: PATHS.stromae,
  handler: (request, reply) => reply('yo') // TODO implement
});

server.start(run);
