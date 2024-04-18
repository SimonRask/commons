// Copyright 2018-2024 the oak authors. All rights reserved. MIT license.

import { assert, assertEquals } from "./deps_test.ts";

import { HTTP_METHODS, isHttpMethod } from "./method.ts";

Deno.test({
  name: "HTTP_METHODS",
  fn() {
    const methods = [
      "ACL",
      "BIND",
      "CHECKOUT",
      "CONNECT",
      "COPY",
      "DELETE",
      "GET",
      "HEAD",
      "LINK",
      "LOCK",
      "M-SEARCH",
      "MERGE",
      "MKACTIVITY",
      "MKCALENDAR",
      "MKCOL",
      "MOVE",
      "NOTIFY",
      "OPTIONS",
      "PATCH",
      "POST",
      "PROPFIND",
      "PROPPATCH",
      "PURGE",
      "PUT",
      "REBIND",
      "REPORT",
      "SEARCH",
      "SOURCE",
      "SUBSCRIBE",
      "TRACE",
      "UNBIND",
      "UNLINK",
      "UNLOCK",
      "UNSUBSCRIBE",
    ] as const;
    for (const method of methods) {
      assert(HTTP_METHODS.includes(method));
    }
    assertEquals(HTTP_METHODS.length, methods.length);
  },
});

Deno.test({
  name: "isHttpMethod",
  fn() {
    assert(isHttpMethod("GET"));
    assert(!isHttpMethod("PUSH"));
    assert(isHttpMethod("M-SEARCH"));
  },
});
