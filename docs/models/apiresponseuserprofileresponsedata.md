# ApiResponseUserProfileResponseData

## Example Usage

```typescript
import { ApiResponseUserProfileResponseData } from "blackboxlabs-sdk/models";

let value: ApiResponseUserProfileResponseData = {
  createdAt: "1735496486884",
  email: "Webster.Quitzon2@yahoo.com",
  emailVerified: false,
  id: "8bf97403-8a5d-45ab-85c8-99781a4a610b",
  name: "<value>",
  organizations: [],
  twoFaEnabled: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `createdAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `email`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `emailVerified`                                              | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `organizations`                                              | [models.UserOrgMembership](../models/userorgmembership.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `twoFaEnabled`                                               | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |