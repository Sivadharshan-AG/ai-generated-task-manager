from pathlib import Path

from fastapi.staticfiles import StaticFiles

from app.main import app

DEPLOYMENT_ID = "dep-approved-e2e-20260815"

@app.get("/__deployment")
def platform_deployment():
    return {"deployment_id": DEPLOYMENT_ID, "status": "live"}

static_dir = Path(__file__).resolve().parent / "static"
if static_dir.exists():
    app.mount("/", StaticFiles(directory=str(static_dir), html=True), name="generated-frontend")
