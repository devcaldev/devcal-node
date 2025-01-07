const { InsecureClient } = require("./client");
const assert = require("assert");

const client = new InsecureClient(
  "localhost:50051",
  "9fSBhI9PysfJpAdvdo7QO50J6lWunEvSi4TP0Uv3GbcXjyYi7DrZO4aNDCC+cYtTsEi5ZKyArajVml4nZlSEVg=="
);

async function test() {
  var dtstart = new Date();
  var dtend = new Date(Date.now() + 3600000);
  var e;

  e = await client.insertEvent({
    dtstart: dtstart,
    dtend: dtend,
    rrule: "FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,SU",
  });
  assert(e.id);
  assert(e.account_id);
  assert(e.dtstart);
  assert(e.dtend);

  e = await client.getEvent({ id: e.id });
  assert(e.id);
  assert(e.account_id);
  assert(e.dtstart);
  assert(e.dtend);

  var es = await client.listEvents({ date: new Date(), period: "year" });
  assert(es.length > 0);

  await client.updateEvent({ id: e.id, props: { name: "x" } });

  es = await client.listEvents({ props: { name: "x" } });
  assert(es.length > 0);

  e = await client.getEvent({ id: e.id });
  assert(e.props.name == "x");

  client.deleteEvent({ id: e.id });
}

test();
