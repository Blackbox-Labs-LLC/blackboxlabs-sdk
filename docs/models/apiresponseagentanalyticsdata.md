# ApiResponseAgentAnalyticsData

## Example Usage

```typescript
import { ApiResponseAgentAnalyticsData } from "blackboxlabs-sdk/models";

let value: ApiResponseAgentAnalyticsData = {
  activeAgentsToday: 170172,
  agentActivity: [
    {
      agentId: "117b4c38-70c3-4e84-be27-3c4c5565fb32",
      agentName: "<value>",
      eventsToday: 581887,
      lastActivity: "<value>",
      status: "<value>",
    },
  ],
  averageTicketsPerAgent: 3127.1,
  topPerformers: [],
  totalAgents: 678544,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `activeAgentsToday`                                        | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `agentActivity`                                            | [models.AgentActivity](../models/agentactivity.md)[]       | :heavy_check_mark:                                         | N/A                                                        |
| `averageTicketsPerAgent`                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `topPerformers`                                            | [models.AgentPerformance](../models/agentperformance.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `totalAgents`                                              | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |