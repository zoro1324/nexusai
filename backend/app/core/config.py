from pydantic_settings import BaseSettings,SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):

    model_config = SettingsConfigDict(
        env_file="../.env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    app_env: str = "development"
    secret_key: str = "changeme"
    access_token_expire_minutes: int = 30
    cors_origins: str = "http://localhost:5173"

    database_url: str = ""
    redis_url: str = "redis://localhost:6379"

    openai_api_key: str = ""
    anthropic_api_key: str = ""
    gemini_api_key: str = ""
    groq_api_key: str = ""

    tavily_api_key: str = ""
    google_cse_api_key: str = ""
    google_cse_id: str = ""

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",")]

@lru_cache
def get_settings() -> Settings:
    return Settings()