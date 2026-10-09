# Clara AI Frontend

Clara AI is an early-stage interface for endoscopy image exploration and conversational medical information. Users can upload an image, review a model-generated polyp overlay, and continue asking questions in the same conversation. The landing page is available at `/`; the authenticated workspace is at `/app`.

Model output is for informational and research use. It is not a diagnosis or a substitute for qualified clinical review.

## Run locally

Requirements: Node.js 20 or newer and the Clara gateway service.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

The browser sends API requests to `/api/gateway/*`. Set `GATEWAY_BASE_URL` in `.env.local` if the gateway is not running at `http://localhost:3000`:

```bash
GATEWAY_BASE_URL=http://localhost:3000
```

For the real-time chat connection, set `NEXT_PUBLIC_CHAT_WS_URL` to the chat service WebSocket URL when it differs from the local default (`ws://localhost:3004`). Keep `.env.local` out of Git.

## Checks

```bash
npm run build
npm run lint
npm test
```

Built with Next.js, React, and TypeScript. The landing page design lives in `src/app/page.tsx` and `src/app/landing.css`.
