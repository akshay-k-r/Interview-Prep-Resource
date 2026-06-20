# Local Setup & Deployment

## Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v18 or higher)
- npm or yarn

## Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akshay-k-r/Interview-Prep-Resource.git
   cd Interview-Prep-Resource
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000). The site will automatically reload as you modify `.mdx` or `.js` files.

## Building for Production
To generate an optimized static build of the application:

```bash
npm run build
```
This command compiles the Next.js application and creates an `.next` folder with the production assets.

## Deployment
Because the project is purely static and uses standard Next.js, it can be deployed seamlessly to platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

**To deploy to Vercel:**
1. Push your code to GitHub.
2. Log into Vercel and click "Add New Project".
3. Import the repository. Vercel will automatically detect the Next.js framework and configure the build commands.
4. Click Deploy.
