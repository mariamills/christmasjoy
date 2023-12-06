
# ChristmasJoy API 🎄

Welcome to the __ChristmasJoy API__, a festive and open-source __REST API__ designed to bring the joy of Christmas to your applications. This API, crafted with NextJS 14 and TailwindCSS, offers a variety of Christmas-themed data, perfect for creating holiday websites, apps, and more.


## 🎯Features

- __Endpoints__: Access jokes, images, facts, songs, greetings, and more through easy-to-use API endpoints.
- __Frontend Website__: A user-friendly website showcasing the capabilities of the API.
- __Documentation__: Detailed documentation to get you started quickly.
- __Open Source__: Free to use and contribute to, licensed under AGPL-3.0.

## 🖥️Tech Stack

- __NextJS 14__: For a robust and scalable backend.
- __TailwindCSS & TailwindCSS Components__: For a sleek and responsive frontend design.
- __TypeScript__: Ensuring type safety and improving developer experience.

## 📚API Endpoints
- __/api/jokes__: Returns a list of Christmas-themed jokes.
- __/api/images__: Returns a list of Christmas-themed images.
- __/api/facts__: Returns a list of Christmas-themed facts.
- __/api/songs__: Returns a list of Christmas-themed songs.
- __/api/greetings__: Returns a list of Christmas-themed greetings.
- __/api/recipes__: Returns a list of Christmas-themed recipes. (Currently only one recipe is available)
- __/api/cookies__: Returns what type of cookies Santa wants this year.
- __/api/countdown__: Returns the number of months, days, hours, minutes, and seconds until Christmas. And the day of the week that Christmas falls on.

Some endpoints have optional query parameters that can be used to filter the results, such as getting a random joke or image.

For more information, visit our website and check out the [API documentation](https://christmasjoy.dev/docs/endpoints).

## Make a Request: Quick Start

Getting started with the ChristmasJoy API is easy. Here's a quick guide to making your first request:

### Step 1: Base URL
Start with the base URL of the API:
`https://christmasjoy.dev/api/`

### Step 2: Choose an Endpoint
Select the endpoint you want to access. Here are a few examples:

- `/api/jokes` for Christmas jokes.
- `/api/images` for festive images.
- `/api/songs` for Christmas songs.
- Visit the [API documentation](https://christmasjoy.dev/docs/endpoints) for a full list of endpoints.

### Step 3: Make the Request
Use a tool like `curl` or any HTTP client in your preferred programming language. 
Here's an example using curl:
```bash
curl https://christmasjoy.dev/api/jokes
```

### Step 4: Handle the Response
The API will return a JSON response. Here’s a simple example in JavaScript using `fetch`:
```javascript
fetch('https://christmasjoy.dev/api/jokes')
    .then(response => response.json())
    .then(data => console.log(data));
```
Next Steps
This is just the beginning! To explore more endpoints and learn about additional parameters and response formats, please visit the [website](https://christmasjoy.dev).

## 🚀 Getting Started

To use the ChristmasJoy API, visit our website and check out the API documentation.

### Prerequisites
- Basic knowledge of REST APIs
- Familiarity with JavaScript/TypeScript

### Installing

1. Clone the repository
```bash
git clone https://github.com/mariamills/christmasjoy.git
```

2. Navigate to the project directory
```bash
cd christmasjoy-api
```

3. Install dependencies
### `npm install`

4. Start the development server
### `npm run dev`

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL=https://christmasjoy.dev/api`


## 👥Contributing

Contributions are very welcomed from everyone! Whether you're fixing bugs, adding new features, or improving documentation, your help makes this project better.

To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

