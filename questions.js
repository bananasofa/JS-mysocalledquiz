weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

dateObj = new Date()
weekdayNumber = dateObj.getDay()
weekdayName = weekdays[weekdayNumber]



questions = [
  [ `${weekdayName} is:` , 'Technically, that is not a question', 'Yesterday', '*eyeroll*','Today', `Just another day`, `skip`],
  [`Who is your best friend?`, `Someone from my family`, `Someone I met in high school`, `Someone I met as an adult`, `Someone imaginary, a fictional character or an object`,`I have no friends`, `skip`],
  [`What is your mom like?`, `My mom is the best`, `She is... problematic`, `My mom is not in the picture`, `She is just a mom`,`I don't want to talk about my mom`, `skip`],
  [`Where am I most likely to find you at a party?`, `Watching everyone else have fun`, `Outside`, `Making out with someone`, `Just...around`,`Dancing, and hoping everyone is watching` , `skip`],
  ];
