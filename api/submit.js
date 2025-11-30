// File: api/submit.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // We send the data to Make from here (Server-side)
      const response = await fetch('https://hook.us2.make.com/wfr5ic7hxszq1un5hfrkzofj61q1seir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Success' });
      } else {
        res.status(500).json({ message: 'Make.com Error' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
