# NexusAI

A production-grade multi-model AI chat platform built with FastAPI and React.

## Features

- Multi-model support (GPT-4o, Claude, Gemini, Groq) via LiteLLM
- Document upload with RAG pipeline (PDF, DOCX, TXT)
- Web search fallback via Tavily when AI doesn't know the answer
- Automatic image fetching for visual queries
- Real-time streaming responses via WebSockets
- JWT authentication with secure password hashing
- Vector similarity search via pgvector in Postgres
- Background document processing via Celery + Redis

## Tech Stack

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Zustand (state management)
- React Query (server state)

### Backend
- FastAPI (Python 3.13)
- SQLAlchemy 2.0 async + asyncpg
- Alembic (migrations)
- PostgreSQL 16 + pgvector
- Redis 7
- Celery (background tasks)

### AI Layer
- LiteLLM (multi-model routing)
- LangChain (orchestration)
- LlamaIndex (document indexing)
- Tavily (web search)

### DevOps
- Docker + Docker Compose
- GitHub Actions (CI/CD)
- Render (backend hosting)
- Vercel (frontend hosting)

## Project Structure

```
nexusai/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── database.py
│   │   ├── models/
│   │   ├── services/
│   │   │   ├── ai/
│   │   │   └── rag/
│   │   └── main.py
│   ├── tests/
│   ├── Dockerfile
│   └── pyproject.toml
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── .github/
│   └── workflows/
├── docker-compose.yml
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Python 3.13+
- Node.js 18+
- Docker Desktop
- Git

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/nexusai.git
cd nexusai
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your API keys.

### 3. Start the databases

```bash
docker compose up -d
```

This starts PostgreSQL with pgvector and Redis.

### 4. Run the backend

```bash
cd backend
uv sync
uv run uvicorn app.main:app --reload --port 8000
```

### 5. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

### 6. Open the app

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:8000 |
| API Docs (Swagger) | http://localhost:8000/docs |
| API Docs (Redoc) | http://localhost:8000/redoc |

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `REDIS_URL` | Redis connection string | Yes |
| `OPENAI_API_KEY` | OpenAI API key | At least one |
| `ANTHROPIC_API_KEY` | Anthropic Claude API key | At least one |
| `GEMINI_API_KEY` | Google Gemini API key | At least one |
| `GROQ_API_KEY` | Groq API key | At least one |
| `TAVILY_API_KEY` | Tavily search API key | Yes |
| `GOOGLE_CSE_API_KEY` | Google Custom Search key | Optional |
| `GOOGLE_CSE_ID` | Google Custom Search engine ID | Optional |
| `SECRET_KEY` | JWT signing secret | Yes |

## API Keys Setup

| Service | Free Tier | Link |
|---|---|---|
| OpenAI | $5 free credit | platform.openai.com |
| Anthropic | $5 free credit | console.anthropic.com |
| Groq | Free (rate limited) | console.groq.com |
| Tavily | 1000 searches/month free | tavily.com |
| Google CSE | 100 searches/day free | programmablesearchengine.google.com |

## Development

### Run linter

```bash
cd backend
uv run ruff check .
uv run ruff format .
```

### Run tests

```bash
cd backend
uv run pytest
```

### Create a database migration

```bash
cd backend
uv run alembic revision --autogenerate -m "your message"
uv run alembic upgrade head
```

## Deployment

### Backend → Render

1. Push to GitHub
2. Create a new Web Service on Render
3. Connect your repo
4. Set environment variables in Render dashboard
5. Deploy

### Frontend → Vercel

1. Push to GitHub
2. Import project on Vercel
3. Set `VITE_API_URL` to your Render backend URL
4. Deploy

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "feat: add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT