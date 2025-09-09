Website: Katya-Granova.com

Webapp using react-app for portfolio website of the artist.

How it works:

-   different visual and functional components building the pages (skeleton) of a portfolio website
-   the webapp relies on a Data.jsx-file where every visual object is imported and saved as object including the image, description strings and links to the seperate site components
-   handing the Data-object arrays to the gallery component that displays them as a uniform preview grid ==> thumnails are cut to uniform measures with overflow
-   gallery component has features to open a modal display (using Modal.jsx and TransformImage.jsx) as overlay with original scaling of the image and rotating gallery ==> navigation by either onClick-buttons or key events (left, right, escape) + zoom functionality via scroll or button


Further steps (optional):

1. Proper Routing: done! (.htaccess ftw lol) ; Backend is in process as well

2. Implement better reusing of components. Currently React is not used optimized because of too much hardcoding inside the pages components.

3. Reworking image import structures. Got the issue of not being able to properly use aliases in Data.jsx. Currently struggeling with absolute vs relative paths and the following resolving due to build command.

4. Finding a solution for display of image thumbnails. Precisly to not just use lazy loading inside the previews while the images are full size everywhere. So the plan is to find a method to scale the images to a lower resolution inside the code without adding every single image as a smaller thumbnail.


Notes for further projects:

- this project was established in November of 2023, when I just started to use React.js and evolved constantly over time so it definatly lacks best practices; personally a bit disappointing because I can do way better now but currently it works exactly as it should

- the Navbar needs rework due to it's "antique" state; I wrote this ages ago and reused it here but over time the building style is kinda messy and inefficient to rewrite => it works as it should so there is no necessity to do this now
    => edit: it got even worse with the implementation of <NavLink/> from react-router... needs to be redone asap! it's super annoying to operate styling and to modify; further project should receive for example TailwindCSS and mobile-first approach

- better usage of visual components for the seperate sites => better use mapping to reduce the amount of components

- the app.scss file got way to big because I decided to put all individual styling for this particular project inside; I can use this without issues right now but for better practices please use separate styling-sheets or proper libraries for the next one, my dear future self! 