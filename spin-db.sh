docker container stop remix_boilerplate 
docker container rm remix_boilerplate

docker run --name remix_boilerplate -e POSTGRES_USER=remix_boilerplate -e POSTGRES_PASSWORD=remix_boilerplate -e POSTGRES_DB=remix_boilerplate -p 5432:5432 -d postgres
