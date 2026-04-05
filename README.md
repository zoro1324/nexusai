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