# Next.js API Route Missing Response Completion

This repository demonstrates a common error in Next.js API routes: forgetting to end the response.  The provided `pages/api/hello.js` file shows an example of this issue.  The solution file demonstrates the fix.

## Bug

The `handler` function in `bug.js` correctly sets the status and JSON payload but fails to explicitly send the response using `res.end()` or similar.  This can cause unpredictable behavior for the client, often manifesting as hang-ups or incomplete responses.

## Solution

The `bugSolution.js` file provides a correction.  The key change is adding `res.end()` after `res.status(200).json(...)`. This ensures that the server completes the response cycle correctly.
