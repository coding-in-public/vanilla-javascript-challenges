# Working with the Fetch API

> Here goes the short description of the challenge...

```javascript
const BASEURL = "https://dummyjson.com";
```

See API Documentation for help &rarr; https://dummyjson.com/docs/

---

**use the `/products` endpoint for (1 – 4)**

1. Create a fetch function called `customFetch` that hits the `"https://dummyjson.com/products"` endpoint and console logs and returns the data.
2. Update the `customFetch` function to take in a endpoint and handle errors (including a wrong endpoint).
3. Create a function called `getProducts` that returns all the products in an array. Then list all the products in the DOM in an unordered list.
4. Update the `customFetch` function to handle a delete, add, or update a request.
    - Use the updated function to update and then delete a product by it’s ID. (FYI, `"https://dummyjson.com/products/1"` will access the product with the id of 1).
    - Use the updated function to POST a new product to the list of products. (FYI, `"https://dummyjson.com/products/add"` will allow POST requests).

---

**use the `/users`, `/posts/`, and `/comments` endpoints for (5 – 7)**

5. Create a function called `getFilteredUsers` that console logs and returns all the users who are 21 years old in a new array of objects in the following structure:

```javascript
[
  {
    name: "John Doe", (containing first and last name)
    age: 21,
    email: "email@email.com",
  },
  ...
]
```

See help documentation for help at https://dummyjson.com/docs/users. You can use the `customFetch` function you created earlier.

6. Alter the `getFilteredUsers` function to return all filtered users in an object with the id as the key and the user object as the value. (See help documentation for help at https://dummyjson.com/docs/users)


7. Create a new function called `getCommentsOnUsersPosts` that takes in a user id and returns all comments on any post by that user in an array of objects. Each object should contain two properties, `postTitle` and `comments`. Comments should contain the `userID` of the commentor and the `text`. Bonus points for filtering out posts without comments. Sample below:

```javascript
[
  {
    postTitle: "Post Title",
    comments: [
      {
      userId: 1,
      text: "Comment Text"
      },
      {
      userId: 2,
      text: "Comment Again"
      }
    ]
  },
  ...
]
```

See https://dummyjson.com/docs/users, https://dummyjson.com/docs/posts, and https://dummyjson.com/docs/comments for help.
