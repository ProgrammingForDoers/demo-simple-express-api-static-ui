# About

This is an Express API demo that illustrates the following:
- How to serve vanilla HTML/CSS/JS pages
- How to implement a simple "fake database" in the API using an array
- How to retrieve data from the API inside of vanilla HTML/CSS/JS pages using fetch requests

**NOTE:** Accessing the static pages will require the `.html` extension to be present. Ex: `http://localhost:3000/users.html`

# Try It Out Now (No Setup)

Fork this repo on Replit to run the app with no setup:

https://replit.com/@Prgrmming4Doers/DemoSimpleExpressApiStaticUi

(You can also modify the code and see the changes)

Otherwise, to clone/set up this project locally, proceed to "Getting Started" section

# Getting Started

### Installation

1. Clone this project
1. Run: `bin/setup`
1. Run: `bin/services up -d`
1. Run: `bin/services logs` to tail logs
1. Navigate to `http://localhost:3000` in your browser

### Development

Not all code changes will be automatically recognized, so you'll need to restart the stack:

Run: `bin/services down; bin/services up -d; bin/services logs`
