
Website for Katya

Webapp using react-app for portfolio website of an artist as major practice project.


Previous steps:

1. initiating new repository based on old sketches where I did my first steps with just HTML, CSS and plain Javascript. Implementing React and SCSS (because I view this on as way more usefull and more easy to handle than just CSS) so technically at this state the app is version 3.0. Major changes inside file and repository structures to eliminate the amount of files of actual code.

2. Writing my constants with seperate CSS because of recycling purposes for later. Pages are kinda unique and will propably never recycled for further projects so it appeared as way more comfortable to write just one SCSS file for this specific application.

3. Implemented React-Router at the moment so currently there is just client-side routing. Current skill issue...

4. Created Gallery (actually my favorite part while writing this code) with popup-like modal view to show images cut down rectangular in the preview and as full size inside modal perspective.

5. CSS cleaned up and setting app ready for early deploying to look for bugs being live.



Next steps:

1. done
2. Implement better reusing of components. Currently React is not used optimized because of too much hardcoding inside the pages components.

3. Implement server-side routing as soon as I learned how to do this.

4. Reworking image import structures. Got the issue of not being able to properly use aliases in Data.jsx. Currently struggeling with absolute vs relative paths and the following resolving due to build command.

5. Finding a solution for display of image thumbnails. Precisly to not just use lazy loading inside the previews while the images are full size everywhere. So the plan is to find a method to scale the images to a lower resolution inside the code without adding every single image as a smaller thumbnail.