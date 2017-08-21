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