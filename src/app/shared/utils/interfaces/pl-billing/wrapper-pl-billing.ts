export interface IWrapperPlBilling {
  status: IPlBillingStatus;
  data: IPlBillingData[];
}

interface IPlBillingStatus {
  elapsed: number;
  timestamp: string;
}

export interface IPlBillingData {
  id: string;
  slug: string;
  symbol: string;
  metrics: IMetricData;
}

interface IMetricData {
  market_data: IMarketData;
}

interface IMarketData {
  price_usd: number;
}
