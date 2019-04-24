# wu-jeffrey.io

## Tools required
- React
- React Router
- Firebase-CLI

## Setup

1. Clone repo
2. `npm install`

## Development

1. `npm start`

## Deployment

### 1. Install Firebase-CLI tools (Skip to step 2 if installed)
  #### 1.1 Install
  `npm install -g firebase tools`
  `firebase login`
  #### 1.2 Init
  `firebase init`
  - only firestore and hosting for now
  - default firestore settings for now
  - yes to SPA for react router to handle
  - type `build` when asked for build folder
 
### 2. Build react app
  #### 2.1 Delete `build/index.html` firebase init
  #### 2.2 Build
  `npm run build`
 
### 3. Deploy to firebase hosting
  #### 2.1 `firebase deploy`
  
### 4. Fingers crossed nothing explodes
