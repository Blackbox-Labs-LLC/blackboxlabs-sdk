# UpdateAutomationRuleRequest

## Example Usage

```typescript
import { UpdateAutomationRuleRequest } from "blackbox/models/operations";

let value: UpdateAutomationRuleRequest = {
  orgId: "9a566318-e8be-4d7a-a0c7-5616f5343d96",
  ruleId: "7d6f50dc-7ef2-4867-bf7f-fb8a9a15c02e",
  updateAutomationRuleRequest: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `orgId`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | Organization ID                                                                   |
| `ruleId`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | Automation rule ID                                                                |
| `updateAutomationRuleRequest`                                                     | [models.UpdateAutomationRuleRequest](../../models/updateautomationrulerequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |