import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Model, createServer } from "miragejs";



  createServer({
    models: {
      transaction: Model,
    },
  
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Frelancer website",
            amount: 4000,
            type: "deposit",
            category: "dev",
            createdAt: new Date("2022-09-21"),
          },
          {
            id: 2,
            title: "Aluguel",
            amount: 1200,
            type: "withdraw",
            category: "casa",
            createdAt: new Date("2022-04-01"),
          },
        ]
      });
    },
  
    routes() {
      this.namespace = "api";
      this.get('/transactions', () => {
        return this.schema.all('transaction');
      });
      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create('transaction', data);
      });
    },
  });



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
