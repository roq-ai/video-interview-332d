interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Management Representative'],
  customerRoles: ['Guest'],
  tenantRoles: ['Company Owner', 'Management Representative', 'Business Analyst'],
  tenantName: 'Organization',
  applicationName: 'video interview',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
