🧪 Testing
Our project uses a combination of Unit, Integration, and End-to-End (E2E) testing to ensure code reliability, maintainability, and overall application stability.

🔹 1. Unit Testing
Purpose: Test individual functions or components in isolation.
Tools: Jest, Testing Library (React Testing Library for UI components).
Example: Verifying a function returns the expected output given specific inputs.
npm run test
🔹 2. Integration Testing
Purpose: Test interactions between multiple units/modules.
Tools: Jest, React Testing Library.
Example: Testing a form component that interacts with multiple child components and APIs.
npm run test
🔹 3. End-to-End (E2E) Testing
Purpose: Simulate real user scenarios and test the full application flow.
Tools: Cypress / Playwright.
Example: Logging in, navigating to a page, and performing user actions.
# For Cypress
npx cypress open

# Or for Playwright
npx playwright test
✅ Best Practices
Write tests for new features before or during development.
Keep tests deterministic and independent.
Use mocks/stubs where external services are involved.
Continuously monitor test coverage and aim for meaningful assertions.
