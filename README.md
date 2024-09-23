https://github.com/vitest-dev/vitest/pull/6541

```sh
pnpm i
node generate-files.mjs
pnpm bench
...
 ✓ src/173.bench.js (2) 1736ms
     name               hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · case 0  29,410,449.89  0.0000  0.4399  0.0000  0.0000  0.0000  0.0000  0.0002  ±2.75%  1000000   fastest
   · case 1  27,044,301.03  0.0000  0.0847  0.0000  0.0000  0.0000  0.0000  0.0001  ±0.49%  1000000
 ❯ src/174.bench.js (2)
     name        hz     min     max    mean     p75     p99    p995    p999     rme  samples
   ⠦ case 0  0.0000  0.0000  0.0000  0.0000  0.0000  0.0000  0.0000  0.0000  ±0.00%        0
   ⠦ case 1  0.0000  0.0000  0.0000  0.0000  0.0000  0.0000  0.0000  0.0000  ±0.00%        0

<--- Last few GCs --->

[116815:0xc751350]   362059 ms: Scavenge 3893.2 (3956.6) -> 3891.9 (3961.6) MB, 6.85 / 0.00 ms  (average mu = 0.152, current mu = 0.172) allocation failure;
[116815:0xc751350]   362068 ms: Scavenge 3894.8 (3961.6) -> 3892.8 (3972.3) MB, 7.81 / 0.00 ms  (average mu = 0.152, current mu = 0.172) task;
[116815:0xc751350]   362192 ms: Scavenge 3925.9 (3996.7) -> 3925.5 (3999.5) MB, 16.66 / 0.00 ms  (average mu = 0.152, current mu = 0.172) allocation failure;


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
----- Native stack trace -----

 1: 0xb86ecf node::OOMErrorHandler(char const*, v8::OOMDetails const&) [node (vitest)]
```
