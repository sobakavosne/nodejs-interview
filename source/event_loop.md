**THE NODE.JS SYSTEM**
```
   ┌─────────────┐   ┌────────────┐   ┌──────────────────────────────────────────────────────┐
 ┌>│ Application │─┐ │  NODE.JS   │   │                       LIBUV                          │
 │ └─────────────┘ | │  BINDINGS  │   │  EVENT          (Asynchronous I/O)         WORKER    │
 │    JavaScript   | │            │   │  QUEUE                                     THREADS   │
 │ ┌─────────────┐ | │            │   │ ┌ ─ ─ ┐              BLOCKING OPERATION  ┌ ─ ─ ─ ─ ┐ │
 └─│  V8 engine  │<┘ │ (NODE API) │   │ | ─ ─ |──> ┌─>─────┐ ──────────────────> |   FS    | │
   |             |   |            |   | | ─ ─ |    |       |                     | NETWORK | │
   |             | ─────────────────> | | ─ ─ |    | EVENT |                     | PROCESS | │
   │             │   │     OS     │   │ │ ─ ─ │    | LOOP  |                     │ ─ ─ ─ ─ │ │
   |             |   | OPERATIONS |   | | ─ ─ |    |       |   EXECUTE CALLBACK  | ─ ─ ─ ─ | │
   |             | <───────────────── | | ─ ─ |<── └─────<─┘ <────────────────── | ─ ─ ─ ─ | │
   |             │   |            │   | └ ─ ─ ┘                                  └ ─ ─ ─ ─ ┘ │
   └─────────────┘   └────────────┘   └──────────────────────────────────────────────────────┘
```
**EVENT LOOP**
```
   ┌───────────────────────────┐
┌─>│           timers          │    - setTimeout() and setInterval()
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │    - executes I/O callbacks deferred to the next loop iteration
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │    - inernal phase
│  └─────────────┬─────────────┘      ┌───────────────┐ - retrieve new I/O events; 
│  ┌─────────────┴─────────────┐      │   incoming:   │ - execute I/O related callbacks (almost all 
│  │           poll            │<─────┤  connections, │   with the exception of close callbacks, the 
│  └─────────────┬─────────────┘      │   data, etc.  │   ones scheduled by timers, and setImmediate());
│  ┌─────────────┴─────────────┐      └───────────────┘ - node will block here when appropriate
│  │           check           │    - setImmediate()
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │    - some close callbacks, e.g. socket.on('close', ...)
   └───────────────────────────┘
```