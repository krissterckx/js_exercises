# NuageNetworks

## Exercise #1

At the beginning of the `exercise-1/index.js` you will find two values:

- `students`: a list of students
- `testResults`: a list of test results

Use those values to obtain:

- `worstTest`: the worst test in the year
    - `worstTest.student`: student
    - `worstTest.score`: score
    - `worstTest.date`: date
- `rejectedStudents`: the list of full names of students that have an average score < 6
- `absences`: the list of absences (users that don't have a test result on a date)
    - `absences[].student`: student
    - `absences[].date`: date of the test
- `bestOfLastYear`: return the best test by a student with age > 16

Use can only native ES6 functions to solve the exercise.

### Testing

Testing the exercise will be considered a big plus.

A Jasmine test suite is already set up in the index.spec.js file. To use it run:

    $ npm install
    $ npm run test:watch
