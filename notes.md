clerk.com/docs/quickstart/nestjs

goal is to create a modern next.js application with user authentication and authorization with clerk.

toDo and necessary routes:
revisit how to add a new user from Clerk to the neon/drizzle database with extra fields
add user info to Contact schema in order to link existing users to contacts because we may want to know if a user has submitted multiple contacts or if an objectionable message was received from a known user. Or, just consider protecting the contact route
/ for home/landing page, should have a hero section with branding and a photo gallery grid
/photo/id for detail page that displays description, comments, and replies
/photo/id/edit for photo edit page where photo uploader can update description info or delete the photo
/photo/upload for logged in users to upload a new photo
/about for info about the website and me, with link to the github repository
/contact for a contact form if someone would like to reach out IN PROGRESS
comment section for each photo, visible to all but users must log in to add comment
reply capability for logged in users

npm create next-app@latest
all normal responses to install questions except next defaults to no to eslint by default?

npm install @clerk/nextjs  
added middleware.ts to root directory
added .env.local and claimed project with clerk

middleware does not protect routes by default with clerk, so we updated middleware.ts to include a test protected route.

form and data validation, first installed for actions -> send contact email, will be installed for additional validation for photo info
npm i zod

form and other prebuilt components
npx shadcn@latest init
selected legacy peer deps
npx shadcn@latest add form
selected legacy peer deps
npx shadcn@latest add textarea

emailjs
npm install --save @emailjs/browser

drizzle
npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit

note: for forms, we had to copy over things like FormError, FormInput and FormGroup from ui/Form from the example because shadcn/ui does not come with FormError out of the box
