moment().format('MMMM Do YYYY, h:mm:ss a'); // May 29th 2021, 11:57:27 pm
moment().format('dddd');                    // Saturday
moment().format("MMM Do YY");               // May 29th 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();                         

//----------------------------
//--------------------------------------
moment("20111031", "YYYYMMDD").fromNow(); // 10 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
moment().startOf('day').fromNow();        // a day ago
moment().endOf('day').fromNow();          // in 2 minutes
moment().startOf('hour').fromNow();       // an hour ago

//---------------------------
//---------------------------
moment().subtract(10, 'days').calendar(); // 05/19/2021
moment().subtract(6, 'days').calendar();  // Last Sunday at 11:58 PM
moment().subtract(3, 'days').calendar();  // Last Wednesday at 11:58 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 11:58 PM
moment().calendar();                      // Today at 11:58 PM
moment().add(1, 'days').calendar();       // Tomorrow at 11:58 PM
moment().add(3, 'days').calendar();       // Tuesday at 11:58 PM
moment().add(10, 'days').calendar();      // 06/08/2021

//----------------------------------
//----------------------------------

moment.locale();         // en
moment().format('LT');   // 11:59 PM
moment().format('LTS');  // 11:59:01 PM
moment().format('L');    // 05/29/2021
moment().format('l');    // 5/29/2021
moment().format('LL');   // May 29, 2021
moment().format('ll');   // May 29, 2021
moment().format('LLL');  // May 29, 2021 11:59 PM
moment().format('lll');  // May 29, 2021 11:59 PM
moment().format('LLLL'); // Saturday, May 29, 2021 11:59 PM
moment().format('llll'); // Sat, May 29, 2021 11:59 PM