# Xiaomi Router Reboot Automation

This project contains a Node.js script utilizing Playwright to automate the process of restarting a router. The script is packaged in a Docker container which can be scheduled to run on a daily basis.

## Getting Started

### Prerequisites

- Docker installed.

### Set up

1. Clone the repository:

```bash
git clone https://github.com/sabbaken/xiaomi-router-reboot-automation.git
```

2. Navigate to the project directory:

```bash
cd xiaomi-router-reboot-automation
```

3. Create .env file with your admin password:

```bash
echo "ROUTER_ADMIN_PASSWORD=1234" > .env
```

4. Build image

```bash
docker build -t router-reboot-automation .
```

5. Open the crontab file for editing with the following command:

```bash
crontab -e
```

6. Add the following line to run the container every day at 5 AM

```bash
0 5 * * * docker run --rm -it --network host router-reboot-automation
```

7. Save and close the crontab file to activate the new cron job
