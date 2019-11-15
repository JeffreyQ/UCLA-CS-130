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
### Online Documentation
Our backend API documentation is generated automatically using `flask_restplus`, a library extension of `Swagger`.

While the Python server is running, visit `http://localhost:5000/` in a browser to check out nice looking interactive API documentation, and also try out the endpoints with test requests.

### Offline Documentation
Every time you run the server via `python server.py`, an updated JSON file describing the API is generated in `/src/server/polly_api.json`.

Then I am using an open source software called `swagger2markup` to generate AsciiDocs from the swagger OpenAPI JSON files, which you can install [here](https://github.com/Swagger2Markup/swagger2markup-cli).

To generate up-to-date AsciiDoc, run `swagger2markup convert -i polly_api.json -f ./polly_api_documentation`

The generated AsciiDoc should be located in the same folder [here] (https://github.com/JeffreyQ/UCLA-CS-130/blob/master/src/server/polly_api_documentation.adoc.)


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
