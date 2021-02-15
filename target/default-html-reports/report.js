$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTypes.feature");
formatter.feature({
  "name": "Account types",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Driver user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(ContactsStepDefs.java:23)\r\n\tat ✽.the user logged in as \"driver\"(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/AccountTypes.feature:4)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(ContactsStepDefs.java:23)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user navigates to \"Activities\" \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the title contains \"Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Store manager user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(ContactsStepDefs.java:23)\r\n\tat ✽.the user logged in as \"store manager\"(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/AccountTypes.feature:14)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(ContactsStepDefs.java:23)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the title contains \"Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/NavigationMenu.feature");
formatter.feature({
  "name": "Navigation Menu",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@navigate"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Navigating Fleet -- Vehicles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@navigate"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat ✽.the user is on the login page(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/NavigationMenu.feature:5)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters the sales manager information",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_sales_manager_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigates to Fleet, Vehicles",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to_Fleet_Vehicles()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the title should be Vehicles",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_title_should_be_Vehicles()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigating Marketing -- Campaigns",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@navigate"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat ✽.the user is on the login page(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/NavigationMenu.feature:11)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters the sales manager information",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_sales_manager_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigates to Marketing, Campaigns",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to_Marketing_Campaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "title should be Campaigns",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.title_should_be_Campaigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigating Activities -- Calendar Events",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@navigate"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat ✽.the user is on the login page(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/NavigationMenu.feature:17)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters the sales manager information",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_sales_manager_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigates to Activities, Calendar Events",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to_Activities_Calendar_Events()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "title should be Calendars",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.title_should_be_Calendars()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Users should be able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat ✽.the user is on the login page(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/login.feature:5)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login as a driver",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@driver"
    },
    {
      "name": "@VYT-123"
    }
  ]
});
formatter.step({
  "name": "the user enters the driver information",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_driver_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat ✽.the user is on the login page(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/login.feature:5)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login as a sales manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sales_manager"
    },
    {
      "name": "@VYT-123"
    }
  ]
});
formatter.step({
  "name": "the user enters the sales manager information",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_sales_manager_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat ✽.the user is on the login page(file:///C:/Users/Asus/Desktop/javaws/EU4CucumberSelenium/src/test/resources/features/login.feature:5)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page(LoginStepDefs.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login as a store manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@store_manager"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user enters the store manager information",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_store_manager_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 88.0.4324.96\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat com.vytrack.utilities.Driver.get(Driver.java:30)\r\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:20)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "failed"
});
});