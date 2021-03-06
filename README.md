# Polly

## Setup instructions
Our Flask backend and postgres database are containerized using Docker.

To begin, make sure you have [Docker Desktop](https://docs.docker.com/v17.09/docker-for-mac/install/) installed.

Once you have Docker running, use the following commands from the `backend` project directory to setup and run the application:

* `make build`
    * Builds both docker images
* `make run`
    * Runs the Flask and postgres containers
* `make upgrade`
    * Runs the alembic db upgrade command. Run this whenever you generate a migration

To stop the docker-compose process, press `Ctrl-C`

Live-reloading of the flask code is enabled, meaning you will be able to edit Python source code and see changes take effect immediately.

Postgres data is persisted to a volume on disk. This means that if you stop the docker-compose process, any data written to the postgres instance will be saved and available the next time you run `make run`. If you want to delete the volume completely, run `make clean`

## Development
We are following the outline specified in this [article](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#database-models-and-migration) to organize our Flask app.

### Generating a migration
If you make any update to the models (any of the classes in app/main/models/*), you must generate a migration.

You can do so by running `make migrate message="<your message>"`

## Testing
Tests are written in the app/test/ folder. Test modules should be named in the form `test_<file>.py` for example `app/test/models/test_user.py`.

To run the test suite, run `make test`. This runs a test postgres instance, creating and destroying the db instance on every run.

Our test suite coverage can be seen [here](http://ec2-54-225-3-241.compute-1.amazonaws.com:8000/). (This may be out of date)

## Documentation Generation
### Online Documentation
Our backend API documentation is generated automatically using `flask_restplus`, a library extension of `Swagger`.

While the Python server is running, visit `http://localhost:5000/` in a browser to check out nice looking interactive API documentation, and also try out the endpoints with test requests.

### Offline Documentation
To generate an offline documentation for the API, simply call `make doc` inside the `backend` directory while the Docker server instance is running.

This requires the installation of open source software called `swagger2markup` to generate AsciiDocs from the swagger OpenAPI JSON files, which you can install [here](https://github.com/Swagger2Markup/swagger2markup-cli).

Otherwise, the command will throw an error, but will at least generate a new polly_api.json file that describes the new interfaces.

The generated AsciiDoc should be located at `backend/polly_api_documentation.adoc` [here](https://github.com/JeffreyQ/UCLA-CS-130/blob/master/backend/polly_api_documentation.adoc)

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
