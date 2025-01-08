# devcal-node

devcal node client is a wrapper for devcal grpc node client which handles type conversions between grpc and node internally.

## quick start

install devcal-node package

```sh
npm install devcaldev/devcal-node
```

initialize client

```js
const DevCal = require("devcal");

const client = new DevCal("devcal.fly.dev:50051", apiKey);
```

insert non recurring event

```js
var e = await client.insertEvent({
  dtstart: new Date,
  dtend: new Date(Date.now() + 3600000),
});
```

insert recurring event

```js
var e = await client.insertEvent({
  dtstart: new Date,
  dtend: new Date(Date.now() + 3600000),
  rrule: "FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,SU",
});
```

insert event with additional properties

```js
var event = await client.insertEvent({
  dtstart: new Date,
  dtend: new Date(Date.now() + 3600000),
  Rrule: "FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,SU",
  Props: {calendar_id: "c1"},
});
```

see `test.js` file and `example` folder for detailed usage.

goto [devcal.dev](https://devcal.dev) to get an `api key`
