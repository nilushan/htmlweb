# Modern & Attractive Landing Page

This project is a modern and attractive landing page built with HTML, CSS (Tailwind CSS), and vanilla JavaScript. It's designed to showcase products and features in a clean and engaging way.

## Project Structure

```
.
├── css/
│   └── style.css         # Custom CSS styles
├── js/
│   └── script.js         # JavaScript for dynamic content and interactivity
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow for deploying to GitHub Pages
├── .gitignore            # Specifies intentionally untracked files that Git should ignore
├── index.html            # Main HTML structure
└── README.md             # This file
```

## Features

*   Responsive design for various screen sizes.
*   Dynamic content rendering using JavaScript.
*   Interactive elements like mobile menu and product module views.
*   Styled with Tailwind CSS and custom CSS.
*   Automated deployment to GitHub Pages via GitHub Actions.

## Running Locally

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```
    (Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name)

2.  **Serve the files using a local web server.**
    Due to browser security restrictions with ES6 modules (`<script type="module">`) loaded via `file:///` paths, you need to serve the files from a local HTTP server.

    *   **Using `npx serve` (requires Node.js and npm):**
        ```bash
        npx serve
        ```
        This will typically serve the site at `http://localhost:5000` or `http://localhost:3000`. Check the terminal output for the exact URL.

    *   **Using Python's built-in server (if Python is installed):**
        For Python 3:
        ```bash
        python3 -m http.server
        ```
        For Python 2:
        ```bash
        python -m SimpleHTTPServer
        ```
        This will typically serve the site at `http://localhost:8000`.

3.  **Open your browser** and navigate to the URL provided by your local server (e.g., `http://localhost:5000`).

## Deployment

This project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch, thanks to the GitHub Actions workflow defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml:0).

Make sure your repository's GitHub Pages settings are configured to use "GitHub Actions" as the source for the build and deployment.