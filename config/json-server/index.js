const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

// создание сервера
const server = jsonServer.create();

// ендпоинты из файла db
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// задержка имитации реального сервера
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

// создание эндпоинта
server.post('/login', (req, res) => {
  try {

    // получение данных и тела
    const {
      username,
      password
    } = req.body;

    // данные db
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromDb = users.find((user) => user.username === username && user.password === password);

    if (userFromDb) {
      return res.json(userFromDb);
    }

    return res.status(403)
      .json({ message: 'USER_NOT_FOUND, you should register befor login' });
  } catch (error) {
    console.log(error);
    return res.status(500)
      .json({ message: error });
  }
});

// проверка авторизации пользователя
// eslint-disable-next-line consistent-return
server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403)
      .json({ message: 'AUTHENTICATION_ERROR, maybe you forgot send auth token?' });
  }
  next();
});

// использование ендпоинтов
server.use(router);

// запуск сервера на порту
server.listen('8000', () => console.log('server is running on 8000 port'));
