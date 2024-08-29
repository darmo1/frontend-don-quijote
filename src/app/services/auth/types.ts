export type ResponseAuthUserAction =
  | {
      status: "success";
      data: any;
      error: null;
    }
  | {
      status: "error";
      data: any;
    }
  | {
      status: 'validation-error';
      data: null;
      error:  Record<string, string[]> ;
    }
  | null;

  export type ResponseAuthUser = {
    email: string;
    fullName: string;
    token:string
  }