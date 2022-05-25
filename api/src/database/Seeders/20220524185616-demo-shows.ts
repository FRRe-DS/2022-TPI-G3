'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('shows', 
  [{"name":"Schmeler, Lehner and Russel","seat":54,"dateShow":"2021-06-28","amount":3311.82},
{"name":"Deckow-Ratke","seat":62,"dateShow":"2022-02-18","amount":15499.87},
{"name":"Ruecker, Gorczany and Pfeffer","seat":87,"dateShow":"2021-06-25","amount":14343.01},
{"name":"Torphy-Abbott","seat":53,"dateShow":"2021-11-13","amount":19618.27},
{"name":"Rowe, Renner and Bins","seat":80,"dateShow":"2021-10-14","amount":11700.41},
{"name":"Bechtelar Group","seat":1,"dateShow":"2021-07-21","amount":9152.42},
{"name":"Trantow-Leuschke","seat":40,"dateShow":"2021-09-08","amount":4039.96},
{"name":"Keebler Group","seat":58,"dateShow":"2021-06-28","amount":7081.28},
{"name":"Murray Group","seat":72,"dateShow":"2022-02-16","amount":3444.75},
{"name":"White, Cassin and Crooks","seat":59,"dateShow":"2021-12-04","amount":2657.34},
{"name":"Bins, Auer and Ziemann","seat":56,"dateShow":"2022-05-19","amount":17832.77},
{"name":"Yost-Dach","seat":52,"dateShow":"2021-12-18","amount":9234.37},
{"name":"Sanford and Sons","seat":23,"dateShow":"2021-06-19","amount":14983.96},
{"name":"Cassin, Blanda and Ledner","seat":61,"dateShow":"2021-07-30","amount":4416.89},
{"name":"Gleichner and Sons","seat":9,"dateShow":"2021-08-25","amount":13213.67},
{"name":"Abshire, Kihn and Davis","seat":67,"dateShow":"2021-07-01","amount":15595.6},
{"name":"Rohan, Johnston and Schumm","seat":28,"dateShow":"2021-12-22","amount":5342.88},
{"name":"Larkin, Witting and Greenfelder","seat":73,"dateShow":"2021-10-15","amount":4795.86},
{"name":"Renner, Borer and Cassin","seat":5,"dateShow":"2021-10-16","amount":13985.32},
{"name":"Turcotte-Williamson","seat":22,"dateShow":"2021-07-26","amount":8941.19},
{"name":"O'Connell-Prosacco","seat":99,"dateShow":"2021-10-21","amount":5061.42},
{"name":"Jacobson-Balistreri","seat":91,"dateShow":"2021-11-21","amount":7401.55},
{"name":"Hane-Stiedemann","seat":62,"dateShow":"2021-09-22","amount":8227.07},
{"name":"Thiel, Huel and Zboncak","seat":45,"dateShow":"2022-01-09","amount":8246.56},
{"name":"Hayes-Boyer","seat":65,"dateShow":"2021-12-01","amount":6459.83},
{"name":"Reinger, Botsford and Beer","seat":29,"dateShow":"2021-09-24","amount":4233.12},
{"name":"Cummings-Lowe","seat":21,"dateShow":"2021-10-02","amount":8580.69},
{"name":"Quigley, Carroll and Brakus","seat":47,"dateShow":"2022-04-26","amount":18282.68},
{"name":"Dare, Bruen and Ruecker","seat":2,"dateShow":"2021-06-23","amount":1179.89},
{"name":"Cole and Sons","seat":26,"dateShow":"2022-01-05","amount":15483.41},
{"name":"Erdman-Prohaska","seat":35,"dateShow":"2021-11-18","amount":18270.52},
{"name":"Beahan-Wehner","seat":18,"dateShow":"2021-12-03","amount":4405.35},
{"name":"Mayert-Kuhic","seat":53,"dateShow":"2021-09-28","amount":9115.06},
{"name":"Hackett, Robel and Franecki","seat":96,"dateShow":"2021-07-25","amount":16693.09},
{"name":"Miller, Rippin and Keeling","seat":80,"dateShow":"2021-10-16","amount":8753.88},
{"name":"Batz LLC","seat":12,"dateShow":"2021-08-01","amount":19716.2},
{"name":"Stark and Sons","seat":79,"dateShow":"2022-03-05","amount":17393.69},
{"name":"Kris and Sons","seat":17,"dateShow":"2021-10-08","amount":1794.07},
{"name":"Legros, Purdy and Sauer","seat":15,"dateShow":"2022-05-05","amount":19795.17},
{"name":"Conroy-Runolfsdottir","seat":99,"dateShow":"2022-05-08","amount":6502.92},
{"name":"Kshlerin Inc","seat":64,"dateShow":"2022-03-15","amount":15517.64},
{"name":"Rolfson-Veum","seat":62,"dateShow":"2021-08-19","amount":19094.64},
{"name":"Homenick LLC","seat":69,"dateShow":"2021-08-23","amount":13141.89},
{"name":"Crist and Sons","seat":84,"dateShow":"2021-06-04","amount":2391.3},
{"name":"Goyette Group","seat":72,"dateShow":"2021-10-15","amount":10203.98},
{"name":"Collier-Barton","seat":77,"dateShow":"2021-09-30","amount":18528.0},
{"name":"Willms-Considine","seat":85,"dateShow":"2022-03-24","amount":5743.87},
{"name":"Koelpin-Kihn","seat":59,"dateShow":"2022-04-13","amount":13804.33},
{"name":"Torp LLC","seat":7,"dateShow":"2022-05-06","amount":6970.81},
{"name":"Oberbrunner-Runolfsdottir","seat":46,"dateShow":"2022-01-24","amount":13198.74},
{"name":"Ward LLC","seat":100,"dateShow":"2022-01-27","amount":11243.79},
{"name":"Nikolaus, Quitzon and Bayer","seat":27,"dateShow":"2021-11-12","amount":2644.68},
{"name":"Dietrich, Von and Nolan","seat":96,"dateShow":"2021-07-09","amount":19185.24},
{"name":"Strosin-Kohler","seat":15,"dateShow":"2021-06-29","amount":1060.93},
{"name":"Hessel and Sons","seat":61,"dateShow":"2021-11-01","amount":18534.42},
{"name":"Windler Group","seat":86,"dateShow":"2021-09-20","amount":19868.86},
{"name":"Larkin-Rempel","seat":41,"dateShow":"2022-04-11","amount":2561.74},
{"name":"Gibson Inc","seat":38,"dateShow":"2021-12-02","amount":18034.13},
{"name":"Batz, Blanda and Corkery","seat":11,"dateShow":"2021-07-16","amount":7587.16},
{"name":"Waters, Cummerata and Block","seat":54,"dateShow":"2021-09-23","amount":19193.22},
{"name":"Tromp-Volkman","seat":7,"dateShow":"2021-08-04","amount":9807.36},
{"name":"Maggio, Quigley and Torp","seat":37,"dateShow":"2021-07-07","amount":5684.06},
{"name":"Feest, Powlowski and Breitenberg","seat":59,"dateShow":"2021-12-06","amount":6439.38},
{"name":"Bartoletti-Dietrich","seat":22,"dateShow":"2021-06-13","amount":17679.73},
{"name":"Okuneva-Hahn","seat":24,"dateShow":"2021-08-02","amount":11437.86},
{"name":"Rice-Mayert","seat":73,"dateShow":"2021-10-24","amount":15844.68},
{"name":"West LLC","seat":22,"dateShow":"2021-07-19","amount":6874.26},
{"name":"Hoppe-Gerlach","seat":3,"dateShow":"2022-04-18","amount":8247.9},
{"name":"Jast-Veum","seat":73,"dateShow":"2022-02-23","amount":6460.01},
{"name":"Nader LLC","seat":86,"dateShow":"2021-09-16","amount":2381.93},
{"name":"Mayer Group","seat":59,"dateShow":"2022-02-11","amount":13050.53},
{"name":"Daniel, Rosenbaum and Graham","seat":29,"dateShow":"2021-08-12","amount":14812.44},
{"name":"Sanford-Bergstrom","seat":88,"dateShow":"2021-11-22","amount":16388.9},
{"name":"Fritsch, Renner and Lebsack","seat":91,"dateShow":"2022-03-16","amount":4923.23},
{"name":"Lindgren and Sons","seat":38,"dateShow":"2022-03-01","amount":10190.54},
{"name":"Predovic-Barton","seat":39,"dateShow":"2021-08-19","amount":14187.42},
{"name":"Schimmel-Hettinger","seat":36,"dateShow":"2021-12-04","amount":19270.82},
{"name":"Vandervort-Moore","seat":69,"dateShow":"2021-11-05","amount":9345.49},
{"name":"Hirthe-Nienow","seat":90,"dateShow":"2022-05-10","amount":14941.78},
{"name":"Langosh, Rau and Weissnat","seat":29,"dateShow":"2021-12-03","amount":13631.42},
{"name":"Parker, Emard and Schimmel","seat":37,"dateShow":"2022-04-23","amount":7933.84},
{"name":"Weissnat-Haag","seat":66,"dateShow":"2022-03-11","amount":14322.57},
{"name":"McCullough-Witting","seat":84,"dateShow":"2021-10-02","amount":7856.16},
{"name":"Rolfson Inc","seat":70,"dateShow":"2021-12-10","amount":2973.02},
{"name":"Langosh Group","seat":20,"dateShow":"2021-07-21","amount":15004.24},
{"name":"Sporer, Boyle and Moore","seat":5,"dateShow":"2021-12-29","amount":10282.36},
{"name":"Wiegand, Bartell and Murray","seat":52,"dateShow":"2022-05-19","amount":5284.65},
{"name":"Hudson, Vandervort and Stamm","seat":75,"dateShow":"2021-07-15","amount":1997.17},
{"name":"Jast-Lehner","seat":74,"dateShow":"2022-01-18","amount":1648.2},
{"name":"Konopelski-Hoeger","seat":19,"dateShow":"2022-02-17","amount":19960.03},
{"name":"Herman-Zulauf","seat":24,"dateShow":"2021-05-28","amount":7348.27},
{"name":"Kub and Sons","seat":83,"dateShow":"2022-01-27","amount":13333.07},
{"name":"Flatley Inc","seat":5,"dateShow":"2022-03-30","amount":6954.92},
{"name":"Stracke-Terry","seat":24,"dateShow":"2022-04-30","amount":8977.25},
{"name":"Bergnaum, Kris and Fadel","seat":59,"dateShow":"2022-05-13","amount":16717.78},
{"name":"Beahan, Schaefer and Pfeffer","seat":76,"dateShow":"2021-06-03","amount":19975.28},
{"name":"Roob and Sons","seat":97,"dateShow":"2021-11-17","amount":8392.8},
{"name":"Stamm-Gerlach","seat":1,"dateShow":"2021-10-16","amount":3585.65},
{"name":"Trantow-Nader","seat":9,"dateShow":"2021-10-27","amount":1806.46},
{"name":"Cummerata, Torp and McGlynn","seat":25,"dateShow":"2022-05-10","amount":12408.69}]
  );
 },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('shows', null, {});

  }
};