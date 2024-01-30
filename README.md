# oak commons

[![deno.land/x/oak_commons](https://deno.land/badge/oak_commons/version)](https://deno.land/x/oak_commons)
[![oak_commons ci](https://github.com/oakserver/commons/workflows/ci/badge.svg)](https://github.com/oakserver/commons)

A set of APIs that are common to HTTP/HTTPS servers.

> [!NOTE]
> Originally all this code was contributed to the Deno standard library but the
> maintainers after accepting the contributions have moved to remove this code,
> so I had to resurrect this library to be able to provide common HTTP
> functionality.

Each module is designed to be largely independent of other modules, with as few
shared dependencies as reasonable. These modules are designed as building blocks
for more complex HTTP/HTTPS and server frameworks.

The [acorn](https://deno.land/x/acorn) (a RESTful services framework) and
[oak](https://deno.land/x/oak) are examples of something built on top of
`oak_commons`.

The
[inline documentation](https://deno.land/x/oak_commons?doc)
for each modules is the best guide on the usage of the APIs:

- [/cookie_map.ts](https://deno.land/x/oak_commons/cookie_map.ts) -
  an API for managing signed and unsigned cookies server side.
- [/http_errors.ts](https://deno.land/x/oak_commons/http_errors.ts) -
  utilities for working with HTTP Error status as JavaScript errors.
- [/media_types.ts](https://deno.land/x/oak_commons/media_types.ts) - utilities
  for working with media types from a request.
- [/method.ts](https://deno.land/x/oak_commons/method.ts) -
  utilities for working with HTTP methods/verbs in a type safe way.
- [/server_sent_event.ts](https://deno.land/x/oak_commons/method.ts) -
  an abstraction for managing server sent events like DOM events.
- [/status.ts](https://deno.land/x/oak_commons/status.ts) -
  utilities for working with HTTP statuses in a type safe way.

---

Copyright 2018 - 2024 the oak authors. All rights reserved. MIT License.
