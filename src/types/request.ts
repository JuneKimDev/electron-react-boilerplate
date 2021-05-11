export interface IRequest {
  url: string;
  params?: Record<string, unknown>;
  data?: Record<string, unknown>;
  subscriber?: string;
  token?: string;
}

export interface IReqImageFile extends IRequest {
  filename: string;
  generator: Generator<{ url: string; filename: string }>;
}
