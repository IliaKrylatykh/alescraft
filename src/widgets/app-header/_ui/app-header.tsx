import { Layout } from "./layout";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";

export function AppHeader() {
  return <Layout logo={<Logo />} nav={<MainNav />} />;
}
