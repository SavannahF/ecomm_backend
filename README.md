# ORM E-Commerce Back End

## Description

This is a command line application that runs with MySQL and Sequelize to build the back end for and e-commerce business. The app is then able to GET, POST, PUT and DELETE user input in Postman.

## Table of Contents

-   [Installation](#installation)

-   [Technology](#technology)

-   [Testing](#testing)

-   [License](#license)

## Installation

_Steps required to install this project and to get the development environment running:_

1. After downloading or cloning the repository, run the command below in the terminal to install necessary dependencies:

```bash
npm i
```

2. Use the CLI to start the local MySQL server:

```bash
$ mysql -u root -p
```

3. Run the schema.sql file in the CLI (replacing ... with the full path name):

```bash
mysql> source .../ecomm_backend/db/schema.sql
```

## Technology

-   Node.js
-   Express.js
-   [MySQL2](https://www.npmjs.com/package/mysql2)
-   [Sequelize](https://www.npmjs.com/package/sequelize)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [Postman](https://www.postman.com/)

## Testing

The following video shows how the application is being tested in Postman:

1. After creating the schema from MySQL shell (see #installation), seed the database from the terminal, while navigated to the repo folder, by running:

```bash
npm run seed
```

2. Start the local server:

```bash
node server.js
```

3. Open POSTMAN for the localhost port that is running the server.
4. Use the GET, POST, PUT, and DELETE methods for the /api/products, /api/categories, and /api/tags server routes.
5. Please refer to the walkthrough video for examples!

[ecomm_backend Walkthrough Video](https://youtu.be/Bymx00mExXo)

### Database Models

-   `Category`

    -   `id`

        -   Integer.

        -   Doesn't allow null values.

        -   Set as primary key.

        -   Uses auto increment.

    -   `category_name`

        -   String.

        -   Doesn't allow null values.

-   `Product`

    -   `id`

        -   Integer.

        -   Doesn't allow null values.

        -   Set as primary key.

        -   Uses auto increment.

    -   `product_name`

        -   String.

        -   Doesn't allow null values.

    -   `price`

        -   Decimal.

        -   Doesn't allow null values.

        -   Validates that the value is a decimal.

    -   `stock`

        -   Integer.

        -   Doesn't allow null values.

        -   Set a default value of `10`.

        -   Validates that the value is numeric.

    -   `category_id`

        -   Integer.

        -   References the `Category` model's `id`.

-   `Tag`

    -   `id`

        -   Integer.

        -   Doesn't allow null values.

        -   Set as primary key.

        -   Uses auto increment.

    -   `tag_name`

        -   String.

-   `ProductTag`

    -   `id`

        -   Integer.

        -   Doesn't allow null values.

        -   Set as primary key.

        -   Uses auto increment.

    -   `product_id`

        -   Integer.

        -   References the `Product` model's `id`.

    -   `tag_id`

        -   Integer.

        -   References the `Tag` model's `id`.

## License

MIT

Copyright (c) [2021] [Savannah Fortson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
