export default async function registerStudent(req, res) {
    const hook = process.env.API_URL
    try {
    const response = await fetch(hook, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body),
        method: 'POST'
        },
      )

      if (!response.ok) {
        return res.status(500).json({"message": "server failure"})
      } else {
        return res.status(200).json({"message": "success"})
      }
    } catch(error) {
      return res.status(200).json({"message": "network failure"})
    }
  }
  