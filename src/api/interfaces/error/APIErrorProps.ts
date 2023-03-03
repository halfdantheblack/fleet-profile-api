export interface APIErrorProps {
    message: string;
    stack ?: string;
    errors ?: any[];
    status : number;
    isPublic ?: boolean;
  }