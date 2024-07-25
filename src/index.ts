import { Elysia } from "elysia";

async function fMizera() {
	const baseURL = "https://panel.worldunited.gg/api/events/1400/best-times?filter=no_powerups&car=bmwm3gtre46";
	const tracks = await fetch(baseURL)
		.then((res) => res.json())
		.then((res) => res.items)
		.catch((err) => console.error(err));
	return tracks;
}

const app = new Elysia()
	.get("/", () => "Hello Elysia")
	.get("/mizera", () => fMizera())
	.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
