// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var devcal_pb = require('./devcal_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_devcal_DeleteEventParams(arg) {
  if (!(arg instanceof devcal_pb.DeleteEventParams)) {
    throw new Error('Expected argument of type devcal.DeleteEventParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_devcal_DeleteEventParams(buffer_arg) {
  return devcal_pb.DeleteEventParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_devcal_Event(arg) {
  if (!(arg instanceof devcal_pb.Event)) {
    throw new Error('Expected argument of type devcal.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_devcal_Event(buffer_arg) {
  return devcal_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_devcal_GetEventParams(arg) {
  if (!(arg instanceof devcal_pb.GetEventParams)) {
    throw new Error('Expected argument of type devcal.GetEventParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_devcal_GetEventParams(buffer_arg) {
  return devcal_pb.GetEventParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_devcal_InsertEventParams(arg) {
  if (!(arg instanceof devcal_pb.InsertEventParams)) {
    throw new Error('Expected argument of type devcal.InsertEventParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_devcal_InsertEventParams(buffer_arg) {
  return devcal_pb.InsertEventParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_devcal_ListEventsParams(arg) {
  if (!(arg instanceof devcal_pb.ListEventsParams)) {
    throw new Error('Expected argument of type devcal.ListEventsParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_devcal_ListEventsParams(buffer_arg) {
  return devcal_pb.ListEventsParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_devcal_UpdateEventParams(arg) {
  if (!(arg instanceof devcal_pb.UpdateEventParams)) {
    throw new Error('Expected argument of type devcal.UpdateEventParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_devcal_UpdateEventParams(buffer_arg) {
  return devcal_pb.UpdateEventParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventsServiceService = exports.EventsServiceService = {
  insertEvent: {
    path: '/devcal.EventsService/InsertEvent',
    requestStream: false,
    responseStream: false,
    requestType: devcal_pb.InsertEventParams,
    responseType: devcal_pb.Event,
    requestSerialize: serialize_devcal_InsertEventParams,
    requestDeserialize: deserialize_devcal_InsertEventParams,
    responseSerialize: serialize_devcal_Event,
    responseDeserialize: deserialize_devcal_Event,
  },
  getEvent: {
    path: '/devcal.EventsService/GetEvent',
    requestStream: false,
    responseStream: false,
    requestType: devcal_pb.GetEventParams,
    responseType: devcal_pb.Event,
    requestSerialize: serialize_devcal_GetEventParams,
    requestDeserialize: deserialize_devcal_GetEventParams,
    responseSerialize: serialize_devcal_Event,
    responseDeserialize: deserialize_devcal_Event,
  },
  listEvents: {
    path: '/devcal.EventsService/ListEvents',
    requestStream: false,
    responseStream: true,
    requestType: devcal_pb.ListEventsParams,
    responseType: devcal_pb.Event,
    requestSerialize: serialize_devcal_ListEventsParams,
    requestDeserialize: deserialize_devcal_ListEventsParams,
    responseSerialize: serialize_devcal_Event,
    responseDeserialize: deserialize_devcal_Event,
  },
  updateEvent: {
    path: '/devcal.EventsService/UpdateEvent',
    requestStream: false,
    responseStream: false,
    requestType: devcal_pb.UpdateEventParams,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_devcal_UpdateEventParams,
    requestDeserialize: deserialize_devcal_UpdateEventParams,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteEvent: {
    path: '/devcal.EventsService/DeleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: devcal_pb.DeleteEventParams,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_devcal_DeleteEventParams,
    requestDeserialize: deserialize_devcal_DeleteEventParams,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.EventsServiceClient = grpc.makeGenericClientConstructor(EventsServiceService);
