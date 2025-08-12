Website: Katya-Granova.com

Webapp using react-app for portfolio website of an artist.

How it works:

-   different visual and functional components building the pages (skeleton) of a portfolio website
-   the webapp relies on a Data.jsx-file where every visual object is imported and saved as object including the image, description strings and links to the seperate site components
-   handing the Data-object arrays to the gallery component that displays them as a uniform preview grid ==> thumnails are overflow cut
-   gallery component has features to open a modal display (using Modal.jsx and TransformImage.jsx) as overlay with original scaling of the image and rotating gallery ==> navigation by either onClick-buttons or key events (left, right, escape) + zoom functionality via scroll or button


Further steps:

1. Maybe substituting HashRouter with BrowserRouter in a (planned) working backEnd for contact formulars, direct website admin access to make the artist able to adjust pics and descriptions everytime.

2. Implement better reusing of components. Currently React is not used optimized because of too much hardcoding inside the pages components.

3. Reworking image import structures. Got the issue of not being able to properly use aliases in Data.jsx. Currently struggeling with absolute vs relative paths and the following resolving due to build command.

4. Finding a solution for display of image thumbnails. Precisly to not just use lazy loading inside the previews while the images are full size everywhere. So the plan is to find a method to scale the images to a lower resolution inside the code without adding every single image as a smaller thumbnail.
