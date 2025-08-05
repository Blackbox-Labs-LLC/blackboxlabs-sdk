# ApiResponseAuthResponseData

## Example Usage

```typescript
import { ApiResponseAuthResponseData } from "blackboxlabs-sdk/models";

let value: ApiResponseAuthResponseData = {
  emailVerified: true,
  organizations: [
    {
      domain: "enchanting-armchair.org",
      id: "d4167720-b7b5-43e0-97c7-42e63bed0b1e",
      name: "<value>",
      role: "<value>",
    },
  ],
  sessionToken: "<value>",
  twoFaEnabled: false,
  userId: "5d7a0d4d-9343-450b-9dc2-1851672de3d4",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `emailVerified`                                  | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `organizations`                                  | [models.UserOrgInfo](../models/userorginfo.md)[] | :heavy_check_mark:                               | N/A                                              |
| `sessionToken`                                   | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `twoFaEnabled`                                   | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `userId`                                         | *string*                                         | :heavy_check_mark:                               | N/A                                              |