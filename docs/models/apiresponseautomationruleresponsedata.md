# ApiResponseAutomationRuleResponseData

## Example Usage

```typescript
import { ApiResponseAutomationRuleResponseData } from "blackbox/models";

let value: ApiResponseAutomationRuleResponseData = {
  actions: [
    {
      actionType: "<value>",
      parameters: {
        "key": "<value>",
      },
    },
  ],
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
  createdAt: "1717663686711",
  description: "modulo politely woot cool instead pry nimble ack",
  enabled: false,
  executionCount: 89107,
  id: "7829b955-45ce-4126-a562-4446d85780bf",
  name: "<value>",
  organizationId: "ac0f67b2-433e-4c65-96bc-360eaef93c7d",
  trigger: "<value>",
  updatedAt: "1735685575088",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `actions`                                                        | [models.AutomationAction](../models/automationaction.md)[]       | :heavy_check_mark:                                               | N/A                                                              |
| `conditions`                                                     | [models.AutomationConditions](../models/automationconditions.md) | :heavy_check_mark:                                               | N/A                                                              |
| `createdAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `enabled`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `executionCount`                                                 | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastExecuted`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `organizationId`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `trigger`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `updatedAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |