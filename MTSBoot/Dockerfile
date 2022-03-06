FROM openjdk:11
ARG JAR_FILE=/*.jar
COPY ${JAR_FILE} MTSBoot-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/MTSBoot-0.0.1-SNAPSHOT.jar"]