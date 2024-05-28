# LambdaTest-Certifications
‘LambdaTest-Certifications’
I use JavaScript as the language of choice and run tests in parallel on different browsers using LambdaTest platform. Here's how I have done it:
#1. Setup Playwright Project
First, ensure you have Node.js installed on your system. Then, create a new project directory and initialize it.
mkdir playwright-lambdatest
cd playwright-lambdatest
npm init -y
npm install playwright
#2. Install Playwright and Configure LambdaTest Capabilities
Next, install Playwright:
npm install @playwright/test
Then, create a playwright.config.js file to configure LambdaTest capabilities for different browser/OS combinations.
#3. Write the Test Script
Create a tests directory and add a test file simple-form-demo.spec.js
#4. Run Tests in Parallel
You can run the tests in parallel using the following command
npx playwright test , This will execute the test scenario on both Chrome on Windows 10 and Safari on macOS Catalina as specified in the playwright.config.js.
#5. Enabling Network Logs, Video Recording, Screenshots, and Console Logs
The configuration in playwright.config.js ensures that all the required logs, video recordings, screenshots, and traces are captured.
Screenshots: Enabled with screenshot: 'on'
Video Recording: Enabled with recordVideo: { dir: 'videos/' }
Trace Logs: Enabled with trace: 'on'
