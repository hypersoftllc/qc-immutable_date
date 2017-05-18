# qc-immutable_date

[![Build Status][travis-svg]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An immutable version of a JavaScript Date.


## Installation

```sh
npm install --save qc-immutable_date
```


## Example Usage

```js
import { ImmutableDate } from 'qc-immutable_date';

let d1 = new Date(946684800000); // Date on 2000-01-01T00:00:00.000 UTC
let id1 = new ImmutableDate(d1);
let id2 = id1.setFullYear(2010); // id1 is still in 2000
let d2 = id2.toDate();  // Date on 2010-01-01T00:00:00.000 UTC
```

[downloads-image]: http://img.shields.io/npm/dm/qc-immutable_date.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-immutable_date
[license-image]: http://img.shields.io/npm/l/qc-immutable_date.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-immutable_date
[npm-badge-png]: https://nodei.co/npm/qc-immutable_date.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-immutable_date.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-immutable_date
