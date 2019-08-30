## React Flat Flags

[![npm version](https://img.shields.io/npm/v/react-flat-flags.svg)](https://www.npmjs.com/package/react-flat-flags)
[![npm downloads](https://img.shields.io/npm/dm/react-flat-flags.svg)](https://www.npmjs.com/package/react-flat-flags)

<p align="center">
    <img height="auto" width="auto" src="https://cdn.dribbble.com/users/37539/screenshots/1211759/attachments/161841/flags.png" />
</p>

Credit: Flags by [msenyil](https://dribbble.com/shots/1211759-Free-195-Flat-Flags) (he gave permission for commercial use in comments)

### Installation

```sh
yarn add react-flat-flags
```

```sh
npm install react-flat-flags
```

### Usage

```javascript
import React from "react";
import { Germany } from "react-flat-flags";

const App = () => {
  return <Germany />;
};

export default App;
```

Flags can be sized - based on height (default: 15)

```javascript
<Germany size={30} />
```

You can also distort them by only passing width / height values

```javascript
// Add perserveAspectRatio='none' to allow distortion
<Germany width={21} height={15} preserveAspectRatio="none" />
```

Also works great with utility classes i.e. frameworks like tailwindcss

```javascript
<Germany className="h-12 w-auto />
```

If you can't use ES6 imports, it's possible to include flag from the compiled folder ./dist.

```javascript
var Germany = require("react-flat-flags/dist/flags/Germany").default;

var MyComponent = React.createClass({
  render: function() {
    return <Germany />;
  }
});
```

You can also include the whole flag pack:

```javascript
import React from "react";
import * as Flag from "react-flat-flags";

const App = () => {
  return <Flag.Germany />;
};

export default App;
```

Readme and build process inspired by [react-feather](https://github.com/feathericons/react-feather)
