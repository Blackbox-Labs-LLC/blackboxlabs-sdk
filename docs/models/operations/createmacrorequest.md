# CreateMacroRequest

## Example Usage

```typescript
import { CreateMacroRequest } from "blackbox/models/operations";

let value: CreateMacroRequest = {
  orgId: "4e37d0c1-f5d2-4db2-9ef2-e8903c746025",
  createMacroRequest: {
    content: "<value>",
    description:
      "whether verify remorseful or aha attraction our needily yum less",
    name: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `orgId`                                                         | *string*                                                        | :heavy_check_mark:                                              | Organization ID                                                 |
| `createMacroRequest`                                            | [models.CreateMacroRequest](../../models/createmacrorequest.md) | :heavy_check_mark:                                              | N/A                                                             |