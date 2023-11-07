## 💡 Description

This test consists of validating and correcting an application. It will evaluate the analysis of technical problems and your ability to solve them in the most objective way possible.

<br>

## 📜 Recomendações 

To solve this API, it is desirable that the developer knows the following technologies in advance, and if he doesn't know them, he ends up learning them during the test.

- Docker
- Node.js
- MySQL
- Express
- OpenAPI 2.0

<br>

## ✍️ Application and Intent

The application consists of some CRUD *Endpoints* (*Create, Read, Update and Delete*), which have the following entities:

- Users
- Posts

Despite being a simple application, it ends up having several problems that we encounter in our daily lives as developers, so it is possible to evaluate how you would do by developing such skills to solve these problems.

<br></br>

## 👀 My observation as a developer 👀

As a developer analyzing the application and the context, I decided to put myself in the following scenario where I just arrived at the company, received this task and have to make everything functional within a period of seven days and later after discussing the problems with the team or superior, take some action. <br>
So analyzing the database sql I notice an obvious error, a second that can be considered an error and possibly a third. Among these, there is the wrong type of an id key, the lack of relationship between the tables and the other is the order of creation of the table where there may be interference if you implement the relationship. So, considering the newcomer scenario, I chose to correct just the typing and make it work first as quickly as possible.

<br></br>

## 💈 Running API

To run the application, you only need to execute the command:

```docker
docker compose up --build
```

After this execution, the application should be running at the address:

```docker
http://localhost:8081
```

To consult the addresses and endpoints to be consulted and corrected, the application documentation is available at:

```docker
http://localhost:8081/api/v2/docs
```
<br>

## 🚀 Pull Requests

After carrying out the analysis and finding a problem, your solution must be saved in a separate branch called:

```docker
test/[Problem Number Found]
```

As an example, after having solved 2 problems and found a third, to resolve it we must create the third branch from the main branch with the name:

```docker
test/3
```

From this branch with the resolution, you are asked to create a pull request for the main branch.
And comment in the description:
1. the cause of the problem,
2. why the change was made that way
3. how it solves the problem encountered.

- these observations were passed in the comment fields of pull requests

After documenting the problem, you need to merge this pull request, inserting the changes into your project.