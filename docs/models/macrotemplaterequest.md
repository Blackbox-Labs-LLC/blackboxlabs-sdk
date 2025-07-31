# MacroTemplateRequest

## Example Usage

```typescript
import { MacroTemplateRequest } from "blackbox/models";

let value: MacroTemplateRequest = {
  macroId: "31029d6c-f17c-4763-9ebb-e312c1af946b",
  variables: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `macroId`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `variables`              | Record<string, *string*> | :heavy_check_mark:       | N/A                      |