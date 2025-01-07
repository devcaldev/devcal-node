const messages = require("./devcal_pb");
const services = require("./devcal_grpc_pb");
const grpc = require("@grpc/grpc-js");

const { Timestamp } = require("google-protobuf/google/protobuf/timestamp_pb.js");
const { Struct } = require("google-protobuf/google/protobuf/struct_pb.js");

function eventFromRpcEvent(re) {
  return {
    id: re.getId(),
    account_id: re.getAccountId(),
    dtstart: re.getDtstart().toDate(),
    dtend: re.getDtend().toDate(),
    rrule: re.getRrule(),
    props: re.getProps().toJavaScript(),
  };
}

class BaseClient {
  constructor(addr, apiKey, chanCreds) {
    this._metadata = new grpc.Metadata();
    this._metadata.add("authorization", `Bearer ${apiKey}`);

    this._client = new services.EventsServiceClient(addr, chanCreds);
  }

  insertEvent(params) {
    return new Promise((resolve, reject) => {
      var p = new messages.InsertEventParams();
      if (params.dtstart) {
        p.setDtstart(Timestamp.fromDate(params.dtstart));
      }
      if (params.dtend) {
        p.setDtend(Timestamp.fromDate(params.dtend));
      }
      if (params.rrule) {
        p.setRrule(params.rrule);
      }
      if (params.props) {
        p.setProps(Struct.fromJavaScript(params.props));
      }

      this._client.insertEvent(p, this._metadata, (err, newEvent) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(eventFromRpcEvent(newEvent));
      });
    });
  }

  getEvent(params) {
    return new Promise((resolve, reject) => {
      var p = new messages.GetEventParams();
      if (params.id) {
        p.setId(params.id);
      }

      this._client.getEvent(p, this._metadata, (err, event) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(eventFromRpcEvent(event));
      });
    });
  }

  listEvents(params, cb) {
    var p = new messages.ListEventsParams();
    if (params.date && params.period) {
      var r = new messages.ListEventsRange();
      r.setDate(Timestamp.fromDate(params.date));
      r.setPeriod(params.period);
      p.setRange(r);
    }
    if (params.props) {
      p.setProps(Struct.fromJavaScript(params.props));
    }
    var call = this._client.listEvents(p, this._metadata);

    return new Promise((resolve, reject) => {
      var events = [];
      call.on("data", (event) => {
        var _event = eventFromRpcEvent(event);
        events.push(_event);
        if (typeof cb == "function") {
          cb(_event);
        }
      });
      call.once("end", () => resolve(events));
      call.once("error", reject);
    });
  }

  updateEvent(params) {
    return new Promise((resolve, reject) => {
      var p = new messages.UpdateEventParams();

      if (params.id) {
        p.setId(params.id);
      }

      if (params.dtstart) {
        p.setDtstart(Timestamp.fromDate(params.dtstart));
      }
      if (params.dtend) {
        p.setDtend(Timestamp.fromDate(params.dtend));
      }
      if (params.rrule) {
        p.setRrule(params.rrule);
      }
      if (params.props) {
        p.setProps(Struct.fromJavaScript(params.props));
      }

      this._client.updateEvent(p, this._metadata, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  deleteEvent(params) {
    return new Promise((resolve, reject) => {
      var p = new messages.DeleteEventParams();

      if (params.id) {
        p.setId(params.id);
      }

      this._client.deleteEvent(p, this._metadata, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
}

class InsecureClient extends BaseClient {
  constructor(addr, apiKey) {
    super(addr, apiKey, grpc.credentials.createInsecure());
  }
}

class Client extends BaseClient {
  constructor(addr, apiKey) {
    super(addr, apiKey, grpc.credentials.createSsl());
  }
}

module.exports = {
  InsecureClient,
  Client,
};
