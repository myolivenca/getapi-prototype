# HOW TO

Run the project in a local server and open the /index.html

There are too ajax files to test localy. Type "api/response.json" or "api/response.xml" in the input text field and choose the correct format.


# FOR RUNNING TESTS

Navigate to /UnitTesting/Spec/Utils/Index.html to run the utils library Unit Tests for xmlToString method

Navigate to /UnitTest/Spec/DisplayApiResponse/Index.html to run the getRepo Unit Tests (Still working on make the ajax calls to pass)


# TBD

I would liked to investigate more how to run tests over a ajax call... to make it pass as it should. (even that the code works on the project)



# STRUCTURE

I tried to keep things seperated by "modules", so:

UnitTest folder splited by concepts. 
- A framework folder where jasmine source files stands on.
- Spec folder where Specs stands on.

Styles folder with scss files and css file
- each folder for each type of css elements

Scripts folder with all javascripts
- Vendor for external libs
- App for specific js files to the project

Images folder to host all images

Api to host the external ajax files like xml and json files