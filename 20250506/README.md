# search screen feature

control searches and see past searches

## vite react

## react-router

## context api

## daisy-ui

### steps

npm create vite@latest search-screens

---- react-router
npm i react-router

import {
createBrowserRouter,
RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
{
path: "/",
element: <div>Hello World</div>,
},
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
<RouterProvider router={router} />
);

------ daisy ui
https://daisyui.com/docs/install/react/

npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [tailwindcss(), react()],
});

@import "tailwindcss";
@plugin "daisyui";
