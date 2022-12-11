import http from "k6/http";
import { check, sleep } from "k6";

// The URL of the API to test
const API_URL = "http://localhost:3000/reviews/71690";

// The number of virtual users to simulate
const VIRTUAL_USERS = 100;

// The amount of time to wait between each request (in seconds)
const REQUEST_INTERVAL = 1;

// The number of requests to make per second
const REQUESTS_PER_SECOND = [1000];

// This function is run once for each virtual user
export default function() {
  // Send requests to the API in a loop
  for (let rps of REQUESTS_PER_SECOND) {
    // Send a GET request to the API
    let res = http.get(API_URL);

    // Check that the response has a 200 OK status
    check(res, {
      "status is 201": (r) => r.status === 201
    });

    // Wait for the specified amount of time before sending the next request
    sleep(REQUEST_INTERVAL / rps);
  }
}