import { Session } from "next-auth";

export interface sessionContextTypes{
  session: Session | null;
  setSession: (session: Session) => void;
}