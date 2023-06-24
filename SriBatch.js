class SriBatch {
  constructor() {
    this.requests = [];
  }

  addRequest(method, url, data = null) {
    this.requests.push({
      method,
      url,
      data
    });
  }

  execute(callback) {
    if (this.requests.length === 0) {
      return; // No requests to execute
    }

    const batchRequest = this.createBatchRequest();

    // Make the batch request
    fetch('/batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(batchRequest)
    })
      .then(response => response.json())
      .then(responseData => {
        // Process the individual responses
        responseData.forEach((response, index) => {
          if (response.status === 200) {
            callback(null, response.data);
          } else {
            callback(new Error(`Request ${index} failed: ${response.error}`));
          }
        });
      })
      .catch(error => {
        callback(error);
      });
  }

  createBatchRequest() {
    return this.requests.map(request => {
      return {
        method: request.method,
        url: request.url,
        data: request.data
      };
    });
  }
}

// Usage example
const batch = new SriBatch();

// Add requests to the batch
batch.addRequest('GET', '/api/users');
batch.addRequest('POST', '/api/posts', { title: 'Hello', body: 'Batch request' });
batch.addRequest('PUT', '/api/users/1', { name: 'Sankar' });

// Execute the batch request
batch.execute((error, responses) => {
  if (error) {
    console.error('Batch request failed:', error);
  } else {
    console.log('Batch request successful:', responses);
  }
});
