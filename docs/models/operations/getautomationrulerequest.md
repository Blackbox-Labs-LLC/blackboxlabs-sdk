# GetAutomationRuleRequest

## Example Usage

```typescript
import { GetAutomationRuleRequest } from "blackboxlabs-sdk/models/operations";

let value: GetAutomationRuleRequest = {
  orgId: "578f8f40-5e07-4c85-a5c5-e29fc70e9837",
  ruleId: "d56762d5-00b2-49bb-b710-285425a4a401",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `ruleId`           | *string*           | :heavy_check_mark: | Automation rule ID |