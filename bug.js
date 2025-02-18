```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Missing res.end() or similar to complete the response
  res.status(200).json({ name: 'John Doe' });
}
```