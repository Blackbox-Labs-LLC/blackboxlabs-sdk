# ExtendSessionRequest

## Example Usage

```typescript
import { ExtendSessionRequest } from "blackboxlabs-sdk/models/operations";

let value: ExtendSessionRequest = {
  sessionId: "8077f646-35e2-4784-b33f-9f4919a02f0c",
  extendSessionRequest: {
    extensionHours: 519088,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `sessionId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Session ID                                                          |
| `extendSessionRequest`                                              | [models.ExtendSessionRequest](../../models/extendsessionrequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |