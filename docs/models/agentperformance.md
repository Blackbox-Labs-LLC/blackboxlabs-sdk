# AgentPerformance

## Example Usage

```typescript
import { AgentPerformance } from "blackboxlabs-sdk/models";

let value: AgentPerformance = {
  agentId: "90899081-cdc2-45af-92b6-719dc3f6470a",
  agentName: "<value>",
  messagesSent: 500632,
  resolutionRate: 4321.23,
  ticketsHandled: 76049,
  ticketsResolved: 211212,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `agentId`                    | *string*                     | :heavy_check_mark:           | N/A                          |
| `agentName`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `averageResolutionTimeHours` | *number*                     | :heavy_minus_sign:           | N/A                          |
| `averageResponseTimeHours`   | *number*                     | :heavy_minus_sign:           | N/A                          |
| `messagesSent`               | *number*                     | :heavy_check_mark:           | N/A                          |
| `resolutionRate`             | *number*                     | :heavy_check_mark:           | N/A                          |
| `ticketsHandled`             | *number*                     | :heavy_check_mark:           | N/A                          |
| `ticketsResolved`            | *number*                     | :heavy_check_mark:           | N/A                          |