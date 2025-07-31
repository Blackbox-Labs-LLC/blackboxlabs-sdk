# AgentAnalytics

## Example Usage

```typescript
import { AgentAnalytics } from "blackbox/models";

let value: AgentAnalytics = {
  activeAgentsToday: 513336,
  agentActivity: [],
  averageTicketsPerAgent: 634.7,
  topPerformers: [],
  totalAgents: 509960,
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