# Student Management API

This project is a Node.js Student Management API. Below are steps to build and run it using Docker and Docker Compose.

**Prerequisites**
- Docker (Docker Desktop or Docker Engine) installed and running

**Start the project**
1. Open a terminal in the project root (where `docker-compose.yaml` is located).
2. Build and start services:

```bash
docker compose up --build
```

3. To run in detached mode (background):

```bash
docker compose up -d --build
```

4. To view logs:

```bash
docker compose logs -f
```

5. To stop and remove containers:

```bash
docker compose down
```


**Ports & Environment**
- The project exposes ports as defined in `docker-compose.yaml`. Adjust environment variables in your compose file or add an `.env` file if needed.

**Troubleshooting**
- If you get permission or network errors, ensure Docker Desktop is running and you have the required permissions.
- If a service fails to start, check its logs with `docker compose logs <service-name>`.

If you'd like, I can also add an example `.env` file or a section that documents the exposed ports and service names from `docker-compose.yaml`.
# studentCrud
