import { InvitationInterface } from 'interfaces/invitation';
import { QuestionInterface } from 'interfaces/question';
import { VideoInterface } from 'interfaces/video';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  invitation?: InvitationInterface[];
  question?: QuestionInterface[];
  video?: VideoInterface[];
  user?: UserInterface;
  _count?: {
    invitation?: number;
    question?: number;
    video?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
