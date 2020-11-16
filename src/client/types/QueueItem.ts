export default interface QueueItem {
  key?: number;
  id?: number;
  number?: number;
  registration_date?: string;
  country?: string;
  car_number: string;
  product: string;
  driver: string;
  car_owner?: string;
  car_location: string;
  car_status: string;
  isOwner?: boolean;
}
