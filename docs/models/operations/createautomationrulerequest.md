# CreateAutomationRuleRequest

## Example Usage

```typescript
import { CreateAutomationRuleRequest } from "blackbox/models/operations";

let value: CreateAutomationRuleRequest = {
  orgId: "7269af3d-750c-47ee-b5b4-6de3856ec977",
  createAutomationRuleRequest: {
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
    description:
      "even beside less scrape gosh indolent whether tray questionable abaft",
    enabled: true,
    name: "<value>",
    trigger: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `orgId`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | Organization ID                                                                   |
| `createAutomationRuleRequest`                                                     | [models.CreateAutomationRuleRequest](../../models/createautomationrulerequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |