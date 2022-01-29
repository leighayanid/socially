# socially 👋

Just another linktr.ee clone.

Store all your social links in one place. Add your social media links, music playlist links, payment links, blogs etc.

Powered by Nuxt.js and Supabase.

`Note: This project is still in development.`

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![Build](https://img.shields.io/appveyor/build/leighayanid/socially)

![Image](https://res.cloudinary.com/rentapp/image/upload/v1643505685/socially_uifak4.png)

## [Demo](https:socially-v1.vercel.app)

## App Features

- User Authentication
- Add unlimited links
- Shareable links
- Profile Management

## Todo Features

- Stats
- Themes

## Tech Stack

### Client | Front-end 🔥

- Nuxt.js 2 (SSR)
- TailwindCSS 💅
- DaisyUI 💮

### Server | Backend 🔥

- Vercel
- Supabase

## Supabase Features Used ⚡

- 🔐 Supabase Auth
- 🗄️ SUpabase Database
- 💾 Supabase Storage

## Vue Plugins 🔌

- VueFormulate
- vuexPersistedstate
- vue-paginate
- vuex

## Nuxt Modules

- @nuxtjs/pwa
- nuxt-supabase
- @nuxtjs/toast
- @nuxtjs/date-fns
- @nuxtjs/dotenv
- @nuxtjs/tailwindcss
- @nuxtjs/stylelint-module
- @nuxtjs/eslint-module

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SUPABASE_URL`

`SUPABASE_KEY`

## Run Locally

Clone the project

```bash
  git clone https://github.com/leighayanid/socially
```

Go to the project directory

```bash
  cd socially
```

Install dependencies

```bash
  npm install
```

Create a new Supabase project.

    - Copy and paste the `SUPABASE_URL` and `SUPABASE_KEY` inside `.env` file.

    - Go to project console.

    - Open the query page.

    - Create a new query.

    - Copy the `schema.sql` inside the project folder and paste inside the Supabase SQL editor.

    - Finally run the script.

Going back to the client code:

Start the server

```bash
  npm run dev
```

If everything works fine, your local copy of socially should be up and running.

## Authors 👨‍👦

- [@leighayanid](https://www.github.com/leighayanid)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
