# CreateAutomationRuleRequest

## Example Usage

```typescript
import { CreateAutomationRuleRequest } from "blackboxlabs-sdk/models";

let value: CreateAutomationRuleRequest = {
  actions: [],
  conditions: {
    conditions: [
      {
        field: "<value>",
        operator: "<value>",
        value: "<value>",
      },
    ],
    logic: "<value>",
  },
  description: "knife circa majority for",
  enabled: false,
  name: "<value>",
  trigger: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `actions`                                                        | [models.AutomationAction](../models/automationaction.md)[]       | :heavy_check_mark:                                               | N/A                                                              |
| `conditions`                                                     | [models.AutomationConditions](../models/automationconditions.md) | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `enabled`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `trigger`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |