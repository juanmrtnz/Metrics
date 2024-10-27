# metrics

## Instructions to run the project locally


#### 1. Pull repository

#### 2. Create your `.env` file in the `backend` folder

You can copy the contents from `.env.example`

#### 3. Build the docker image

`docker-compose --build`

#### 4. Run the docker containers

`docker-compose up`

#### 5. Access the UI

Browse to http://localhost:3000

#### If you wanna use django admin

Access the running backend container: `docker exec -it base-django-react-backend-1 bash`

Create a superuser: `python manage.sh createsuperuser`

Access django admin: browse to http://localhost:3000/admin
