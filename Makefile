run-database:
	docker start database

run-database-image:
	docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres