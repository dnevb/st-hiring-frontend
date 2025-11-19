export interface IEvent {
  id: number;
  name: string;
  description: string;
  location?: string;
  date: string;
  created_at: string;
  updated_at: string;
  availableTickets?: never[];
}

export interface ISetting {
  clientId: number;
  deliveryMethods: DeliveryMethod[];
  fulfillmentFormat: FulfillmentFormat;
  printer: Printer;
  printingFormat: PrintingFormat;
  scanning: Scanning;
  paymentMethods: PaymentMethods;
  ticketDisplay: TicketDisplay;
  customerInfo: CustomerInfo;
}

interface DeliveryMethod {
  name: string;
  enum: string;
  order: number;
  isDefault: boolean;
  selected: boolean;
}

interface FulfillmentFormat {
  rfid: boolean;
  print: boolean;
}

interface Printer {
  id: any;
}

interface PrintingFormat {
  formatA: boolean;
  formatB: boolean;
}

interface Scanning {
  scanManually: boolean;
  scanWhenComplete: boolean;
}

interface PaymentMethods {
  cash: boolean;
  creditCard: boolean;
  comp: boolean;
}

interface TicketDisplay {
  leftInAllotment: boolean;
  soldOut: boolean;
}

interface CustomerInfo {
  active: boolean;
  basicInfo: boolean;
  addressInfo: boolean;
}
