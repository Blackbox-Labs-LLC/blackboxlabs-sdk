# DeleteAutomationRuleRequest

## Example Usage

```typescript
import { DeleteAutomationRuleRequest } from "blackboxlabs-sdk/models/operations";

let value: DeleteAutomationRuleRequest = {
  orgId: "bb779a41-6e1e-4bbc-b794-c3f01cbdb2da",
  ruleId: "e55972c6-e330-41e3-be74-2cbecec6298d",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `ruleId`           | *string*           | :heavy_check_mark: | Automation rule ID |