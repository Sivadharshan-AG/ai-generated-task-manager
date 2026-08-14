from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Expense Tracker API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/api/items")
def items():
    return {
        "items": [
            {"id": 1, "title": "Generated from natural language", "completed": True},
            {"id": 2, "title": "Reviewed in AI workspace", "completed": False},
            {"id": 3, "title": "Ready for cloud deployment", "completed": False},
        ]
    }
