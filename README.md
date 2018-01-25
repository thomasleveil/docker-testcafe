TestCafé Docker image
=====================

Docker image to run [TestCafé](https://devexpress.github.io/testcafe/). Includes:
- Chromium
- Firefox
- TestCafé [framework specific selectors](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/framework-specific-selectors.html)
  - [testcafe-react-selectors](https://github.com/DevExpress/testcafe-react-selectors)
  - [testcafe-angular-selectors](https://github.com/DevExpress/testcafe-angular-selectors)
  - [testcafe-vue-selectors](https://github.com/DevExpress/testcafe-vue-selectors)
  - [testcafe-aurelia-selectors](https://github.com/miherlosev/testcafe-aurelia-selectors)


Usage
-----

Running tests with Firefox:

```shell
docker run --rm -it -v /my/testcafe/tests/:/tests tomdesinto/testcafe:latest testcafe firefox '/tests/*.test.js'
```


Running tests with Chromium:

```shell
docker run --rm -it -v /my/testcafe/tests/:/tests tomdesinto/testcafe:latest testcafe 'chromium --no-sandbox' '/tests/*.test.js'
```


Limitations
-----------

Containers created from this image are meant to be used one time and then removed. Issues arise if you try to run the `testcafe` 
command multiple times in the same container.


Building the docker image
-------------------------

```sh
git clone https://github.com/thomasleveil/docker-testcafe.git
cd docker-testcafe
doker build -t tomdesinto/testcafe .
```
