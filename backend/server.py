import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from datetime import datetime
import uuid
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure as needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = MongoClient(mongo_url)
db = client.wade_portfolio

# Models
class ContactSubmission(BaseModel):
    name: str
    email: str
    message: str

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    message: str
    timestamp: datetime
    status: str = "received"

# API Routes
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "Wade Tubbs Portfolio API"}

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact(contact: ContactSubmission):
    try:
        # Create contact submission document
        contact_doc = {
            "id": str(uuid.uuid4()),
            "name": contact.name,
            "email": contact.email,
            "message": contact.message,
            "timestamp": datetime.utcnow(),
            "status": "received"
        }
        
        # Insert into MongoDB
        result = db.contacts.insert_one(contact_doc)
        
        if result.inserted_id:
            return ContactResponse(**contact_doc)
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact submission")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing contact submission: {str(e)}")

@app.get("/api/contacts")
async def get_contacts():
    try:
        contacts = list(db.contacts.find({}, {"_id": 0}).sort("timestamp", -1))
        return {"contacts": contacts}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching contacts: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)