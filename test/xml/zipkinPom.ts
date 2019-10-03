/*
 * Copyright © 2019 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const ZipkinPom = `<?xml version="1.0" encoding="UTF-8"?>
<!--

    Copyright 2015-2019 The OpenZipkin Authors

    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
    in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software distributed under the License
    is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
    or implied. See the License for the specific language governing permissions and limitations under
    the License.

-->
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.zipkin</groupId>
  <artifactId>zipkin-parent</artifactId>
  <version>2.16.2-SNAPSHOT</version>
  <packaging>pom</packaging>

  <modules>
    <module>zipkin</module>
    <module>zipkin-tests</module>
    <module>zipkin-lens</module>
    <module>zipkin-junit</module>
    <module>benchmarks</module>
    <module>zipkin-storage</module>
    <module>zipkin-collector</module>
    <module>zipkin-server</module>
  </modules>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.build.resourceEncoding>UTF-8</project.build.resourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

    <!-- default bytecode version for src/main -->
    <main.java.version>1.7</main.java.version>
    <main.signature.artifact>java17</main.signature.artifact>

    <!-- override to set exclusions per-project -->
    <errorprone.args />
    <errorprone.version>2.3.3</errorprone.version>

    <main.basedir>x</main.basedir>

    <!-- This allows you to test feature branches with jitpack -->
    <armeria.groupId>com.linecorp.armeria</armeria.groupId>
    <armeria.version>0.90.3</armeria.version>
    <!-- This should only be used in tests, and be careful to avoid >= v20 apis -->
    <guava.version>28.0-jre</guava.version>

    <!-- only used for proto interop testing -->
    <wire.version>3.0.0-alpha01</wire.version>
    <unpack-proto.directory>x/test/proto</unpack-proto.directory>

    <brave.version>5.6.11</brave.version>
    <cassandra-driver-core.version>3.7.2</cassandra-driver-core.version>
    <okhttp.version>3.14.2</okhttp.version>
    <jooq.version>3.11.12</jooq.version>
    <micrometer.version>1.2.0</micrometer.version>
    <spring-boot.version>2.1.7.RELEASE</spring-boot.version>
    <!-- MySQL connector is GPL, even if it has an OSS exception.
         https://www.mysql.com/about/legal/licensing/foss-exception/

         MariaDB has a friendlier license, LGPL, which is less scary in audits.
    -->
    <mariadb-java-client.version>2.4.3</mariadb-java-client.version>
    <!-- Java 8 dep, which is ok as zipkin-mysql is Java 8 anyway -->
    <HikariCP.version>3.3.1</HikariCP.version>
    <log4j.version>2.12.1</log4j.version>

    <junit.version>4.12</junit.version>
    <junit.jupiter.version>5.5.1</junit.jupiter.version>
    <powermock.version>2.0.2</powermock.version>
    <!-- Up to v2.27.0 of mockito has a conflict https://github.com/mockito/mockito/issues/1606
    java.lang.NoSuchMethodError: net.bytebuddy.dynamic.loading.MultipleParentClassLoader$Builder.appendMostSpecific(Ljava/util/Collection;)Lnet/bytebuddy/dynamic/loading/MultipleParentClassLoader$Builder
    -->
    <mockito.version>2.23.4</mockito.version>
    <assertj.version>3.13.1</assertj.version>
    <awaitility.version>3.1.6</awaitility.version>
    <hamcrest.version>1.3</hamcrest.version>
    <testcontainers.version>1.12.0</testcontainers.version>

    <auto-value.version>1.6.5</auto-value.version>
    <animal-sniffer-maven-plugin.version>1.18</animal-sniffer-maven-plugin.version>
    <maven-compiler-plugin.version>3.8.1</maven-compiler-plugin.version>
    <maven-deploy-plugin.version>3.0.0-M1</maven-deploy-plugin.version>
    <maven-install-plugin.version>3.0.0-M1</maven-install-plugin.version>
    <maven-release-plugin.version>2.5.3</maven-release-plugin.version>
    <maven-source-plugin.version>3.1.0</maven-source-plugin.version>
    <maven-javadoc-plugin.version>3.1.1</maven-javadoc-plugin.version>
    <license-maven-plugin.version>3.0</license-maven-plugin.version>
    <maven-jar-plugin.version>3.1.2</maven-jar-plugin.version>
    <maven-shade-plugin.version>3.2.1</maven-shade-plugin.version>
    <maven-failsafe-plugin.version>3.0.0-M3</maven-failsafe-plugin.version>
    <maven-enforcer-plugin.version>3.0.0-M2</maven-enforcer-plugin.version>
    <git-commit-id.version>3.0.0</git-commit-id.version>
  </properties>

  <name>Zipkin (Parent)</name>
  <description>Zipkin (Parent)</description>
  <url>https://github.com/openzipkin/zipkin</url>
  <inceptionYear>2015</inceptionYear>

  <organization>
    <name>OpenZipkin</name>
    <url>http://zipkin.io/</url>
  </organization>

  <licenses>
    <license>
      <name>The Apache Software License, Version 2.0</name>
      <url>http://www.apache.org/licenses/LICENSE-2.0.txt</url>
      <distribution>repo</distribution>
    </license>
  </licenses>

  <scm>
    <url>https://github.com/openzipkin/zipkin</url>
    <connection>scm:git:https://github.com/openzipkin/zipkin.git</connection>
    <developerConnection>scm:git:https://github.com/openzipkin/zipkin.git</developerConnection>
    <tag>HEAD</tag>
  </scm>

  <!-- Developer section is needed for Maven Central, but doesn't need to include each person -->
  <developers>
    <developer>
      <id>openzipkin</id>
      <name>OpenZipkin Gitter</name>
      <url>https://gitter.im/openzipkin/zipkin</url>
    </developer>
  </developers>

  <distributionManagement>
    <repository>
      <id>bintray</id>
      <url>https://api.bintray.com/maven/openzipkin/maven/zipkin/;publish=1</url>
    </repository>
    <snapshotRepository>
      <id>jfrog-snapshots</id>
      <url>https://oss.jfrog.org/artifactory/oss-snapshot-local</url>
    </snapshotRepository>
  </distributionManagement>

  <issueManagement>
    <system>Github</system>
    <url>https://github.com/openzipkin/zipkin/issues</url>
  </issueManagement>
  <dependencyManagement>
    <!-- TODO: remove override on next spring-boot version -->
    <dependencies>
      <dependency>
        <groupId>com.fasterxml.jackson</groupId>
        <artifactId>jackson-bom</artifactId>
        <version>2.9.9.20190807</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>javax.annotation</groupId>
        <artifactId>javax.annotation-api</artifactId>
        <version>1.3.1</version>
      </dependency>

      <dependency>
        <groupId>org.jooq</groupId>
        <artifactId>jooq</artifactId>
        <version>x</version>
      </dependency>

      <dependency>
        <groupId>armeria.groupId</groupId>
        <artifactId>armeria-spring-boot-autoconfigure</artifactId>
        <version>armeria.version</version>
        <exclusions>
          <exclusion>
            <groupId>armeria.groupId</groupId>
            <artifactId>armeria-logback</artifactId>
          </exclusion>
          <exclusion>
            <groupId>javax.validation</groupId>
            <artifactId>validation-api</artifactId>
          </exclusion>
        </exclusions>
      </dependency>

      <dependency>
        <groupId>{armeria.groupId}</groupId>
        <artifactId>armeria-tomcat</artifactId>
        <version>{armeria.version}</version>
      </dependency>

      <!-- Makes sure spring doesn't eagerly bind tomcat or slf4j -->
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>{spring-boot.version}</version>
        <exclusions>
          <exclusion>
            <groupId>org.hibernate.validator</groupId>
            <artifactId>*</artifactId>
          </exclusion>
          <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
          </exclusion>
          <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
          </exclusion>
        </exclusions>
      </dependency>
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
        <version>{spring-boot.version}</version>
        <exclusions>
          <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
          </exclusion>
        </exclusions>
      </dependency>
      <!-- End spring-boot-dependencies overrides -->

      <dependency>
        <groupId>com.squareup.okhttp3</groupId>
        <artifactId>okhttp</artifactId>
        <version>{okhttp.version}</version>
      </dependency>

      <dependency>
        <groupId>com.squareup.okhttp3</groupId>
        <artifactId>mockwebserver</artifactId>
        <version>{okhttp.version}</version>
      </dependency>

      <dependency>
        <groupId>com.google.auto.value</groupId>
        <artifactId>auto-value-annotations</artifactId>
        <version>{auto-value.version}</version>
      </dependency>
      <dependency>
        <groupId>com.google.auto.value</groupId>
        <artifactId>auto-value</artifactId>
        <version>{auto-value.version}</version>
      </dependency>

      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-api</artifactId>
        <version>{log4j.version}</version>
      </dependency>
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-core</artifactId>
        <version>{log4j.version}</version>
      </dependency>
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-jul</artifactId>
        <version>{log4j.version}</version>
      </dependency>
      <!-- used by our non-spring boot tests who have a slf4j dependency -->
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-slf4j-impl</artifactId>
        <version>{log4j.version}</version>
      </dependency>
      <!-- used by zipkin-server and zipkin-autoconfigure due to Spring Boot using slf4j -->
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-to-slf4j</artifactId>
        <version>{log4j.version}</version>
      </dependency>
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-1.2-api</artifactId>
        <version>{log4j.version}</version>
      </dependency>

      <!-- for testing flink -->
      <dependency>
        <groupId>com.esotericsoftware.kryo</groupId>
        <artifactId>kryo</artifactId>
        <version>2.24.0</version>
      </dependency>

      <!-- Internal classes used in SpanBytesDecoder.JSON_V[12] -->
      <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.8.5</version>
      </dependency>

      <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>{junit.version}</version>
      </dependency>

      <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>{junit.jupiter.version}</version>
      </dependency>

      <dependency>
        <groupId>org.junit.vintage</groupId>
        <artifactId>junit-vintage-engine</artifactId>
        <version>{junit.jupiter.version}</version>
      </dependency>

      <!--
      Current versions of JUnit5 provide the above junit-jupiter artifact for convenience but we may
      still have transitive dependencies on these older artifacts and have to make sure they're all
      using the same version.
      -->
      <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <version>{junit.jupiter.version}</version>
      </dependency>

      <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>{junit.jupiter.version}</version>
      </dependency>

      <dependency>
        <groupId>org.assertj</groupId>
        <artifactId>assertj-core</artifactId>
        <version>{assertj.version}</version>
      </dependency>

      <dependency>
        <groupId>org.awaitility</groupId>
        <artifactId>awaitility</artifactId>
        <version>{awaitility.version}</version>
      </dependency>

      <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-core</artifactId>
        <version>{mockito.version}</version>
      </dependency>

      <dependency>
        <groupId>org.testcontainers</groupId>
        <artifactId>testcontainers</artifactId>
        <version>{testcontainers.version}</version>
      </dependency>

      <dependency>
        <groupId>org.testcontainers</groupId>
        <artifactId>mysql</artifactId>
        <version>{testcontainers.version}</version>
      </dependency>

      <dependency>
        <groupId>org.mariadb.jdbc</groupId>
        <artifactId>mariadb-java-client</artifactId>
        <version>{mariadb-java-client.version}</version>
      </dependency>

      <dependency>
        <groupId>com.zaxxer</groupId>
        <artifactId>HikariCP</artifactId>
        <version>{HikariCP.version}</version>
      </dependency>

      <!-- Don't bring in brave's transitive dep on zipkin -->
      <dependency>
        <groupId>io.zipkin.brave</groupId>
        <artifactId>brave</artifactId>
        <version>{brave.version}</version>
        <exclusions>
          <exclusion>
            <groupId>io.zipkin.zipkin2</groupId>
            <artifactId>zipkin</artifactId>
          </exclusion>
        </exclusions>
      </dependency>

      <dependency>
        <groupId>io.zipkin.proto3</groupId>
        <artifactId>zipkin-proto3</artifactId>
        <version>0.2.1</version>
      </dependency>
      <dependency>
        <groupId>com.squareup.wire</groupId>
        <artifactId>wire-runtime</artifactId>
        <version>{wire.version}</version>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>org.assertj</groupId>
      <artifactId>assertj-core</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <pluginManagement>
      <plugins>
        <!-- mvn -N io.takari:maven:wrapper generates the ./mvnw script -->
        <plugin>
          <groupId>io.takari</groupId>
          <artifactId>maven</artifactId>
          <version>0.7.6</version>
          <configuration>
            <maven>3.6.1</maven>
          </configuration>
        </plugin>

        <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>{maven-compiler-plugin.version}</version>
          <inherited>true</inherited>
          <configuration>
            <!-- Retrolambda will rewrite lambdas as Java 6 bytecode -->
            <source>1.8</source>
            <target>1.8</target>
            <!-- or die! com.sun.tools.javac.api.JavacTool -->
            <fork>true</fork>
            <showWarnings>true</showWarnings>
          </configuration>
        </plugin>

        <plugin>
          <artifactId>maven-javadoc-plugin</artifactId>
          <version>{maven-javadoc-plugin.version}</version>
          <configuration>
            <failOnError>false</failOnError>
            <excludePackageNames>zipkin2.internal,zipkin2.internal.*</excludePackageNames>
            <!-- hush pedantic warnings: we don't put param and return on everything! -->
            <doclint>none</doclint>
          </configuration>
        </plugin>

        <plugin>
          <artifactId>maven-jar-plugin</artifactId>
          <version>{maven-jar-plugin.version}</version>
          <configuration>
            <archive>
              <!-- prevents huge pom file from also being added to the jar under META-INF/maven -->
              <addMavenDescriptor>false</addMavenDescriptor>
            </archive>
          </configuration>
        </plugin>

        <plugin>
          <artifactId>maven-shade-plugin</artifactId>
          <version>{maven-shade-plugin.version}</version>
        </plugin>

        <!-- Need to block import of shaded packages in bnd.bnd as maven bundle plugin analyzes the unshaded jar -->
        <plugin>
          <groupId>org.apache.felix</groupId>
          <artifactId>maven-bundle-plugin</artifactId>
          <version>4.2.0</version>
          <configuration>
            <obrRepository>NONE</obrRepository>
            <instructions>
              <Bundle-SymbolicName>{project.groupId}.{project.artifactId}</Bundle-SymbolicName>
            </instructions>
          </configuration>
          <executions>
            <execution>
              <phase>process-classes</phase>
              <goals>
                <goal>manifest</goal>
              </goals>
            </execution>
          </executions>
        </plugin>

        <plugin>
          <groupId>org.eclipse.m2e</groupId>
          <artifactId>lifecycle-mapping</artifactId>
          <version>1.0.0</version>
          <configuration>
            <lifecycleMappingMetadata>
              <pluginExecutions>
                <pluginExecution>
                  <pluginExecutionFilter>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <versionRange>[3.7,)</versionRange>
                    <goals>
                      <goal>compile</goal>
                      <goal>testCompile</goal>
                    </goals>
                  </pluginExecutionFilter>
                  <action>
                    <configurator>
                      <id>org.eclipse.m2e.jdt.javaConfigurator</id>
                    </configurator>
                  </action>
                </pluginExecution>
              </pluginExecutions>
            </lifecycleMappingMetadata>
          </configuration>
        </plugin>

        <!-- The below plugins compile protobuf stubs in the indicated source tree -->
        <plugin>
          <artifactId>maven-dependency-plugin</artifactId>
          <executions>
            <!-- wire-maven-plugin cannot get proto definitions from dependencies: this will -->
            <execution>
              <id>unpack-proto</id>
              <phase>generate-sources</phase>
              <goals>
                <goal>unpack-dependencies</goal>
              </goals>
              <configuration>
                <includeArtifactIds>zipkin-proto3</includeArtifactIds>
                <includes>**/*.proto</includes>
                <outputDirectory>{unpack-proto.directory}</outputDirectory>
              </configuration>
            </execution>
          </executions>
        </plugin>
        <plugin>
          <groupId>com.squareup.wire</groupId>
          <artifactId>wire-maven-plugin</artifactId>
          <version>{wire.version}</version>
          <executions>
            <execution>
              <phase>generate-sources</phase>
              <goals>
                <goal>generate-sources</goal>
              </goals>
              <configuration>
                <protoSourceDirectory>{unpack-proto.directory}</protoSourceDirectory>
                <includes>
                  <include>zipkin.proto3.*</include>
                </includes>
              </configuration>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </pluginManagement>

    <plugins>
      <!-- Top-level to ensure our server can use JDK 1.8
             (by checking we don't accidentally use later apis) -->
      <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>animal-sniffer-maven-plugin</artifactId>
        <version>{animal-sniffer-maven-plugin.version}</version>
        <configuration>
          <signature>
            <groupId>org.codehaus.mojo.signature</groupId>
            <artifactId>{main.signature.artifact}</artifactId>
            <version>1.0</version>
          </signature>
        </configuration>
        <executions>
          <execution>
            <goals>
              <goal>check</goal>
            </goals>
          </execution>
        </executions>
      </plugin>

      <plugin>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>{maven-failsafe-plugin.version}</version>
      </plugin>

      <plugin>
        <artifactId>maven-failsafe-plugin</artifactId>
        <version>{maven-failsafe-plugin.version}</version>
        <executions>
          <execution>
            <id>integration-test</id>
            <goals>
              <goal>integration-test</goal>
            </goals>
          </execution>
          <execution>
            <id>verify</id>
            <goals>
              <goal>verify</goal>
            </goals>
          </execution>
        </executions>
      </plugin>

      <plugin>
        <artifactId>maven-install-plugin</artifactId>
        <version>{maven-install-plugin.version}</version>
      </plugin>

      <!-- Uploads occur as a last step (which also adds checksums) -->
      <plugin>
        <artifactId>maven-deploy-plugin</artifactId>
        <version>{maven-deploy-plugin.version}</version>
      </plugin>

      <plugin>
        <groupId>com.mycila</groupId>
        <artifactId>license-maven-plugin</artifactId>
        <version>{license-maven-plugin.version}</version>
        <configuration>
          <!-- session.executionRootDirectory resolves properly even with nested modules -->
          <header>{main.basedir}/src/etc/header.txt</header>
          <mapping>
            <!-- Don't use javadoc style as this makes code formatters break it by adding tags! -->
            <java>SLASHSTAR_STYLE</java>
            <kt>SLASHSTAR_STYLE</kt>
            <jsx>SLASHSTAR_STYLE</jsx>
            <bnd>SCRIPT_STYLE</bnd>
            <ejs>XML_STYLE</ejs>
            <scss>DOUBLESLASH_STYLE</scss>
          </mapping>
          <excludes>
            <exclude>.travis.yml</exclude>
            <exclude>.editorconfig</exclude>
            <exclude>.gitattributes</exclude>
            <exclude>.gitignore</exclude>
            <exclude>.mvn/**</exclude>
            <exclude>mvnw*</exclude>
            <exclude>etc/header.txt</exclude>
            <exclude>**/.idea/**</exclude>
            <exclude>**/node_modules/**</exclude>
            <exclude>**/.babelrc</exclude>
            <exclude>**/.bowerrc</exclude>
            <exclude>**/.editorconfig</exclude>
            <exclude>**/.eslintrc</exclude>
            <exclude>**/.eslintrc</exclude>
            <exclude>**/.eslintrc.js</exclude>
            <exclude>**/testdata/**/*.json</exclude>
            <exclude>**/test/data/**/*.json</exclude>
            <exclude>LICENSE</exclude>&gt;
            <exclude>**/*.md</exclude>
            <exclude>**/src/main/resources/banner.txt</exclude>
            <exclude>**/src/main/resources/*.yml</exclude>
            <exclude>**/spring.factories</exclude>
            <!-- Cassandra integration tests break when license headers are present -->
            <exclude>**/src/main/resources/*.cql</exclude>
            <exclude>kafka_*/**</exclude>
            <exclude>**/nohup.out</exclude>
            <exclude>src/test/resources/**</exclude>
            <exclude>**/generated/**</exclude>
          </excludes>
          <strictCheck>true</strictCheck>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>com.mycila</groupId>
            <artifactId>license-maven-plugin-git</artifactId>
            <version>{license-maven-plugin.version}</version>
          </dependency>
        </dependencies>
        <executions>
          <execution>
            <goals>
              <goal>check</goal>
            </goals>
            <phase>compile</phase>
          </execution>
        </executions>
      </plugin>

      <plugin>
        <artifactId>maven-release-plugin</artifactId>
        <version>{maven-release-plugin.version}</version>
        <configuration>
          <useReleaseProfile>false</useReleaseProfile>
          <releaseProfiles>release</releaseProfiles>
          <autoVersionSubmodules>true</autoVersionSubmodules>
          <!-- to match zipkin-scala (openzipkin/zipkin) -->
          <tagNameFormat>@{project.version}</tagNameFormat>
        </configuration>
      </plugin>

      <plugin>
        <groupId>io.zipkin.centralsync-maven-plugin</groupId>
        <artifactId>centralsync-maven-plugin</artifactId>
        <version>0.1.1</version>
        <configuration>
          <packageName>zipkin</packageName>
        </configuration>
      </plugin>

      <plugin>
        <artifactId>maven-enforcer-plugin</artifactId>
        <version>{maven-enforcer-plugin.version}</version>
        <executions>
          <execution>
            <id>enforce-java</id>
            <goals>
              <goal>enforce</goal>
            </goals>
            <configuration>
              <rules>
                <requireJavaVersion>
                  <!-- don't JDK 12 until https://github.com/google/error-prone/issues/1106 -->
                  <version>[11,12)</version>
                </requireJavaVersion>
              </rules>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>

  <profiles>
    <profile>
      <id>error-prone-9+</id>
      <activation>
        <jdk>[9,)</jdk>
        <activeByDefault>false</activeByDefault>
      </activation>
      <build>
        <plugins>
          <plugin>
            <artifactId>maven-compiler-plugin</artifactId>
            <executions>
              <execution>
                <!-- only use errorprone on main source tree -->
                <id>default-compile</id>
                <phase>compile</phase>
                <goals>
                  <goal>compile</goal>
                </goals>
                <configuration>
                  <forceJavacCompilerUse>true</forceJavacCompilerUse>
                  <compilerArgs>
                    <arg>-XDcompilePolicy=simple</arg>
                    <arg>-Xplugin:ErrorProne {errorprone.args}</arg>
                  </compilerArgs>
                  <annotationProcessorPaths>
                    <processorPath>
                      <groupId>com.google.errorprone</groupId>
                      <artifactId>error_prone_core</artifactId>
                      <version>{errorprone.version}</version>
                    </processorPath>
                    <!-- auto-value is placed here eventhough not needed for all projects as
                         configuring along with errorprone is tricky in subprojects -->
                    <processorPath>
                      <groupId>com.google.auto.value</groupId>
                      <artifactId>auto-value</artifactId>
                      <version>{auto-value.version}</version>
                    </processorPath>
                  </annotationProcessorPaths>
                </configuration>
              </execution>
            </executions>
          </plugin>
        </plugins>
      </build>
    </profile>
    <profile>
      <id>release</id>
      <build>
        <plugins>
          <!-- disable license plugin since it should have already checked things and #1512 -->
          <plugin>
            <groupId>com.mycila</groupId>
            <artifactId>license-maven-plugin</artifactId>
            <executions>
              <execution>
                <phase>none</phase>
              </execution>
            </executions>
          </plugin>

          <!-- Creates source jar -->
          <plugin>
            <artifactId>maven-source-plugin</artifactId>
            <version>{maven-source-plugin.version}</version>
            <executions>
              <execution>
                <id>attach-sources</id>
                <goals>
                  <goal>jar</goal>
                </goals>
              </execution>
            </executions>
          </plugin>

          <!-- Creates javadoc jar, skipping internal classes -->
          <plugin>
            <artifactId>maven-javadoc-plugin</artifactId>
            <version>{maven-javadoc-plugin.version}</version>
            <configuration>
              <failOnError>false</failOnError>
              <excludePackageNames>zipkin2.internal,zipkin2.internal.*</excludePackageNames>
              <!-- hush pedantic warnings: we don't put param and return on everything! -->
              <doclint>none</doclint>
            </configuration>
            <executions>
              <execution>
                <id>attach-javadocs</id>
                <goals>
                  <goal>jar</goal>
                </goals>
                <phase>package</phase>
              </execution>
            </executions>
          </plugin>
        </plugins>
      </build>
    </profile>
    <profile>
      <id>netbeans</id>
      <activation>
          <activeByDefault>true</activeByDefault>
      </activation>
      <properties>
        <!-- NetBeans -->
        <org-netbeans-modules-editor-indent.CodeStyle.usedProfile>project</org-netbeans-modules-editor-indent.CodeStyle.usedProfile>
        <org-netbeans-modules-editor-indent.CodeStyle.project.indent-shift-width>2</org-netbeans-modules-editor-indent.CodeStyle.project.indent-shift-width>
        <org-netbeans-modules-editor-indent.CodeStyle.project.spaces-per-tab>2</org-netbeans-modules-editor-indent.CodeStyle.project.spaces-per-tab>
        <org-netbeans-modules-editor-indent.CodeStyle.project.tab-size>2</org-netbeans-modules-editor-indent.CodeStyle.project.tab-size>
        <org-netbeans-modules-editor-indent.CodeStyle.project.text-limit-width>110</org-netbeans-modules-editor-indent.CodeStyle.project.text-limit-width>
        <org-netbeans-modules-editor-indent.CodeStyle.project.expand-tabs>true</org-netbeans-modules-editor-indent.CodeStyle.project.expand-tabs>
      </properties>
    </profile>
  </profiles>
</project>`;
