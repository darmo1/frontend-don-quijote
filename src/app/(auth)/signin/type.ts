export type LoginUserUser =
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