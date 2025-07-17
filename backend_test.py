#!/usr/bin/env python3
"""
Backend API Testing for Wade Tubbs Portfolio
Tests all API endpoints with comprehensive validation
"""

import requests
import json
import time
import os
from datetime import datetime
import uuid

# Load environment variables to get the backend URL
def load_env_file(file_path):
    """Load environment variables from .env file"""
    env_vars = {}
    try:
        with open(file_path, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    env_vars[key] = value
    except FileNotFoundError:
        print(f"Warning: {file_path} not found")
    return env_vars

# Get backend URL from frontend .env file
frontend_env = load_env_file('/app/frontend/.env')
BACKEND_URL = frontend_env.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE = f"{BACKEND_URL}/api"

print(f"Testing backend API at: {API_BASE}")

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.total_tests = 0
        self.passed_tests = 0
        
    def log_test(self, test_name, passed, message=""):
        """Log test result"""
        self.total_tests += 1
        if passed:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            status = "❌ FAIL"
        
        result = f"{status}: {test_name}"
        if message:
            result += f" - {message}"
        
        print(result)
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'message': message
        })
        
    def test_health_endpoint(self):
        """Test GET /api/health endpoint"""
        print("\n=== Testing Health Endpoint ===")
        
        try:
            response = requests.get(f"{API_BASE}/health", timeout=10)
            
            # Test 1: Status code should be 200
            self.log_test("Health endpoint returns 200", response.status_code == 200, 
                         f"Got status code: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                
                # Test 2: Response should contain status field
                self.log_test("Health response contains status", 'status' in data,
                             f"Response: {data}")
                
                # Test 3: Status should be 'healthy'
                if 'status' in data:
                    self.log_test("Health status is 'healthy'", data['status'] == 'healthy',
                                 f"Status: {data.get('status')}")
                
                # Test 4: Response should contain service field
                self.log_test("Health response contains service", 'service' in data,
                             f"Response: {data}")
                             
        except requests.exceptions.RequestException as e:
            self.log_test("Health endpoint accessible", False, f"Connection error: {str(e)}")
            
    def test_contact_submission(self):
        """Test POST /api/contact endpoint"""
        print("\n=== Testing Contact Submission ===")
        
        # Test data
        valid_contact = {
            "name": "Wade Tubbs",
            "email": "wade.tubbs@example.com",
            "message": "This is a test message for the portfolio contact form. Testing backend API functionality."
        }
        
        try:
            # Test 1: Valid contact submission
            response = requests.post(f"{API_BASE}/contact", 
                                   json=valid_contact, 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            self.log_test("Valid contact submission returns 200", response.status_code == 200,
                         f"Got status code: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                
                # Test 2: Response contains all required fields
                required_fields = ['id', 'name', 'email', 'message', 'timestamp', 'status']
                for field in required_fields:
                    self.log_test(f"Contact response contains {field}", field in data,
                                 f"Response: {data}")
                
                # Test 3: Verify data integrity
                if 'name' in data:
                    self.log_test("Contact name matches input", data['name'] == valid_contact['name'])
                if 'email' in data:
                    self.log_test("Contact email matches input", data['email'] == valid_contact['email'])
                if 'message' in data:
                    self.log_test("Contact message matches input", data['message'] == valid_contact['message'])
                
                # Test 4: UUID format validation
                if 'id' in data:
                    try:
                        uuid.UUID(data['id'])
                        self.log_test("Contact ID is valid UUID", True)
                    except ValueError:
                        self.log_test("Contact ID is valid UUID", False, f"Invalid UUID: {data['id']}")
                
                # Test 5: Timestamp format validation
                if 'timestamp' in data:
                    try:
                        datetime.fromisoformat(data['timestamp'].replace('Z', '+00:00'))
                        self.log_test("Contact timestamp is valid", True)
                    except ValueError:
                        self.log_test("Contact timestamp is valid", False, f"Invalid timestamp: {data['timestamp']}")
                
                # Test 6: Status should be 'received'
                if 'status' in data:
                    self.log_test("Contact status is 'received'", data['status'] == 'received')
                    
        except requests.exceptions.RequestException as e:
            self.log_test("Contact submission accessible", False, f"Connection error: {str(e)}")
            
        # Test 7: Missing required fields validation
        print("\n--- Testing Validation ---")
        
        # Test missing name
        invalid_contact = {"email": "test@example.com", "message": "Test message"}
        try:
            response = requests.post(f"{API_BASE}/contact", 
                                   json=invalid_contact,
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            self.log_test("Missing name returns error", response.status_code == 422,
                         f"Got status code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("Missing name validation test", False, f"Connection error: {str(e)}")
            
        # Test missing email
        invalid_contact = {"name": "Test User", "message": "Test message"}
        try:
            response = requests.post(f"{API_BASE}/contact", 
                                   json=invalid_contact,
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            self.log_test("Missing email returns error", response.status_code == 422,
                         f"Got status code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("Missing email validation test", False, f"Connection error: {str(e)}")
            
        # Test missing message
        invalid_contact = {"name": "Test User", "email": "test@example.com"}
        try:
            response = requests.post(f"{API_BASE}/contact", 
                                   json=invalid_contact,
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            self.log_test("Missing message returns error", response.status_code == 422,
                         f"Got status code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("Missing message validation test", False, f"Connection error: {str(e)}")
            
    def test_contact_retrieval(self):
        """Test GET /api/contacts endpoint"""
        print("\n=== Testing Contact Retrieval ===")
        
        try:
            response = requests.get(f"{API_BASE}/contacts", timeout=10)
            
            # Test 1: Status code should be 200
            self.log_test("Contact retrieval returns 200", response.status_code == 200,
                         f"Got status code: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                
                # Test 2: Response should contain contacts field
                self.log_test("Response contains contacts field", 'contacts' in data,
                             f"Response keys: {list(data.keys())}")
                
                # Test 3: Contacts should be a list
                if 'contacts' in data:
                    self.log_test("Contacts field is a list", isinstance(data['contacts'], list),
                                 f"Type: {type(data['contacts'])}")
                    
                    # Test 4: If contacts exist, verify structure
                    if data['contacts']:
                        contact = data['contacts'][0]
                        required_fields = ['id', 'name', 'email', 'message', 'timestamp', 'status']
                        for field in required_fields:
                            self.log_test(f"Contact entry contains {field}", field in contact,
                                         f"Contact: {contact}")
                        
                        # Test 5: Verify contacts are sorted by timestamp (newest first)
                        if len(data['contacts']) > 1:
                            timestamps = [contact.get('timestamp') for contact in data['contacts']]
                            sorted_timestamps = sorted(timestamps, reverse=True)
                            self.log_test("Contacts sorted by timestamp (newest first)", 
                                         timestamps == sorted_timestamps)
                    else:
                        print("ℹ️  No contacts found in database (this is normal for a fresh installation)")
                        
        except requests.exceptions.RequestException as e:
            self.log_test("Contact retrieval accessible", False, f"Connection error: {str(e)}")
            
    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("\n=== Testing CORS Configuration ===")
        
        try:
            # Test preflight request
            response = requests.options(f"{API_BASE}/contact",
                                      headers={
                                          'Origin': 'http://localhost:3000',
                                          'Access-Control-Request-Method': 'POST',
                                          'Access-Control-Request-Headers': 'Content-Type'
                                      },
                                      timeout=10)
            
            self.log_test("CORS preflight request succeeds", 
                         response.status_code in [200, 204],
                         f"Got status code: {response.status_code}")
            
            # Check CORS headers
            cors_headers = response.headers
            self.log_test("CORS Access-Control-Allow-Origin header present",
                         'Access-Control-Allow-Origin' in cors_headers)
            self.log_test("CORS Access-Control-Allow-Methods header present",
                         'Access-Control-Allow-Methods' in cors_headers)
                         
        except requests.exceptions.RequestException as e:
            self.log_test("CORS configuration test", False, f"Connection error: {str(e)}")
            
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Wade Tubbs Portfolio Backend API Tests")
        print("=" * 60)
        
        # Run all test suites
        self.test_health_endpoint()
        self.test_contact_submission()
        self.test_contact_retrieval()
        self.test_cors_configuration()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.total_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.total_tests - self.passed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests)*100:.1f}%")
        
        if self.passed_tests == self.total_tests:
            print("\n🎉 ALL TESTS PASSED! Backend API is working correctly.")
        else:
            print(f"\n⚠️  {self.total_tests - self.passed_tests} test(s) failed. Check the details above.")
            
        return self.passed_tests == self.total_tests

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if not success:
        exit(1)