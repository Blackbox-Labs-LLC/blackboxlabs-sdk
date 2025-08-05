<!-- Start SDK Example Usage [usage] -->
```typescript
import { Blackbox } from "blackbox";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.getStats();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->