# UpdateMacroRequest

## Example Usage

```typescript
import { UpdateMacroRequest } from "blackboxlabs-sdk/models/operations";

let value: UpdateMacroRequest = {
  orgId: "40fa8591-2b8c-4b79-a82e-afb7ece0d0e5",
  macroId: "b3ac8334-2f45-4ab8-b207-8e9f0618a97b",
  updateMacroRequest: {},
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `orgId`                                                         | *string*                                                        | :heavy_check_mark:                                              | Organization ID                                                 |
| `macroId`                                                       | *string*                                                        | :heavy_check_mark:                                              | Macro ID                                                        |
| `updateMacroRequest`                                            | [models.UpdateMacroRequest](../../models/updatemacrorequest.md) | :heavy_check_mark:                                              | N/A                                                             |