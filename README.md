# E-commerce Back End Starter Code
Object-Relational Mapping (ORM) Challenge: E-commerce Back End

## Description

This application takes a working Express.js API and configures it to use Sequelize to interact with a MySQL database. 

This application allows for a fundamental understanding of the architectire of e-commerce sites, the largest sector of the elctronics industry.

### User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Features](#Features)
- [License](#license)

## Installation

Add a .env file to the root of the app with the following details, replacing 'password' with your personal MySQL password.

```
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='password'
```

The application can be invoked through the command line using the following command:

```
node server.js
```

## Usage

The following link demonstrates the functionality of the application through the command line:
[Walkthrough Video](https://drive.google.com/file/d/12kcyxevgbDt-NTQhffUkbPiq71Xtz4Ks/view?usp=share_link)

## Tests

The following link demonstrates testing done using Insomnia Core:
[Insomnia Core Testing Video](https://drive.google.com/file/d/1--rfHXhiyZjRQf9y9jlQ7DF7_Dkrc8P5/view?usp=share_link)

## Features

1. JavaScript
2. Node.js
3. MySQL
4. Dotenv
5. Express.js
6. Sequelize

## License

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.