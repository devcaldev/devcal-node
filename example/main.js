const DevCal = require("../main");

const client = new DevCal("devcal.fly.dev:50051", process.argv[2]);

client.listEvents({ date: new Date(), period: "year" }).then(console.log).catch(console.error);
