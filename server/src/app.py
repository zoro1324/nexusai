from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
def test():
    return {"message":"The server is running"}