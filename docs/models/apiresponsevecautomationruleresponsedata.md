# ApiResponseVecAutomationRuleResponseData

## Example Usage

```typescript
import { ApiResponseVecAutomationRuleResponseData } from "blackboxlabs-sdk/models";

let value: ApiResponseVecAutomationRuleResponseData = {
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
  createdAt: "1709924804632",
  description: "usefully lock till backburn",
  enabled: false,
  executionCount: 620154,
  id: "51a8da52-26af-4d5f-b4da-b7ef7964ae33",
  name: "<value>",
  organizationId: "e6237eb5-c483-41d5-8ccd-7e3755c242c2",
  trigger: "<value>",
  updatedAt: "1735685659105",
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