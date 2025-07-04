// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/api/mime_handler.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('extensions.mimeHandler');



  function StreamInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StreamInfo.prototype.initDefaults_ = function() {
    this.mimeType = null;
    this.originalUrl = null;
    this.streamUrl = null;
    this.tabId = 0;
    this.embedded = false;
    this.responseHeaders = null;
  };
  StreamInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StreamInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StreamInfo.mimeType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate StreamInfo.originalUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate StreamInfo.streamUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate StreamInfo.responseHeaders
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  StreamInfo.encodedSize = codec.kStructHeaderSize + 40;

  StreamInfo.decode = function(decoder) {
    var packed;
    var val = new StreamInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mimeType = decoder.decodeStruct(codec.String);
    val.originalUrl = decoder.decodeStruct(codec.String);
    val.streamUrl = decoder.decodeStruct(codec.String);
    val.tabId = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.embedded = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.responseHeaders = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  StreamInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StreamInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mimeType);
    encoder.encodeStruct(codec.String, val.originalUrl);
    encoder.encodeStruct(codec.String, val.streamUrl);
    encoder.encodeStruct(codec.Int32, val.tabId);
    packed = 0;
    packed |= (val.embedded & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeMapPointer(codec.String, codec.String, val.responseHeaders);
  };
  function MimeHandlerService_GetStreamInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerService_GetStreamInfo_Params.prototype.initDefaults_ = function() {
  };
  MimeHandlerService_GetStreamInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerService_GetStreamInfo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeHandlerService_GetStreamInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  MimeHandlerService_GetStreamInfo_Params.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerService_GetStreamInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MimeHandlerService_GetStreamInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerService_GetStreamInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MimeHandlerService_GetStreamInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerService_GetStreamInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.streamInfo = null;
  };
  MimeHandlerService_GetStreamInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerService_GetStreamInfo_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MimeHandlerService_GetStreamInfo_ResponseParams.streamInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StreamInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeHandlerService_GetStreamInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MimeHandlerService_GetStreamInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerService_GetStreamInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.streamInfo = decoder.decodeStructPointer(StreamInfo);
    return val;
  };

  MimeHandlerService_GetStreamInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerService_GetStreamInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StreamInfo, val.streamInfo);
  };
  function MimeHandlerService_AbortStream_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerService_AbortStream_Params.prototype.initDefaults_ = function() {
  };
  MimeHandlerService_AbortStream_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerService_AbortStream_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeHandlerService_AbortStream_Params.encodedSize = codec.kStructHeaderSize + 0;

  MimeHandlerService_AbortStream_Params.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerService_AbortStream_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MimeHandlerService_AbortStream_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerService_AbortStream_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MimeHandlerService_AbortStream_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerService_AbortStream_ResponseParams.prototype.initDefaults_ = function() {
  };
  MimeHandlerService_AbortStream_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerService_AbortStream_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeHandlerService_AbortStream_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  MimeHandlerService_AbortStream_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerService_AbortStream_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MimeHandlerService_AbortStream_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerService_AbortStream_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function BeforeUnloadControl_SetShowBeforeUnloadDialog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.prototype.initDefaults_ = function() {
    this.showDialog = false;
  };
  BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.encodedSize = codec.kStructHeaderSize + 8;

  BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.decode = function(decoder) {
    var packed;
    var val = new BeforeUnloadControl_SetShowBeforeUnloadDialog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.showDialog = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.showDialog & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.prototype.initDefaults_ = function() {
  };
  BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  var kMimeHandlerService_GetStreamInfo_Name = 1263417424;
  var kMimeHandlerService_AbortStream_Name = 1143658203;

  function MimeHandlerServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MimeHandlerService,
                                                   handleOrPtrInfo);
  }

  function MimeHandlerServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MimeHandlerService, associatedInterfacePtrInfo);
  }

  MimeHandlerServiceAssociatedPtr.prototype =
      Object.create(MimeHandlerServicePtr.prototype);
  MimeHandlerServiceAssociatedPtr.prototype.constructor =
      MimeHandlerServiceAssociatedPtr;

  function MimeHandlerServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  MimeHandlerServicePtr.prototype.getStreamInfo = function() {
    return MimeHandlerServiceProxy.prototype.getStreamInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  MimeHandlerServiceProxy.prototype.getStreamInfo = function() {
    var params_ = new MimeHandlerService_GetStreamInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMimeHandlerService_GetStreamInfo_Name,
          codec.align(MimeHandlerService_GetStreamInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MimeHandlerService_GetStreamInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MimeHandlerService_GetStreamInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MimeHandlerServicePtr.prototype.abortStream = function() {
    return MimeHandlerServiceProxy.prototype.abortStream
        .apply(this.ptr.getProxy(), arguments);
  };

  MimeHandlerServiceProxy.prototype.abortStream = function() {
    var params_ = new MimeHandlerService_AbortStream_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMimeHandlerService_AbortStream_Name,
          codec.align(MimeHandlerService_AbortStream_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MimeHandlerService_AbortStream_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MimeHandlerService_AbortStream_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function MimeHandlerServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  MimeHandlerServiceStub.prototype.getStreamInfo = function() {
    return this.delegate_ && this.delegate_.getStreamInfo && this.delegate_.getStreamInfo();
  }
  MimeHandlerServiceStub.prototype.abortStream = function() {
    return this.delegate_ && this.delegate_.abortStream && this.delegate_.abortStream();
  }

  MimeHandlerServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  MimeHandlerServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMimeHandlerService_GetStreamInfo_Name:
      var params = reader.decodeStruct(MimeHandlerService_GetStreamInfo_Params);
      this.getStreamInfo().then(function(response) {
        var responseParams =
            new MimeHandlerService_GetStreamInfo_ResponseParams();
        responseParams.streamInfo = response.streamInfo;
        var builder = new codec.MessageV1Builder(
            kMimeHandlerService_GetStreamInfo_Name,
            codec.align(MimeHandlerService_GetStreamInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MimeHandlerService_GetStreamInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMimeHandlerService_AbortStream_Name:
      var params = reader.decodeStruct(MimeHandlerService_AbortStream_Params);
      this.abortStream().then(function(response) {
        var responseParams =
            new MimeHandlerService_AbortStream_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kMimeHandlerService_AbortStream_Name,
            codec.align(MimeHandlerService_AbortStream_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MimeHandlerService_AbortStream_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMimeHandlerServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMimeHandlerService_GetStreamInfo_Name:
        if (message.expectsResponse())
          paramsClass = MimeHandlerService_GetStreamInfo_Params;
      break;
      case kMimeHandlerService_AbortStream_Name:
        if (message.expectsResponse())
          paramsClass = MimeHandlerService_AbortStream_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMimeHandlerServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMimeHandlerService_GetStreamInfo_Name:
        if (message.isResponse())
          paramsClass = MimeHandlerService_GetStreamInfo_ResponseParams;
        break;
      case kMimeHandlerService_AbortStream_Name:
        if (message.isResponse())
          paramsClass = MimeHandlerService_AbortStream_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MimeHandlerService = {
    name: 'extensions.mime_handler.MimeHandlerService',
    kVersion: 0,
    ptrClass: MimeHandlerServicePtr,
    proxyClass: MimeHandlerServiceProxy,
    stubClass: MimeHandlerServiceStub,
    validateRequest: validateMimeHandlerServiceRequest,
    validateResponse: validateMimeHandlerServiceResponse,
  };
  MimeHandlerServiceStub.prototype.validator = validateMimeHandlerServiceRequest;
  MimeHandlerServiceProxy.prototype.validator = validateMimeHandlerServiceResponse;
  var kBeforeUnloadControl_SetShowBeforeUnloadDialog_Name = 155475040;

  function BeforeUnloadControlPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BeforeUnloadControl,
                                                   handleOrPtrInfo);
  }

  function BeforeUnloadControlAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BeforeUnloadControl, associatedInterfacePtrInfo);
  }

  BeforeUnloadControlAssociatedPtr.prototype =
      Object.create(BeforeUnloadControlPtr.prototype);
  BeforeUnloadControlAssociatedPtr.prototype.constructor =
      BeforeUnloadControlAssociatedPtr;

  function BeforeUnloadControlProxy(receiver) {
    this.receiver_ = receiver;
  }
  BeforeUnloadControlPtr.prototype.setShowBeforeUnloadDialog = function() {
    return BeforeUnloadControlProxy.prototype.setShowBeforeUnloadDialog
        .apply(this.ptr.getProxy(), arguments);
  };

  BeforeUnloadControlProxy.prototype.setShowBeforeUnloadDialog = function(showDialog) {
    var params_ = new BeforeUnloadControl_SetShowBeforeUnloadDialog_Params();
    params_.showDialog = showDialog;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBeforeUnloadControl_SetShowBeforeUnloadDialog_Name,
          codec.align(BeforeUnloadControl_SetShowBeforeUnloadDialog_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BeforeUnloadControl_SetShowBeforeUnloadDialog_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BeforeUnloadControlStub(delegate) {
    this.delegate_ = delegate;
  }
  BeforeUnloadControlStub.prototype.setShowBeforeUnloadDialog = function(showDialog) {
    return this.delegate_ && this.delegate_.setShowBeforeUnloadDialog && this.delegate_.setShowBeforeUnloadDialog(showDialog);
  }

  BeforeUnloadControlStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  BeforeUnloadControlStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBeforeUnloadControl_SetShowBeforeUnloadDialog_Name:
      var params = reader.decodeStruct(BeforeUnloadControl_SetShowBeforeUnloadDialog_Params);
      this.setShowBeforeUnloadDialog(params.showDialog).then(function(response) {
        var responseParams =
            new BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kBeforeUnloadControl_SetShowBeforeUnloadDialog_Name,
            codec.align(BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBeforeUnloadControlRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBeforeUnloadControl_SetShowBeforeUnloadDialog_Name:
        if (message.expectsResponse())
          paramsClass = BeforeUnloadControl_SetShowBeforeUnloadDialog_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBeforeUnloadControlResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBeforeUnloadControl_SetShowBeforeUnloadDialog_Name:
        if (message.isResponse())
          paramsClass = BeforeUnloadControl_SetShowBeforeUnloadDialog_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BeforeUnloadControl = {
    name: 'extensions.mime_handler.BeforeUnloadControl',
    kVersion: 0,
    ptrClass: BeforeUnloadControlPtr,
    proxyClass: BeforeUnloadControlProxy,
    stubClass: BeforeUnloadControlStub,
    validateRequest: validateBeforeUnloadControlRequest,
    validateResponse: validateBeforeUnloadControlResponse,
  };
  BeforeUnloadControlStub.prototype.validator = validateBeforeUnloadControlRequest;
  BeforeUnloadControlProxy.prototype.validator = validateBeforeUnloadControlResponse;
  exports.StreamInfo = StreamInfo;
  exports.MimeHandlerService = MimeHandlerService;
  exports.MimeHandlerServicePtr = MimeHandlerServicePtr;
  exports.MimeHandlerServiceAssociatedPtr = MimeHandlerServiceAssociatedPtr;
  exports.BeforeUnloadControl = BeforeUnloadControl;
  exports.BeforeUnloadControlPtr = BeforeUnloadControlPtr;
  exports.BeforeUnloadControlAssociatedPtr = BeforeUnloadControlAssociatedPtr;
})();