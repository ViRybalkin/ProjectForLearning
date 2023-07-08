<!-- TABLE OF CONTENTS -->
<details>
  <summary>Разделы документации</summary>
  <ol>
    <li>
      <a href="#начало">Начало</a>
      <ul>
        <li><a href="#установка">Установка проекта</a></li>
        <li><a href="#cкрипты-package.json">Скрипты</a></li>
        <li><a href="#чтобы-запустить-скрипт">Как запустить скрипт</a></li>
      </ul>
    </li>
    <li><a href="#используемые-технологии">Используемые технологии</a></li>
    <li><a href="#работа-с-feature-flag">Работа с feature-flag</a></li>

  </ol>
</details>

## Начало

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас
> установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/)

### Установка

```sh
$ git clone https://github.com/ViRybalkin/ProjectForLearning.git
$ npm install
```

### Скрипты package.json

| Скрипт                | Назначение                                                            |
|-----------------------|-----------------------------------------------------------------------|
| start                 | Запустит webpack-dev-server и базу данных                             |
| start:vite            | Запустит vite сервер и базу данных                                    |
| start-dev-server      | Запустит webpack-dev-server                                           |
| start-dev-server:vite | Запустит vite                                                         |
| start:json-server     | Запустить базу данных                                                 |
| build:dev             | Собрать проект для **development**                                    |
| build:prod            | Собрать проект для **production** (проект готов к загрузке на сервер) |
| eslint                | Запустить проверку eslint                                             |
| eslint:fix            | Запустить исправления ошибок eslint                                   ||                       |                                                                                              |
| stylelint             | Запустить проверку stylelint                                          |
| stylelint:fix         | Запустить исправления ошибок stylelint                                |
| test                  | Запустить все тесты проекта                                           |
| webpackAnalyze        | Запустить страницу с размерами бандлов                                |
| storybook             | Запустит сторибук для разработки компонентов                          |
| build-storybook       | Собрать сторибук (готов к загрузке на сервер)                         |
| loki                  | Запустить скриншот тестирование                                       |
| loki:ok               | Подтвердить ошибки скриншот тестирования                              |
| loki:ci               | Запустить скриншот тестирование на ci                                 |
| visual:report         | Запустить visual скриншот тестирование в формате json и html          |
| visual:report:json    | Запустить visual скриншот тестирование в формате json                 |
| visual:report:html    | Запустить visual скриншот тестирование в формате html                 |
| generator:layer       | Запустить генератор слоя(pages, features, entities)                   |
| generator:component   | Запустить генератор компонентов shared                                |

#### Чтобы запустить скрипт

```sh
$ npm run имя_скрипта
```

### Используемые технологии

* [Работа с переводами](docs/i18next.md)
* [Тестирование](docs/testing.md)
* [Сторибук](docs/storybook.md)

### Работа с feature-flag

Разрешено использовать feature flags только с помощью хелпера toggleFeature

в него передается обьект(name: название флага, on: функция которая срабатывает после Включении фичи, off: функция
которая срабатывает после ВЫключения фичи)
Для автоматического удаления фичи использовать скрипт removeFeature.ts