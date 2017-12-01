Brew installations steps for mac:
https://treehouse.github.io/installation-guides/mac/mongo-mac.html
brew update
brew install mongodb
brew services start mongodb
mongo

mongoshell> show dbs
mongoshell> use osuapp
mongoshell> show collections
mongoshell> db.tutor.find()


---- Now simply paste the datamodel file's content in terminal and enter. This will insert all the documents 
--- document schema is given in document file 