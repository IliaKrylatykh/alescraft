import { ToggleTheme } from "@/features/theme";
import { Layout } from "./layout";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";
import { Profile } from "./profile";

export function AppHeader() {
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={<Profile />}
      actions={<ToggleTheme />}
    />
  );
}
