export type CategoryStatus = "active" | "inactive";

export type CategoryRow = {
  id: string;
  name: string;
  description: string;
  status: CategoryStatus;
};

export interface CategoryFormValues {
  name: string;
  description: string | "";
  status: CategoryStatus;
}
