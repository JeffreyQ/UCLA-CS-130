# Polly

## Setup instructions
Our Flask backend and postgres database are containerized using Docker.

To begin, make sure you have [Docker Desktop](https://docs.docker.com/v17.09/docker-for-mac/install/) installed.

Once you have Docker running, use the following commands from the `backend` project directory to setup and run the application:

* `make build`
    * Builds both docker images
* `make run`
    * Runs the Flask and postgres containers
* `make setup`
    * Runs the alembic db upgrade command. Run this whenever you generate a migration

To stop the docker-compose process, press `Ctrl-C`

Live-reloading of the flask code is enabled, meaning you will be able to edit Python source code and see changes take effect immediately.

Postgres data is persisted to a volume on disk. This means that if you stop the docker-compose process, any data written to the postgres instance will be saved and available the next time you run `make run`. If you want to delete the volume completely, run `make clean`

If it's all working you should be able to run

`curl localhost:5000/add`

N times and see N users when you run

`curl localhost:5000/users`

## Development
We are following the outline specified in this [article](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#database-models-and-migration) to organize our Flask app.

### Generating a migration
If you make any update to the models (any of the classes in app/main/models/*), you must generate a migration.

You can do so by running `make migrate message="<your message>"`


## Documentation Generation
### Online Documentation
Our backend API documentation is generated automatically using `flask_restplus`, a library extension of `Swagger`.

While the Python server is running, visit `http://localhost:5000/` in a browser to check out nice looking interactive API documentation, and also try out the endpoints with test requests.

### Offline Documentation
Every time you run the server via `python server.py`, an updated JSON file describing the API is generated in `/src/server/polly_api.json`.

Then I am using an open source software called `swagger2markup` to generate AsciiDocs from the swagger OpenAPI JSON files, which you can install [here](https://github.com/Swagger2Markup/swagger2markup-cli).

To generate up-to-date AsciiDoc, run `swagger2markup convert -i polly_api.json -f ./polly_api_documentation`

The generated AsciiDoc should be located in the same folder [here](https://github.com/JeffreyQ/UCLA-CS-130/blob/master/backend/src/server/polly_api_documentation.adoc)


## React-Native Setup
To run the react-native mobile app we are following the instructions [here](https://facebook.github.io/react-native/docs/getting-started).

Be sure to follow the React-Native CLI Quickstart flow of the guide.

You will need Watchman, Node, and XCode installed.
```
brew install node
brew install watchman
```

XCode is most easily installed through the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

The iOS Package Manager CocoaPods is also necessary.
```
sudo gem install cocoapods
```

Assuming that you have the iOS simulator installed, all it takes to run Polly is
```
cd Polly
react-native run-ios
```
