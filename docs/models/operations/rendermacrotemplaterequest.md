# RenderMacroTemplateRequest

## Example Usage

```typescript
import { RenderMacroTemplateRequest } from "blackbox/models/operations";

let value: RenderMacroTemplateRequest = {
  orgId: "de48de87-390c-476e-a127-f0ee4409951a",
  macroTemplateRequest: {
    macroId: "e5852723-488c-4c84-bacb-4ce5d8db9798",
    variables: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orgId`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Organization ID                                                     |
| `macroTemplateRequest`                                              | [models.MacroTemplateRequest](../../models/macrotemplaterequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |