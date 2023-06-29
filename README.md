# SriBatch.js

### SriBatch.js is a JavaScript library that provides the ability to perform batch operations where clients can bundle multiple requests into a single call.
### This reduces the number of API calls required, optimizing network usage, and improving overall performance.

## Features

- Bundle multiple requests into a single batch request.
- Supports various HTTP methods like GET, POST, PUT, DELETE, etc.
- Allows inclusion of request payloads for applicable methods.
- Callback-based execution with error handling and individual response data.

## Installation

You can install SriBatch.js via npm:

```bash
npm install sribatch
```

Alternatively, you can include the library directly in your HTML file:

```html
<script src="sribatch.js"></script>
```

## Usage

First, create an instance of SriBatch:

```javascript
const batch = new SriBatch();
```

To add requests to the batch, use the `addRequest` method:

```javascript
batch.addRequest(method, url, data);
```

- `method`: The HTTP method for the request (e.g., `'GET'`, `'POST'`, `'PUT'`, `'DELETE'`, etc.).
- `url`: The URL of the API endpoint.
- `data` (optional): The payload data for requests that require it.

Here's an example of adding requests to the batch:

```javascript
batch.addRequest('GET', '/api/users');
batch.addRequest('POST', '/api/posts', { title: 'Hello', body: 'Batch request' });
```

Finally, execute the batch request using the `execute` method:

```javascript
batch.execute(callback);
```

- `callback`: A callback function that will be invoked when the batch request is complete. It takes two parameters: `error` and `responses`.
  - `error`: If an error occurs during the batch request, it will be passed to the callback function. Otherwise, it will be `null`.
  - `responses`: An array containing the individual response data for each request in the batch.

Here's an example of executing the batch request and handling the responses:

```javascript
batch.execute((error, responses) => {
  if (error) {
    console.error('Batch request failed:', error);
  } else {
    console.log('Batch request successful:', responses);
    // Process the individual response data here
  }
});
```

Make sure to replace the placeholder URLs (`'/api/users'`, `'/api/posts'`) with the actual API endpoints you want to call. Adjust the HTTP methods and request data accordingly based on your API's requirements.

## Full sample code
```javascript
// Create an instance of SriBatch
const batch = new SriBatch();

// Add requests to the batch
batch.addRequest('GET', '/api/users');
batch.addRequest('POST', '/api/posts', { title: 'Hello', body: 'Batch request' });
batch.addRequest('PUT', '/api/users/1', { name: 'John Doe' });

// Execute the batch request
batch.execute((error, responses) => {
  if (error) {
    console.error('Batch request failed:', error);
  } else {
    console.log('Batch request successful:', responses);
    // Process the individual response data here
  }
});
```

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

## License
SriBatch.js is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Credits
Contact Sankar Srinivasan by email petra.srini@gmail.com 

## Blog post
https://sankarsrinivasan.stck.me/post/99800/SriBatch-js-Optimize-API-Performance-with-Batch-Operations
