package com.vytrack.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",
                "rerun:target/rerun.txt"},
        features = "src/test/resources/features",  //connection with features folder
        glue = "com/vytrack/step_definitions",     //connection with step definitions folder
        dryRun = false,
        tags = "@wip"

)
public class CukesRunner {
}
