# WeatherApp

Лёгкое приложение на React + TypeScript для просмотра текущей погоды по городу.

Коротко: приложение использует публичный Weather API для получения текущих данных о погоде и отображает их в удобном интерфейсе.

## Технологии

- React (Create React App / `react-scripts`)
- TypeScript
- Sass
- styled-components
- fetch (в `src/services/weatherService.ts`)

## Основные возможности

- Поиск погоды по названию города
- Отображение текущей температуры, состояния погоды и подробных данных
- Адаптивный минималистичный UI

## Быстрый старт

Требования:

- Node.js (рекомендуется LTS) и npm

Клонируйте репозиторий и установите зависимости:

```bash
git clone <url-репозитория>
cd weatherapp
npm install
```

Создайте файл переменных окружения `.env` в корне проекта и добавьте ваш ключ API:

```env
# Получите ключ на https://www.weatherapi.com/
REACT_APP_WEATHER_API_KEY=ваш_api_key
```

Примечание: проект использует Create React App (`react-scripts`), поэтому префикс `REACT_APP_` обязателен для доступа к переменным окружения в коде.

Запуск в режиме разработки:

```bash
npm start
```

Сборка production:

```bash
npm run build
```

Тесты:

```bash
npm test
```

## Переменные окружения

- `REACT_APP_WEATHER_API_KEY` — ключ для WeatherAPI.com. Без него приложение не сможет запрашивать данные о погоде.

## Устройство проекта

Короткая структура файлов и их назначение:

- `public/` — статические файлы (HTML)
- `src/`
  - `index.tsx`, `App.tsx` — точка входа и корневой компонент
  - `components/` — React-компоненты
    - `DisplayWeather.tsx`, `WeatherInfo.tsx`, `WeatherDetails.tsx`, `WeatherSearch.tsx` — основные UI-компоненты
    - `ui/Loader/` — компонент загрузки
  - `services/weatherService.ts` — модуль для получения данных от Weather API
  - `styles/` — глобальные стили (normalize и т.д.)
  - `types/` — TypeScript типы
  - `utils/` — вспомогательные утилиты

## Как это работает (коротко)

В `src/services/weatherService.ts` реализована функция `fetchWeatherData(apiKey, city)`, которая формирует запрос к WeatherAPI и возвращает структуру данных с полями `location` и `current`.

Компоненты получают ключ из окружения (например, `process.env.REACT_APP_WEATHER_API_KEY`) и передают его в сервис при поиске города.

## Полезные замечания

- Если при первом запуске приложение не видит ключа API — перезапустите dev-сервер (CRA читает `.env` при старте).
- В `package.json` уже есть штатные скрипты: `start`, `build`, `test`, `eject`.
- В `src/services/weatherService.ts` используется `fetch`. В репозитории присутствует `axios` в зависимостях — при желании можно переписать на axios.

## Внесение изменений и вклад

1. Форкните репозиторий.
2. Создайте ветку: `feature/имя-ветки`.
3. Сделайте коммиты небольшими и с осмысленными сообщениями.
4. Откройте PR — опишите изменения и добавьте скриншоты при необходимости.

## Лицензия

Проект распространяется под лицензией MIT — добавьте `LICENSE` файл при необходимости.

## Контакты

Если нужно — добавьте описание, как с вами связаться (email, Telegram и т.п.).

---

Если хотите, могу дополнить README экранными снимками, значком (badge) и инструкцией по деплою (Netlify / Vercel / GitHub Pages).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
