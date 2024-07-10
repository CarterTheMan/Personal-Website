# Personal-Website
This is a website to act as my personal portfolio

You can see all my information, projects and even my resume.

This may need to change color schemes, but that will be addressed later once everything else is complete.

TODO: 
1. Add the newer projects

Use this figma design
https://www.figma.com/file/W6ly1yMLQ71Cdp4dRjaUQu/Personal-Website?type=design&node-id=0%3A1&mode=design&t=6XdLOieI81llVUW2-1

Amplify PDF Issue: 
When Hosting on AWS Amplify, there is an issue with loading the PDFs. To fix this, follow the steps below: 
1. Open Amplify and select "View app" for the project you want to look at
2. Under "Hosting", select "Rewrites and redirects"
3. Select "Manage redirects" in the top left
4. Find the Type that says "200 (Rewrite)" and then look to the Source address of that row
5. Where it lists different file extensions, such as css, add pdf in a format that matches the other extensions
6. Click the "Save" button in the bottom right corner. 
Now the PDFs will load properly. 
