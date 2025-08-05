# ApiResponseMacroUsageStatsData

## Example Usage

```typescript
import { ApiResponseMacroUsageStatsData } from "blackboxlabs-sdk/models";

let value: ApiResponseMacroUsageStatsData = {
  macrosUsedThisMonth: 609991,
  macrosUsedToday: 898360,
  mostUsedMacros: [
    {
      macroId: "b9de4563-1d1e-49bd-9bd4-ae318506c45d",
      name: "<value>",
      usageCount: 760539,
    },
  ],
  totalMacros: 383075,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `macrosUsedThisMonth`                          | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `macrosUsedToday`                              | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `mostUsedMacros`                               | [models.MacroUsage](../models/macrousage.md)[] | :heavy_check_mark:                             | N/A                                            |
| `totalMacros`                                  | *number*                                       | :heavy_check_mark:                             | N/A                                            |