# Parachute By OpenRegistry

## What is this project:

Parachute is the frontend for [OpenRegistry](https://github.com/containerish/OpenRegistry), which is used for 
managing your container images in an easy to use UI.


## How to run this project locally?

This project is built using React (create-react-app), which means most of the dev/build process is similar to any React
Application out there. However, there's a minor difference. We use `.env` file for loading the base url for our backend.
This helps us manage the backend that the frontend will use in an easy way. Here's what must be done to run this project
locally:

1. Clone this project:
```sh
git clone https://github.com/containerish/parachute-ui.git
```

2. Install all the required dependencies:
```sh
npm install # or yarn install
```

3. Make a copy of the `env.example` file:
```sh
cp env.example .env
```

> Note that here you must make sure you have the **OpenRegistry Backend** running on your local system.
If you follow [this official link](https://github.com/containerish/OpenRegistry), you can find the instructions on 
how to run it.

4. Finally, run the application:
```sh
npm start # or yarn start
```
