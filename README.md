# spring-boot-08
An exercise to learn flyway.

[Database Versioning with Flyway and Java](https://auth0.com/blog/incrementally-changing-your-database-with-java-and-flyway/)

## 1. Setup spring boot app.
```bash
$ spring init -d=web,data-jpa,h2,flyway,lombok spring-boot-08
$ cd src/main/resources/
$ mkdir db
$ mkdir db/migration
```

## 2. Run it:
```bash
$ mvn clean package
$ mvn spring-boot:run
```

Open it on the browser [http://localhost:8080](http://localhost:8080)
Open the [H2 Console](http://localhost:8080/h2-console). The DB is `jdbc:h2:mem:testdb`.

## 3. Endpoints:
[http://localhost:8080/customers](http://localhost:8080/customers)
[http://localhost:8080/customers/1/contacts](http://localhost:8080/customers/1/contacts)
