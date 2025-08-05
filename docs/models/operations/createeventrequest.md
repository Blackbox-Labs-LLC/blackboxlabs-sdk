# CreateEventRequest

## Example Usage

```typescript
import { CreateEventRequest } from "blackboxlabs-sdk/models/operations";

let value: CreateEventRequest = {
  orgId: "46587a9e-fd9f-4b3c-99e0-e3f5dfaf0913",
  createEventRequest: {
    eventType: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `orgId`                                                         | *string*                                                        | :heavy_check_mark:                                              | Organization ID                                                 |
| `createEventRequest`                                            | [models.CreateEventRequest](../../models/createeventrequest.md) | :heavy_check_mark:                                              | N/A                                                             |