[![codecov](https://codecov.io/gh/fedeghe/validatedate/graph/badge.svg?token=42RE07NXP5)](https://codecov.io/gh/fedeghe/validatedate)
![noai](https://www.jmvc.org/img/HumanCoded100.png?x=2)

# validatedate

Two straight functions both returning a boolean to check the validity of a string date against a format.


``` js
const {
    isValidDate,
    isValidFormat
} = require('validatedate'),

dateValidity= isValidDate(
    '12-13-2013',
    'MM-DD-YYYY',  // def= YYYY-MM-dd
    ['-'],         // def= ["/","-","."] 
    ['YYYY', 'YY', 'MM', 'DD'] // def= $defaults.pleaceholders$ 
),

formatValidity= isValidFormat(
    'MM-DD-YYYY',  // def= YYYY-MM-dd
    ['-'],         // def= ["/","-","."] 
    ['YYYY', 'YY', 'MM', 'DD'] // def= $defaults.pleaceholders$ 
);
```


26/2/2026