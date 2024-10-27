# Metrics

## Instructions to run the project locally

#### 1. Pull repository

#### 2. Create your `.env` file in the `backend` folder

You can copy the contents from `.env.example`

#### 3. Build and run the docker containers

`docker-compose up`

#### 4. Make the initial database migrations to the running backend container

`docker exec -it metrics-backend-1 python manage.py migrate`

#### 5. Access the UI

Browse to http://localhost:3000

## How the app works

When you have the app running and have accessed the UI, you can add new metrics with the "Create new metrics" form, and these will be added to the "All metrics" list and to the line chart. Averages will be updated too. The metrics list shows the metrics from the selected month in descending order of date (most recent ones first), while the line chart shows the value of each type of metric in its corresponding day of the month.
When the application is first loaded, metrics will be shown for the current month. If you wanna visualize metrics from other months, you can change it with the select dropdown at the top left of the page.

## If you wanna access django admin

#### 1. Access the running backend container

`docker exec -it <your-container-name> bash`

#### 2. Once inside the container, create a superuser

Run `python manage.py createsuperuser` and follow the instructions

#### 3. Access django admin

Browse to http://localhost:8000/admin
