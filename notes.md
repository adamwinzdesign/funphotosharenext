clerk.com/docs/quickstart/nestjs

goal is to create a modern next.js application with user authentication and authorization with clerk.
user should be able to upload photos, delete their own photos, as well as create a description for each photo, as well as update or delete the descriptions for their own photos
Users should

npm create next-app@latest
all normal responses to install questions except next defaults to no to eslint by default?

npm install @clerk/nextjs  
added middleware.ts to root directory
added .env.local and claimed project with clerk

middleware does not protect routes by default with clerk, so we updated middleware.ts to include a test protected route.
