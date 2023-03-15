# vn2000-converter
A tool convert VN2000/HN72 coordinate system to WGS84 (GPS) and reverse  
This tool is base on https://tool-online.com/en/coordinate-converter.php

## Demo
https://nam-ka-test.web.app/

## Installation
- Install via npm or yarn:
```shell script
# install with npm
$ npm install vn2000-converter
# install with yarn
$ yarn add vn2000-converter
```

- Include within your HTML
```html
<script src="https://unpkg.com/vn2000-converter@1.0.1/dist/vn2000-converter.min.js"></script>
```

## Usage
- In a Node.js application.
```javascript
const {vn2000_to_wgs84} = require('vn2000-converter');

const coordinate = vn2000_to_wgs84(557975.802, 1142228.861, 0, 'VN2000_DONG_THAP');
console.log(coordinate);
// {x: '105.53115606', y: '10.32843706', h: '-5.075'}
```

- In a modular environment.
```javascript
import vn2000_converter from 'vn2000-converter';
import {vn2000_to_wgs84, wgs84_to_vn2000} from 'vn2000-converter';
```

### Functions

Function            | Arguments           | Description   
--------            |---------------------| -------
vn2000_to_wgs84     | dx, xy, h, province | Convert VN2000 coordinate system to WGS84 (GPS)      
wgs84_to_vn2000     | dx, xy, h, province | Convert WGS84 (GPS) coordinate system to VN2000 
list_province       |                     |List provinces of VN2000 coordinate system  
hn72_to_wgs84       | dx, xy, h           | Convert HN72 coordinate system to WGS84 (GPS)
wgs84_to_hn72       | dx, xy, h           | Convert WGS84 (GPS) coordinate system to HN72

#### Arguments

Property            | Required    | Type/Enum      | Comments
--------            | ---------  | ---------------| --------
dx                  | yes       | Number, String    | Coordinate x source
dx                  | yes       | Number, String    | Coordinate y source
h                   | yes       | Number, String    | Coordinate z source
province            | yes       | String            | Province of VN2000 coordinate system


## Developing

Clone and install dependencies
```
git clone https://github.com/namlunkaka/vn2000-converter.git
cd vn2000-converter
npm install
```

Build the library
```
npm run build
```

Run test
```
npm run test
```

## License
MIT © Namlun
