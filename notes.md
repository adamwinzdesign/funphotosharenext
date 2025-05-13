clerk.com/docs/quickstart/nestjs

goal is to create a modern next.js application with user authentication and authorization with clerk.

toDo and necessary routes:
/ for home/landing page, should have a hero section with branding and a photo gallery grid
/photo/id for detail page that displays description, comments, and replies
/photo/id/edit for photo edit page where photo uploader can update description info or delete the photo
/photo/upload for logged in users to upload a new photo
/about for info about the website and me, with link to the github repository
/contact for a contact form if someone would like to reach out
comment section for each photo, visible to all but users must log in to add comment
reply capability for logged in users

npm create next-app@latest
all normal responses to install questions except next defaults to no to eslint by default?

npm install @clerk/nextjs  
added middleware.ts to root directory
added .env.local and claimed project with clerk

middleware does not protect routes by default with clerk, so we updated middleware.ts to include a test protected route.
