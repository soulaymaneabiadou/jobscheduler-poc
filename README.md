### About

job scheduler poc using typescript, express and redis under bull.

### Notes

- this assumes there is a redis instance running at localhost with its default port.

- You can find a PDF file in the resources directory

### Steps

- Copy the `.env.example` file into a `.env` file
- Run `npm i`
- Run `npm run dev`

the server is running at `localhost:5000` and might take a POST request at `localhost:5000/jobs` with data such:

```json
{
  "data": {
    "name": "John Doe"
  },
  "priority": "MEDIUM",
  "repeatable": true,
  "cron": "*/5 * * * * *",
  "jobId": "test-job-123"
}
```

The request signature is as follows:

```json
{
  "data": {
    "name": "string"
  },
  "priority": "URGENT, HIGH, MEDIUM, LOW",
  "repeatable": "boolean",
  "cron": "cron-formatted-string",
  "jobId": "random-string-if-needed"
}
```

this is a cron(repeatable) example that executes every 5 seconds and print a message to the stdout(using console.log) as a simulation to some task that needs to be done
