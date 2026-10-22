# Impilo 0720 Tennis Club

A mobile-friendly, single-page website foundation for Impilo 0720 Tennis Club in Mamelodi, City of Tshwane. The club was formed in 2019, registered in July 2020, and is affiliated with Tennis South Africa, Gauteng Tennis Association and Tshwane Tennis Federation Development. Rooted in Mamelodi's Black community, the club collaborates with surrounding schools through an annual programme with a schools league and school tournaments. The site uses plain HTML, CSS and JavaScript, with no build tools or packages to install.

The club hosts three annual in-house tournaments: Impilo Tennis Vuka Opening Tournament (14 March), Impilo Anniversary Tournament (18 July) and Impilo Closing Tournament (28 November). All three are held at HM Pitje Stadium tennis courts in Mamelodi West.

Training is Monday–Friday, 15:30–17:30, and Saturday, 07:00–11:30, for ages 5–50. Registration is R300 per annum, with a monthly fee of R80,00.

Recent achievement: Under-10 players participated in a Tuks tournament and finished in 2nd, 5th and 9th positions.

## Project files

```text
index.html       Page structure and content
css/styles.css   Colours, layout and responsive design
js/main.js       Mobile navigation and current year
assets/          Club logo and club-owned photos
assets/impilo-0720-logo.svg  Downloadable vector logo
README.md        Project and publishing notes
render.yaml      Render static-site deployment settings
```

The tennis photos currently load from Unsplash as visual placeholders. Replace them with photos the club has permission to use. Text in square brackets is information for the club to confirm.

The site currently provides direct email and phone contact details; it does not include an online enquiry form.

## Open and test in VS Code

1. Open `index.html` from the Explorer, then choose **Open with Live Server** if that extension is already installed. Otherwise, use **File > Open in Browser** if available, or open `index.html` in your web browser from File Explorer.
2. Resize the browser to check the desktop and mobile layouts.
3. On a narrow window, open the menu and follow a link. Check that the email and phone links open the appropriate apps.
4. Internet access is needed for the hosted fonts and placeholder photos. The page structure and local styles still work without them.

## Git and GitHub

Git records project changes locally. GitHub stores a copy online. In the VS Code terminal, run these commands from this project folder, one at a time:

```sh
git init
```

Starts tracking this folder with Git.

```sh
git add .
```

Stages the current files so they can be included in a saved checkpoint.

```sh
git commit -m "Build Impilo 0720 Tennis Club homepage"
```

Saves the staged files as a commit with a short description. Git may ask you to set your name and email first.

Create an empty repository on GitHub. Replace the example address below with the HTTPS address shown for your repository, then run:

```sh
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git branch -M main
git push -u origin main
```

The first command connects this folder to the GitHub repository. The second names the current branch `main`. The third uploads the commit. Do not include passwords or access tokens in project files.

## Publish on Render

This project includes `render.yaml`, which tells Render to publish the files in the project root as a static site. There is no framework build step.

1. Push the project to GitHub using the steps above.
2. Sign in to [Render](https://dashboard.render.com/).
3. In the Render dashboard, choose **New > Blueprint**, connect the GitHub account if prompted, and select this repository.
4. Render reads `render.yaml`. Review the proposed `impilo-0720-tennis-club` static site and apply it.
5. When the first deploy succeeds, open the `onrender.com` URL shown on the service page.

Later commits pushed to the connected branch will trigger a new deploy automatically. You can also create a Static Site manually in Render and set the build command to `echo "No build step required"` and the publish directory to `.`.

## Publish with GitHub Pages

After pushing the project to GitHub, open its repository settings, choose **Pages**, select deployment from the `main` branch and the root folder, then save. GitHub Pages will show the published website address when deployment is ready. This site is static, so it does not need a server or build step.

Before sharing the site, replace contact details and other bracketed placeholders with confirmed information.