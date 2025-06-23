# <center>hackathon-chatbot </center>
## <center>A hackathon project created for Code Institute by David Barton, Zoe Perry and Thomas Brown</center>
![an image of the website](/assets/readme/amiresponsive.png)

### <center>[Link to the website](https://zoe-perry.github.io/hackathon-chatbot/) </center>
## Index
1. [Overview](#overview)
2. [UX Design Process](#ux-design-process)
    - [User Stories](#user-stories)
    - [Wireframes](#wireframes)
    - [Color Scheme](#color-scheme)
    - [Fonts](#fonts)
3. [Features](#features)
4. [Improvements](#improvmentsfuture-development)
5. [Deployment](#deployment)
6. [Testing and Validation](#testing-and-validation)
7. [AI implementation](#ai-implementation)
8. [References](#references)
9. [Tech used](#tech-used)
10. [Learning points](#learning-points)

## Overview
A website created to host a chatbot named 'mistral' via an API. It allows the user to talk with one of the large language models (LLMs), similar to ChatGPT.

## UX Design Process

### User Stories
1. As a user, I want to be able to send messages to a Mistral LLM via the website, so that I can have a conversational experience powered by the model.

2. As a user, I want to be able to select from a predefined list of personalities, so that I can customize how the LLM responds to me.

3. As a user, I want the selected personality to persist during my conversation, so that the LLM stays in character until I change it.

4. As a user, I want to be able to switch personalities during an ongoing conversation, so that I can explore different interaction styles without starting over. 

5. As a user, I want the website to display both my messages and the LLM’s responses in a chat interface, so that I can follow the conversation flow naturally. 

6. As a user, I want the website to show when the LLM is generating a response, so that I know my input is being processed.

7. As a user, I want to have a clear option to start a new conversation, so that I can reset the context and choose a different personality if I wish. 

8. As a user, I want to be informed about which personality is currently active, so that I always know who I’m “talking” to.

9. As a user, I want the website to handle API errors gracefully, so that I understand if something goes wrong and what I can do next.


### Wireframes
![mobile wireframe](/assets/readme/chatbot_mobile.png)

![tablet wireframe](/assets/readme/chatbot_tablet.png)

![desktop wireframe](/assets/readme/chatbot_desktop.png)

The wireframes reflect the minimalist and function-first approach inspired by the Nothing Phone aesthetic—clean lines, spacious layout, and intentional placement of each UI element.


### Color Schemes
![colour scheme](/assets/readme/colour-palette-alt.png)

This project's color palette is inspired by the minimalist and high-contrast design of the Nothing Phone brand. Their approach to visual identity—clean, futuristic, and utilitarian—shaped the selection of these colors for both aesthetic and UX clarity.


### Fonts
![google fonts](/assets/readme/fonts.png)

[Link to google fonts](https://fonts.google.com/share?selection.family=Doto:wght@100..900|Jersey+10)

This project uses fonts inspired by the sleek, futuristic design ethos of the Nothing Phone brand. Their typography combines readability with a distinct visual identity that feels both modern and minimal. 
These fonts were chosen to balance clarity with character. Doto ensures smooth readability across various screen sizes, and gives the interface a unique, tech-forward vibe reminiscent of the Nothing brand identity. Jersey 10 is for future pages that need more block of text.


## Features

![Features](/assets/readme/features.png)

- API integration with a chatbot called 'Mistral'
- Input box with submit button for submitting queries to chatbot
- Personality modifier dropdown to request different types of responses from the chatbot
- Reset chat button to clear the display box
- API Key modal to allow user's to enter the API Key as a way to circumvent revealing our key for security
- Loading icon added for chatbox to give users visual indication that their response was sent


## Improvements

- We would have liked to have included another chatbot with the capability for image generation.
- Had we had the resources, a better LLM would've provided a better user experience overall.

## Deployment
The website is hosted via Github pages. To host your own website follow these steps:

1. Visit the Github respository of your choice.
2. Click settings along the top of the options bar (the cog icon)
3. Click the pages link on the left hand side - its at the bottom of the Code and automation subheading
4. Under branch click which branch you want to go live with (most likely main) and then click save.
5. Wait a few minutes and then click the link that should appear near the top of the screen and you will see your newly deployed website.
6. You can unpublish at anytime by clicking the three dots icon and clicking Unpublish site


## Testing and Validation
![Lighthouse validation](/assets/readme/lighthouse.png)

At first our lighthouse validation score was a lot lower, however after compressing our logo image and converting it to a webp image, it reduced the load time of the page and greatly increased our performance score.

![HTML validation](/assets/readme/html-validation.png)

There were no issues at any point with HTML validation.

![CSS validation](/assets/readme/css-validation.png)

There were no issues at any point with CSS Validation.

![JS Validation](/assets/readme/js-validation.png)

Our main issue with JS validation is that we had two functions called through onclick in our HTML, and so the validator flagged that we had two unused functions which in reality was not the case. Additionally there were some minor issues with semicolons not always being added however these were not fatal to the code.

## AI Implementation

### Code Creation

The main role AI took in code creation was to assist us in converting python code for integrating APIs into JavaScript code due to the nature of this project.

### Debugging

Ai was greatfully useful in the debugging progress, particularly with minor issues we might've overlooked such as integrating old elements of bootstrap into our code, which AI checked and corrected to the latest version of bootstrap for us.

### Performance and User Experience

A really helpful piece of code AI gave us to optimise was optional chaining which allowed us to execute an if / else statement without the code throwing an error if there was an object missing from the if statement.

### Development Process

AI had a greatly important role in our development process. Without it we may have struggled to properly convert all of our code from python into javascript, might've missed minor errors that we were unsure of how to fix, and likely would not have had the greatest success in fully optimising our code to the best of our ability.
However this wasn't entirely without issue, there were times where AI could not figure out exactly how to resolve the error, leading to a greater time sink on how to fix these issues as we had to fully research an issue over an extended period of time. This led to a greater understanding of the topic, but at the cost of time through the AI's shortcoming.

## References

- [Bootstrap](https://getbootstrap.com/)
- [Google fonts](https://fonts.google.com/)
- Colour scheme - [Venngage](https://venngage.com/tools/accessible-color-palette-generator)
- Repository - [Github](https://github.com/)
- Virtual Coding Environment - [VSCode](https://code.visualstudio.com/)
- LLM host site - [Hugging Face](https://huggingface.co/)
- HTML code validator - [W3](https://validator.w3.org/)
- CSS code validator - [W3](https://jigsaw.w3.org/css-validator/)
- JS code validator - [JSHint](https://jshint.com/)
- Icons - [FontAwesome](https://fontawesome.com/icons)
- LLM Assistance - [ChatGPT](https://openai.com/chatgpt/overview/) [Copilot](https://github.com/)

## Tech Used

- CSS
- HTML
- Javascript
- Bootstrap
- Copilot
- ChatGPT

## Learning Points

This project used a lot of pair programming to get our work done. We felt this worked the best for us and we worked efficiently as a team, however due to the nature of this style of work we struggled with allocating the workload perhaps as equally as we could've. Despite being happy with the work we produced and the method through which we created it, this is potentially a shortcoming in which we could work to be more equal in future projects.

On top of this we were maybe a bit safe in the scope of our project, potentially due to the fear of merge conflicts causing issues within our project. With our confidence with merge conflicts increasing, in future projects we would likely now be able to increase the scope for a greater project, which could additionally assist with our previous point in allowing a greater split of workload with a greater scope.