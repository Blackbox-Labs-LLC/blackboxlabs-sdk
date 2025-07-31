# ExecuteAutomationRulesRequest

## Example Usage

```typescript
import { ExecuteAutomationRulesRequest } from "blackbox/models/operations";

let value: ExecuteAutomationRulesRequest = {
  orgId: "66e414fd-6597-4257-9908-30261e7df464",
  trigger: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `orgId`                 | *string*                | :heavy_check_mark:      | Organization ID         |
| `trigger`               | *string*                | :heavy_check_mark:      | Trigger type to execute |
| `ticketId`              | *string*                | :heavy_minus_sign:      | Ticket ID for context   |
| `userId`                | *string*                | :heavy_minus_sign:      | User ID for context     |
| `csatScore`             | *number*                | :heavy_minus_sign:      | CSAT score for context  |