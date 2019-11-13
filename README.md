# UCLA-CS-130
----


## Setup instructions
Firstly, `pip install -r requirements.txt` also install postgres locally and create a database called `polly`

You can do this by running `psql postgres` in the terminal and then running `CREATE DATABASE polly;` at the prompt.

After this use alembic to create the schema by cd into `/src` and then running `alembic upgrade head` in the terminal.

After that you can run the app by going into `/src/server` and running `python server.py`

If it's all working you should be able to run

`curl localhost:5000/add`

N times and see N users when you run

`curl localhost:5000/users`

## Documentation Generation
Our backend API documentation is generated automatically using `flask_restplus`, a library extension of `Swagger`.
When you run the server via `python server.py`, a JSON file describing the API is generated in `/src/server/polly_api.json`.
Then I am using an open source software called `swagger2markup` to generate AsciiDocs from the swagger OpenAPI JSON files, which you can install [here](https://github.com/Swagger2Markup/swagger2markup-cli).
To generate up to date AsciiDocs, run `swagger2markup convert -i polly_api.json -d ./` in the `/src/serve` folder.
The generated AsciiDocs should be located in the same folder.
