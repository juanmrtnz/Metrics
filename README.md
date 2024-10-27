# Metrics

## Instructions to run the project locally

#### 1. Pull repository

#### 2. Create your `.env` file in the `backend` folder

You can copy the contents from `.env.example`

#### 3. Build the docker image

`docker-compose --build`

#### 4. Run the docker containers

`docker-compose up`

#### 5. Make initial migrations and migrate to db

Access the running backend container: `docker exec -it <your-container-name> bash`

Create migrations: `python manage.py makemigrations`

Migrate to db: `python manage.py migrate`

#### 6. Access the UI

Browse to http://localhost:3000


## If you wanna access django admin

#### 1. Access the running backend container

`docker exec -it <your-container-name> bash`

#### 2. Once inside the container, create a superuser

Run `python manage.py createsuperuser` and follow the instructions

#### 3. Access django admin

Browse to http://localhost:8000/admin
