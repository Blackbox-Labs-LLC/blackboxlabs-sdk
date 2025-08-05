# MacroUsageStats

## Example Usage

```typescript
import { MacroUsageStats } from "blackboxlabs-sdk/models";

let value: MacroUsageStats = {
  macrosUsedThisMonth: 824554,
  macrosUsedToday: 94780,
  mostUsedMacros: [],
  totalMacros: 135672,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `macrosUsedThisMonth`                          | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `macrosUsedToday`                              | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `mostUsedMacros`                               | [models.MacroUsage](../models/macrousage.md)[] | :heavy_check_mark:                             | N/A                                            |
| `totalMacros`                                  | *number*                                       | :heavy_check_mark:                             | N/A                                            |