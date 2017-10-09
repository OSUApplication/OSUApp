# OSUApp

Build System  : Gradle  
Web FrameWork : Spring Boot  

Json Format for database updated:
```json
db.tutor.insert (
   {
      "name" : "Vella",
      "department" : "cs",
      "email" : "vellaa@oregonstate.edu",
      "studentAs" : "true", 
      "tutorAs" : "true",
      "course_seeking" : [ "CS540 DBMS" ],
      "course_offering" : ["CS519 Algorithm", "CS 515 Algoritm"]
   }
)
```

# Run Development server

### Backend

```

gradle  bootRun

```

### Frontend

```

ng serve or npm start

```
