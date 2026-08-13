from fastapi import FastAPI

app = FastAPI(title="Task Manager API")

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/api/items")
def items():
    return {"items": [
        {"id": 1, "title": "Generated from natural language", "completed": True},
        {"id": 2, "title": "Edit code in AI workspace", "completed": False},
        {"id": 3, "title": "Deploy into AWS VPC", "completed": False}
    ]}
