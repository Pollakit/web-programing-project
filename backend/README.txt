1. Go to working directory (web-programing-project/backend/)
2. docker-compose up
database: http://localhost:8080/            pollakit.n.dev@gmail.com psd: secret
django admin: http://localhost:8000/admin   usr:admin psd:secret
if django admin cannot find account which means database is clean and nothing there go to following steps

3.open a new cmd and go to the working directory
4. docker-compose run web python manage.py createsuperuser
5. docker-compose run web python manage.py makemigrations forums
6. docker-compose run web python manage.py makemigrations positions
7. docker-compose run web python manage.py makemigrations posts
8. docker-compose run web python manage.py makemigrations users
9. docker-compose run web python manage.py migrate

That's it ez
