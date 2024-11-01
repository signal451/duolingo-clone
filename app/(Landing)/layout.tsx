import { Footer } from "./_component/footer";
import { Header } from "./_component/header";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex flex-1 items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LandingPageLayout;
