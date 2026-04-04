from sqlalchemy.ext.asyncio import AsyncSession,create_async_engine,async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from app.core.config import get_settings

settings = get_settings()

engine = create_async_engine(
    url=settings.database_url,
    
)