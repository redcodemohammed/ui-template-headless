import type { UserEntity } from "~/entities/user.entity";

// https://nuxt.com/docs/guide/directory-structure/pages/#typing-custom-metadata
declare module "#app" {
  interface PageMeta {
    public?: boolean;
  }
}

declare global {
  interface IUser {
    id: number;
    email: string;
    username: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    emailIsVerified: boolean;
  }

  type BaseResponse<T, E> =
    | {
        success: true;
        code: number;
        data: T;
      }
    | {
        success: false;
        code: number;
        message: string;
        errors: E;
      };

  type SignInResponse = BaseResponse<
    {
      type: "bearer";
      token: string;
    },
    undefined
  >;

  type SignUpResponse = BaseResponse<
    {
      type: "bearer";
      token: string;
    },
    {
      rule: string;
      field: string;
      message: string;
    }[]
  >;

  type MeResponse = BaseResponse<IUser, undefined>;
}

export {};
