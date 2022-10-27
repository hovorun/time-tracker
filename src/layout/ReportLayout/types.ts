export interface WorkDay {
  id?: number;
  isHidden?: boolean;
  reportedTime?: string;
  startTime?: string;
  endTime?: string;
}

export interface UserConfiguration {
  userName: string;
  id?: number;
  config: WorkDay[];
}
