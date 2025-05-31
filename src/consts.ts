// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Kari Sakib';
export const SITE_DESCRIPTION = 'Frontend, Backend, DevOps and everything in between.';
export const SITE_NAVIGATION = [
 {
  text: "Home",
  href: "/",
  ariaLabel: "Home page",

 },
 {
  text: "Blog",
  href: "/blog",
  ariaLabel: "Blog collection page",
 },
 {
  text: "Projects",
  href: "/projects",
  ariaLabel: "Projects page",
 },
 {
  text: "Work",
  href: "/work",
  ariaLabel: "Work page",
 }
];
export const SITE_ICONS = [
 {
  ariaLabel: "See Kari's amazing resume",
  href: "/Kari_Sakib_Resume.pdf",
  target: "_blank",
  svg: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-file-user"
          ><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path
            d="M15 18a3 3 0 1 0-6 0"></path><path
            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
          ></path><circle cx="12" cy="13" r="2"></circle></svg
        >`
 },
 {
  ariaLabel: "Check out what Kari's building on GitHub",
  href: "https://github.com/karisakib",
  target: "_blank",
  svg: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github"
          ><path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          ></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
        >`
 },
 {
  ariaLabel: "Connect with Kari on LinkedIn",
  href: "https://linkedin.com/in/karisakib",
  target: "_blank",
  svg: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-linkedin"
          ><path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          ></path><rect width="4" height="12" x="2" y="9"></rect><circle
            cx="4"
            cy="4"
            r="2"></circle></svg
        >`
 },
 {
  ariaLabel: "Follow Kari on X/Twitter",
  href: "https://x.com/theicydev",
  target: "_blank",
  svg: `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-twitter"
          ><path
            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
          ></path></svg
        >`
 },
 // {
 //  ariaLabel: "Subscribe to Kari's YouTube channel",
 //  href: "https://youtube.com/theicydev",
 //  target: "_blank",
 //  svg: `<svg
 //          xmlns="http://www.w3.org/2000/svg"
 //          width="18"
 //          height="18"
 //          viewBox="0 0 24 24"
 //          fill="none"
 //          stroke="currentColor"
 //          stroke-width="2"
 //          stroke-linecap="round"
 //          stroke-linejoin="round"
 //          class="lucide lucide-twitter"
 //          ><path
 //            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
 //          ></path></svg
 //        >`
 // },
]
export const SITE_PROJECTS = [
 {
  name: "Personal Blog",
  tagline: "Built my personal blog with Astro, MDX, and Tailwind",
  status: "Completed",
  domain: "Personal Blog",
  stack: ["Astro", "MDX", "Tailwind",],
  description: "Built my personal blog with Astro, MDX, and Tailwind",
  learned: "I learned X while trying to solve the problem of Y and cam eup with Z as the solution.",
  demoUrl: "https://example.com/",
  sourceCodeUrl: "https://github.com/karisakib/",
 },
 {
  name: "Personal Blog",
  tagline: "Built my personal blog with Astro, MDX, and Tailwind",
  status: "Completed",
  domain: "Personal Blog",
  stack: ["Astro", "MDX", "Tailwind",],
  description: "Built my personal blog with Astro, MDX, and Tailwind",
  learned: "I learned X while trying to solve the problem of Y and cam eup with Z as the solution.",
  demoUrl: "https://example.com/",
  sourceCodeUrl: "https://github.com/karisakib/",
 },
 {
  name: "Personal Blog",
  tagline: "Built my personal blog with Astro, MDX, and Tailwind",
  status: "Completed",
  domain: "Personal Blog",
  stack: ["Astro", "MDX", "Tailwind",],
  description: "Built my personal blog with Astro, MDX, and Tailwind",
  learned: "I learned X while trying to solve the problem of Y and cam eup with Z as the solution.",
  demoUrl: "https://example.com/",
  sourceCodeUrl: "https://github.com/karisakib/",
 },
]
export const SITE_WORK = [
 {
  role: "", // (string) Your job title or role.
  company: "", // (string) The name of the company or organization.
  companyUrl: "https://maximus.com", // (string, optional) Link to the company's website.
  location: "Remote", // (string, optional) City, State (e.g., "San Francisco, CA").
  employmentType: "Full-time", // (string, optional, e.g., "Full-time", "Part-time", "Contract", "Internship")
  dateStart: "", // (string, ISO 8601 format: "YYYY-MM-DD" or "YYYY-MM")
  dateEnd: "", // (string, ISO 8601 format: "YYYY-MM-DD" or "YYYY-MM", or "Present" if current)
  industry: "Federal IT Services", // (string, optional) The industry of the company (e.g., "Technology", "Finance", "Healthcare").
  description: "", // (string, optional) A brief overview of the company or your overall team/department's purpose if relevant.
  responsibilities: [], // (array of strings) Key responsibilities and tasks performed. Ideal for bullet points.
  achievements: [], // (array of strings, optional) Quantifiable accomplishments and successes. STAR method (Situation, Task, Action, Result) is good here.
  skillsUtilized: [], // (array of strings, optional) Key skills and technologies used in this role.
  // 'details' can be replaced by 'responsibilities' and 'achievements' for more structure.
 }
]




// export const PROJECTS = [{
//   "name": "", // (string) The official name of the project.
//   "tagline": "", // (string, optional) A short, catchy phrase describing the project.
//   "status": "", // (string, e.g., "Completed", "In Progress", "Archived", "Concept")
//   "startDate": "", // (string, ISO 8601 format: "YYYY-MM-DD")
//   "endDate": "", // (string, ISO 8601 format: "YYYY-MM-DD", or null if ongoing)
//   "role": "", // (string, optional) Your specific role in the project if it was a team effort (e.g., "Lead Developer", "UI/UX Designer", "Project Manager").
//   "domain": "", // (string) The area or industry the project relates to (e.g., "Fintech", "Healthcare", "E-commerce", "Personal Portfolio").
//   "stack": [], // (array of strings) Key technologies, languages, frameworks, and tools used (e.g., ["React", "Node.js", "Python", "AWS S3", "Figma"]).
//   "description": "", // (string) A concise overview of the project – what it is, what it does.
//   "problemStatement": "", // (string, optional) The problem this project aimed to solve.
//   "solution": "", // (string, optional) How the project addresses the problem.
//   "features": [], // (array of strings, optional) Key features or functionalities of the project.
//   "challenges": [], // (array of strings, optional) Significant challenges faced and how you overcame them.
//   "learned": [], // (array of strings) Key skills, technologies, or concepts you learned or improved.
//   "achievements": [], // (array of strings, optional) Quantifiable results or notable accomplishments (e.g., "Reduced load time by 30%", "Acquired 100+ beta users").
//   "url": "", // (string, optional) Live URL of the deployed project.
//   "sourceCodeUrl": "", // (string, optional) Link to the GitHub/GitLab repository.
//   "demoUrl": "", // (string, optional) Link to a video demo or interactive walkthrough.
//   "images": [ // (array of objects, optional)
//     {
//       "src": "", // (string) URL or path to the image.
//       "alt": ""  // (string) Alt text for accessibility.
//     }
//   ],
//   "videos": [ // (array of objects, optional)
//     {
//       "src": "", // (string) URL to the video (e.g., YouTube embed link).
//       "title": "" // (string) Title of the video.
//     }
//   ],
//   "tags": [], // (array of strings, optional) Keywords for filtering or categorization (e.g., "Web Development", "Machine Learning", "API").
//   "teamSize": null, // (number, optional) Number of people on the team. Null or 1 for solo projects.
//   "isFeatured": false // (boolean, optional) Highlight this project on your portfolio.
// }]