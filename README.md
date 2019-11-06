# UCLA-CS-130
----


## Setup instructions
Firstly, `pip install -r requirements.txt` also install postgres locally and create a database called `polly`

You can do this by running `psql postgres` in the terminal and then running `CREATE DATABASE polly;` at the prompt. 

After this use alembic to create the schema by cd into `/src` and then running `alembic upgrade head` in the terminal.

After that you can run the app by going into `/src/server` and running `python server.py`

