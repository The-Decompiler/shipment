# Shipment

A simple, responsive file hosting web application, returning a shortened URL to download the uploaded file.

## Project

This project uses the JAM stack, specifically **TypeScript**/**ReactJS** and **Tailwind CSS** for its frontend, and **Firebase** for its backend. Our Firebase backend utilizes three different features of Firebase: **Firebase Hosting**, **Firebase Storage**, and **Firebase Dynamic Links**.

Shipment has a drag-and-drop functionality alongside a file upload button (that opens your file manager of choice) to allow the uploading of items to our Firebase Storage. It will then upload the desired files, finally providing a short URL for each file using Firebase Dynamic Links. You can then click at the displayed shipments to copy the link to your uploaded files.

## Screenshots
### Homepage
![Home page](/src/static/home.png)

### Loading
![Loading page](/src/static/load.png)

### Completed
![Completed page](/src/static/complete.png)

## Development

We use the Firebase Hosting as the platform to host our web application. You can find the website [here](https://decompiler-shipment.web.app) Additionally, we organized our project workflow in such a way where Firebase will automatically detect a pull request in GitHub and provide a temporary preview URL for said PR, conveniently helping us view the changes directly without running it within our local repositories.

In the project directory, you can run:

### `yarn dev`

Runs app in development mode, reloading on edits.\
Open [http://localhost:3000](http://localhost:3000)
