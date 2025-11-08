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
