# AutomationAction

## Example Usage

```typescript
import { AutomationAction } from "blackboxlabs-sdk/models";

let value: AutomationAction = {
  actionType: "<value>",
  parameters: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `actionType`          | *string*              | :heavy_check_mark:    | N/A                   |
| `parameters`          | Record<string, *any*> | :heavy_check_mark:    | N/A                   |