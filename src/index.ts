import express, { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) => {
	res.send("Express TypeScript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
	res.send("pong 🏓");
});

export default app;
