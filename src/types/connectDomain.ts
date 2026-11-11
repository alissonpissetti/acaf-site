export type ConnectPlan = {
  id: string;
  name: string;
  pricePerMonth: number;
  tierIndex: number;
  description?: string;
};

export type ConnectDomainPublic = {
  schemaVersion?: number;
  connectPlans?: ConnectPlan[];
  corporateBenefitPerMonth?: number;
};
