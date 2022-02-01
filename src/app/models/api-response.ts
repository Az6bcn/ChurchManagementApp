export interface ApiResponse<T> {
  result: T;
  results: Array<T>;
  success: boolean;
  errorMessage: string
}
