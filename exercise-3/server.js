const app = require('express')();
const contacts = [
  {
    "name": "Lina Thompson",
    "address": "12742 Novella Extension",
    "city": "Simonisbury, NG, 94219-0012",
    "phoneNumber": "(253) 640-2168 x922",
    "dateOfBirth": "2017-03-12T19:40:07.386Z",
    "notes": "Labore libero et adipisci quod repudiandae veniam qui.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg"
  },
  {
    "name": "Newell Mraz",
    "address": "7106 Myah Ferry",
    "city": "Delltown, MC, 47936",
    "phoneNumber": "(479) 859-8519",
    "dateOfBirth": "2016-06-23T21:43:21.220Z",
    "notes": "Voluptatem dolorum magnam impedit enim incidunt.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg"
  },
  {
    "name": "Miss Jerrold O'Hara",
    "address": "78291 Rahul Squares",
    "city": "Brianaville, IO, 45273",
    "phoneNumber": "602.714.8730",
    "dateOfBirth": "2017-01-19T19:12:25.850Z",
    "notes": "Quo molestiae voluptatem.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/digitalmaverick/128.jpg"
  },
  {
    "name": "Vicente Kovacek",
    "address": "5345 Sydney Garden",
    "city": "North Kenneth, CR, 26554-2909",
    "phoneNumber": "1-064-844-7331",
    "dateOfBirth": "2016-11-15T19:06:51.552Z",
    "notes": "Animi nisi nostrum dolorum sint.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinjohndayy/128.jpg"
  },
  {
    "name": "Raphael Bins",
    "address": "15853 Rempel Spur",
    "city": "Brianfurt, JP, 23486",
    "phoneNumber": "1-077-485-4598 x04446",
    "dateOfBirth": "2016-10-26T09:13:05.340Z",
    "notes": "Quaerat rerum voluptas.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/alexivanichkin/128.jpg"
  },
  {
    "name": "Wade Stracke",
    "address": "123 Emard Rest",
    "city": "Odelltown, KZ, 20882",
    "phoneNumber": "(349) 733-0725 x503",
    "dateOfBirth": "2016-08-18T23:47:33.977Z",
    "notes": "Est at et aut maxime.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/jonsgotwood/128.jpg"
  },
  {
    "name": "Kylee Welch I",
    "address": "3357 Burdette Rapid",
    "city": "Ryanburgh, SO, 83023-6175",
    "phoneNumber": "1-428-764-0527 x545",
    "dateOfBirth": "2017-03-07T05:59:50.027Z",
    "notes": "Hic voluptatem harum.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/benjamin_knight/128.jpg"
  },
  {
    "name": "Maureen Lubowitz",
    "address": "855 Lebsack Underpass",
    "city": "West Joesph, ZA, 78029",
    "phoneNumber": "1-045-418-6837",
    "dateOfBirth": "2017-04-24T21:30:48.792Z",
    "notes": "Ut nisi nisi consequatur.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/besbujupi/128.jpg"
  },
  {
    "name": "Dariana Braun",
    "address": "24515 Bergstrom Walks",
    "city": "Margieville, BR, 77360-4593",
    "phoneNumber": "1-016-122-2195",
    "dateOfBirth": "2017-04-26T22:34:07.289Z",
    "notes": "Deleniti sit et itaque delectus.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/_yardenoon/128.jpg"
  },
  {
    "name": "Dr. Antonetta Jast",
    "address": "8423 Runolfsdottir Keys",
    "city": "West Athena, BV, 31363",
    "phoneNumber": "(138) 049-3649",
    "dateOfBirth": "2016-08-08T23:13:34.752Z",
    "notes": "Ipsa possimus ab odit libero.",
    "avatarSrc": "https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg"
  }
]

app.get('/contacts', (req, res) => res.json(contacts));
app.listen(8080, () => console.log('Server is running on http://localhost:8080'));
