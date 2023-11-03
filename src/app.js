'use strict';
const cors = require('cors');
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-ui-express');
const express = require('express');
const { buildHandlers } = require('./modules');
const { handlers } = buildHandlers();
const { listUsersHandler } = require('./modules/handlers/User/listUsers');

const port = Number(process.env.PORT || 8089)

const app = express();

const whitelist = [
  'http://localhost:8081',
  'http://localhost:8089'

]

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

SwaggerExpress.create(swaggerConfig, onSwaggerCreated);

module.exports = {
  app,
  ...handlers
};
