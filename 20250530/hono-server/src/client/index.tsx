import { Hono } from "hono";
import type { FC } from "hono/jsx";

const routes = new Hono().basePath("/client");

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  console.log("HELLO");
  return (
    <Layout>
      <h1
        onClick={() => {
          console.log("HELLO THERE");
        }}
      >
        Hello Hono!
      </h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </Layout>
  );
};

routes.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

export default routes;
