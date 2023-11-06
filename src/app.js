'use strict';
const cors = require('cors');
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-ui-express');
const express = require('express');
const { buildHandlers } = require('./modules');
const { handlers } = buildHandlers();
const { listUsersHandler } = require('./modules/handlers/User/listUsers');
const { createUserHandler } = require('./modules/handlers/User/createUser');
const { updateUserHandler } = require('./modules/handlers/User/updateUser');
const { deleteUserHandler } = require('./modules/handlers/User/deleteUser');
const { listPostHandler } = require('./modules/handlers/Posts/listPost');
const { createPostHandler } = require('./modules/handlers/Posts/createPost');
const { updatePostHandler } = require('./modules/handlers/Posts/updatePost');
const { deletePostHandler } = require('./modules/handlers/Posts/deletePost');


const port = Number(process.env.PORT || 8089)

const app = express();

const whitelist = [
  "*"
]

app.use(express.json());
app.use(cors({
  origin: whitelist.forEach((url) => url)
}))

const swaggerConfig = {
  appRoot: __dirname,
  swaggerFile: `${__dirname}/config/swagger.yaml`,
};

const onSwaggerCreated = (error, swaggerExpress) => {
  if (error) throw error;

  const swaggerDocument = swaggerExpress.runner.swagger;
  app.use('/api/v1/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
  swaggerExpress.register(app); // register middlewares
  app.listen(port, () => console.info('onAppStart', { port }));
};

app.get('/api/v2/users', listUsersHandler);
app.post('/api/v2/users', createUserHandler);
app.put('/api/v2/users', updateUserHandler);
app.delete('/api/v2/users', deleteUserHandler);

app.get('/api/v2/posts', listPostHandler);
app.post('/api/v2/posts', createPostHandler);
app.put('/api/v2/posts', updatePostHandler);
app.delete('/api/v2/posts', deletePostHandler);

SwaggerExpress.create(swaggerConfig, onSwaggerCreated);

module.exports = {
  app,
  ...handlers
};
